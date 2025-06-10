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
DB_HOST=localhost
DB_NAME=news
DB_USER=root
DB_PASS=your_password_here

JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=1d

NEWSAPI_KEY=your_newsapi_key_here
GUARDIAN_KEY=your_guardian_key_here


## ▶️ Uygulamayı Çalıştırma

```bash
# Projeyi Çalıştırmak İçin
node server.js
## 🔐 Kimlik Doğrulama

JWT (JSON Web Token) ile kullanıcı kimlik doğrulaması yapılmaktadır. Giriş yapan kullanıcıya bir token verilir ve bu token, korunan rotalara erişimde kullanılır.

## 📌 Katkıda Bulunma

Katkılar memnuniyetle karşılanır! Lütfen önce bir issue açın, ardından bir pull request gönderin.

