# JavaScript ile Sıfırdan Blockchain Oluşturma

Bu projede, JavaScript kullanarak sıfırdan bir blockchain oluşturmayı hedefliyoruz. Blockchain, Bitcoin ve Ethereum gibi Proof of Work (PoW) konsensüs mekanizmasını kullanarak güvenli bir şekilde çalışacak. Proje kapsamında yeni bloklar oluşturacak, işlemleri kaydedecek ve blokların doğruluğunu sağlayacak algoritmalar geliştireceğiz.

## Proje Özeti

- **Blockchain güvenliği için Proof of Work** kullanılacak.
- **Madencilik işlemiyle yeni bloklar** oluşturulacak.
- **Değiştirilemez yeni işlemler** (transactions) oluşturulacak.
- **Tüm blok verileri ve blockchain doğrulanabilecek**.
- **Tüm adres/işlem/blok verileri alınabilecek**.

## Katmanlar

1. Blockchain veri yapılarını oluşturmak.
2. Blockchain için API/Sunucu oluşturmak.
3. Merkeziyetsiz bir blockchain ağı oluşturmak.
4. Ağ konsensüs algoritmasını oluşturmak.
5. Blok explorer uygulaması oluşturmak.

## Kurulum
```bash
mkdir blockchain
cd blockchain
mkdir dev # Çoğu kodlama bu klasör içinde gerçekleşecek
cd dev
touch blockchain.js test.js
cd ..
npm init
```
Daha detaylı bilgi ve adım adım rehber için Medium makalemi okuyabilirsiniz: [Medium Makalesi](https://medium.com/@merttanitan/javascript-ile-blockchain-olu%C5%9Fturmak-f17fd42ac7f5)
