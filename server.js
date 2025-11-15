const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// In-memory database (replace with real database in production)
let users = {};

// Register/Login endpoint
app.post('/api/auth', (req, res) => {
    const { username } = req.body;
    if (!username) {
        return res.status(400).json({ error: 'Username required' });
    }
    
    if (!users[username]) {
        users[username] = { posts: [] };
    }
    
    res.json({ success: true, username });
});

// Create post endpoint
app.post('/api/posts', (req, res) => {
    const { username, content } = req.body;
    
    if (!username || !content) {
        return res.status(400).json({ error: 'Username and content required' });
    }
    
    if (!users[username]) {
        return res.status(404).json({ error: 'User not found' });
    }
    
    const post = {
        id: Date.now(),
        content,
        timestamp: new Date().toISOString()
    };
    
    users[username].posts.push(post);
    res.json({ success: true, post });
});

// Search posts endpoint
app.get('/api/search', (req, res) => {
    const { username, keywords } = req.query;
    
    if (!username || !keywords) {
        return res.status(400).json({ error: 'Username and keywords required' });
    }
    
    if (!users[username]) {
        return res.status(404).json({ error: 'User not found' });
    }
    
    // Convert keywords to lowercase and split by spaces
    const searchTerms = keywords.toLowerCase().trim().split(/\s+/);
    
    // Filter posts that contain any of the search terms
    const matchingPosts = users[username].posts.filter(post => {
        const postContent = post.content.toLowerCase();
        return searchTerms.some(term => postContent.includes(term));
    });
    
    res.json({ 
        success: true, 
        posts: matchingPosts,
        count: matchingPosts.length 
    });
});

// Get all posts for a user
app.get('/api/posts/:username', (req, res) => {
    const { username } = req.params;
    
    if (!users[username]) {
        return res.status(404).json({ error: 'User not found' });
    }
    
    res.json({ 
        success: true, 
        posts: users[username].posts 
    });
});

// Delete post endpoint
app.delete('/api/posts/:username/:postId', (req, res) => {
    const { username, postId } = req.params;
    
    if (!users[username]) {
        return res.status(404).json({ error: 'User not found' });
    }
    
    const postIndex = users[username].posts.findIndex(p => p.id === parseInt(postId));
    
    if (postIndex === -1) {
        return res.status(404).json({ error: 'Post not found' });
    }
    
    users[username].posts.splice(postIndex, 1);
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
