# KokoPedia

## Apa itu KokoPedia
#### Website clone tokopedia 

## Tech stack
- ReactJs
- expressJs
- TailwindCss
- framer-motion
- mysql

## Fitur
 - Login & Logout
 - Upload Produk
 - Beli produk
 - Add to cart
 - Management produk
 - lacak riwayat pembelian
 - Cari Produk
 - dll

## Requirement
 - nodeJs
 - web server

## Instalation
#### 1.Clone repository ke dalam komputer/device lokal
```
git clone https://github.com/linnxw/KokoPedia
```

### 2.Masuk ke direktori client repository
```
cd repo/client
```

### 3.Install dependency yg dibutuhkan dengan perintah:
```
npm install
```
### 4.Buat file .env 
```
VITE_API_BASE_URL = [http://localhost:9797]
```
### 5.Pindah ke direktori server
```
cd ../server
```

### 6.Lakukan instalasi dependency:
```
npm install
```

### 7.Buat file .env
```
PORT = 9797
ACCES_TOKEN_SECRET = [Random string]
REFRESH_TOKEN_SECRET = [Random string]
```
### 8.Setup Database mysql
- Buat database dengan nama penjualan
- Buat tabel user dengan field nama,email,passowrd,alamat, refresh_token
- buat tabel produk 
### 9.Buat koneksi Database
Ganti Konfigurasi untuk koneksi database di folder config dan sesuaikan dengan konfigurasi yg anda miliki

### 10.Start server dengan perintah:
```
nodemon
```
### 11.Pindah ke direktori client
```
cd ../client
```
### 12.Run 
```
npm start
```

#### 13.Buka browser:
```
http://localhost:5173
```


