News Backend
News Backend, haber içeriklerini yöneten ve kullanıcıya sunan bir RESTful API servisidir. Proje, Node.js ve Express.js kullanılarak geliştirilmiş, MySQL veritabanı ile çalışmakta ve kimlik doğrulama için JWT kullanılmaktadır.

Özellikler
RESTful API mimarisi

Sequelize ORM ile MySQL veritabanı yönetimi

JWT ile kimlik doğrulama

Kullanıcı, haber, kategori gibi yapılar

Middleware ile hata yönetimi

.env ile gizli yapılandırma

Kullanılan Teknolojiler
Node.js

Express.js

MySQL

Sequelize

JWT (jsonwebtoken)

bcrypt

dotenv

1-Depoyu klonlayın:
git clone https://github.com/muhsinlight/smartnews-backend.git

cd smartnews-backend

2-Gerekli paketleri yükleyin:

npm install

3-.env dosyasını oluşturun ve şu şekilde yapılandırın:

PORT=3000

DB_HOST=localhost

DB_USER=root

DB_PASSWORD=your_password

DB_NAME=smartnews_db

DB_PORT=3306

JWT_SECRET=your_jwt_secret

4-Uygulamayı başlatın:

npm start


