# 📰 News Backend

Bu proje, haber içeriği yönetimi için oluşturulmuş bir backend API uygulamasıdır. Proje, haberlerin kategorilere ayrılmasını, kullanıcı yönetimini ve haber içeriğinin servis edilmesini sağlar.

## 🚀 Teknolojiler

- **Node.js**
- **Express.js**
- **JWT Authentication**
- **dotenv**
- **CORS**
- **bcryptjs**

## 📦 Kurulum

```bash
# Depoyu klonla
git clone https://github.com/muhsinlight/news-backend.git

# Proje klasörüne geç
cd news-backend

# Bağımlılıkları yükle
npm install
```

### 🛠️ Ortam Değişkenleri

Projenin kök dizinine `.env` dosyası ekleyin ve aşağıdaki ortam değişkenlerini tanımlayın:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## ▶️ Uygulamayı Çalıştırma

```bash
# Geliştirme modunda çalıştır
npm run dev

## 🔐 Kimlik Doğrulama

JWT (JSON Web Token) ile kullanıcı kimlik doğrulaması yapılmaktadır. Giriş yapan kullanıcıya bir token verilir ve bu token, korunan rotalara erişimde kullanılır.

## 📌 Katkıda Bulunma

Katkılar memnuniyetle karşılanır! Lütfen önce bir issue açın, ardından bir pull request gönderin.

