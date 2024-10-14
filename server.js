const express = require('express');
const path = require('path');
const app = express();

// Menyajikan file statis dari folder "dist"
app.use(express.static(path.join(__dirname, 'dist')));

// Jika ada request yang tidak cocok dengan file statis, kembalikan "index.html"
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

// Tentukan port (gunakan port 5000 jika tidak ada environment variable)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
