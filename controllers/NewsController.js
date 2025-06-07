const axios = require('axios');
require('dotenv').config();


const NEWSAPI_KEY = process.env.NEWSAPI_KEY;
const GUARDIAN_KEY = process.env.GUARDIAN_KEY;

const getNews = async (req, res) => {
 
  const { interests = [] } = req.body;
  if (!Array.isArray(interests) || interests.length === 0) {
    return res.status(400).json({ 
      success: false, 
      message: 'En az bir ilgi alanı belirtmelisiniz.' 
    });
  }

  try {
    const newsApiPromises = interests.map((category) =>
      axios.get(`https://newsapi.org/v2/top-headlines`, {
        params: {
          category,
          country: 'us',
          apiKey: NEWSAPI_KEY,
        },
      }).catch(e => {
        console.error(`NewsAPI error for category ${category}:`, e.message);
        return { data: { articles: [] } };
      })
    );

    const guardianPromises = interests.map((interest) =>
      axios.get(`https://content.guardianapis.com/search`, {
        params: {
          q: interest,
          'api-key': GUARDIAN_KEY,
          'show-fields': 'headline,thumbnail,trailText,short-url',
        },
      }).catch(e => {
        console.error(`Guardian error for interest ${interest}:`, e.message);
        return { data: { response: { results: [] } } }; 
      })
    );

    
    const [newsApiResults, guardianResults] = await Promise.all([
      Promise.all(newsApiPromises),
      Promise.all(guardianPromises),
    ]);

    
    const newsApiArticles = newsApiResults.flatMap((res) =>
      res.data.articles?.map((article) => ({
        source: 'NewsAPI',
        title: article.title || 'Başlık yok',
        description: article.description || 'Açıklama yok',
        url: article.url || '#',
        image: article.urlToImage || null,
        publishedAt: article.publishedAt || new Date().toISOString(),
      })) || []
    );

    const guardianArticles = guardianResults.flatMap((res) =>
      res.data.response?.results?.map((item) => ({
        source: 'The Guardian',
        title: item.webTitle || 'Başlık yok',
        description: item.fields?.trailText || 'Açıklama yok',
        url: item.webUrl || '#',
        image: item.fields?.thumbnail || null,
        publishedAt: item.webPublicationDate || new Date().toISOString(),
      })) || []
    );

    const allNews = [...newsApiArticles, ...guardianArticles];

    // 5. Sonuç kontrolü eklendi
    if (allNews.length === 0) {
      return res.status(404).json({ 
        success: false, 
        message: 'Belirtilen kriterlere uygun haber bulunamadı.' 
      });
    }

    res.status(200).json({
      success: true,
      total: allNews.length,
      articles: allNews.sort((a, b) => 
        new Date(b.publishedAt) - new Date(a.publishedAt)
      ),
    });
  } catch (error) {
    // 6. Hata yönetimi geliştirildi
    console.error('Haber çekme hatası:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Haberler alınamadı.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};
module.exports = { getNews };