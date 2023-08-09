const cors = require('cors');
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const getRandomFileName = require('./getRandomFileName');
const app = express();
const port = 8080;
const url = 'http://127.0.0.1:8080';
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, 'dist/uploads/');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const extname = '.' + file.mimetype.split('/')[1];
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + extname;
    cb(null, uniqueSuffix);
    console.log();
  }
});
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype.startsWith('video/')) {
      cb(null, true);
    } else {
      cb(new Error('只能上传视频文件'));
    }
  }
}).single('files');
app.get('/', (req, res) => {
  try {
    const HTML = fs.readFileSync('./dist/index.html', 'utf8');
    res.send(HTML);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/xjj', async (req, res) => {
  const folderPath = path.join('', 'dist/uploads/'); // 替换为实际的文件夹路径
  try {
    const randomFileName = await getRandomFileName(folderPath);
    const absolutePath = path.join('/uploads', randomFileName);
    res.json({ videoUrl: url + absolutePath });
    console.log(url + absolutePath);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});
app.post('/upload', upload, async (req, res) => {
  const file = req.file;
  if (!file) {
    res.status(400).send('No file uploaded');
  } else {
    try {
      // 处理上传的文件
      res.sendStatus(200)
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }
});

app.listen(port, () => {
  console.log("成功启动端口:" + url);
});