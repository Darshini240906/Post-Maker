const express = require('express');
const multer = require('multer');
const cors = require('cors');
const uploadimage = require('./services/storage.service.js');
const postModel = require('./models/post.model.js');

const app = express();
app.use(express.json());
app.use(cors());

const upload = multer({ storage: multer.memoryStorage() });

app.post('/create-post', upload.single("img"), async (req, res) => {
    try {
        const result = await uploadimage(req.file.buffer);
        const post = await postModel.create({
            img: result.url,
            caption: req.body.caption
        });
        res.json({ message: "Post created successfully", post });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error creating post", error: err.message });
    }
});

app.get('/posts', async (req, res) => {
    try {
        const posts = await postModel.find();
        res.json(posts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching posts" });
    }
});

module.exports = app;
