const express = require('express');
const router = express.Router()

// Import posts
const posts = require('../posts')

// index
router.get('/', (req,res) => {
    res.json(posts)
});

// show
router.get('/:slug', (req,res) => {
    const postSlug = req.params.slug
    posts.forEach(post => {
        if(post.slug === postSlug){
            res.json(post)
        }
        else {
            res.send('Post not found')
        }
    })  
})

// create
router.post('/', (req,res) => {
    res.send('create a new post')
})

// update
router.put('/:slug', (req,res) => {
    const postSlug = req.params.slug
    res.send(`update the post with id: ${postSlug}`)
})

// modify
router.patch('/:slug', (req,res) => {
    const postSlug = req.params.slug
    res.send(`modify the post with id: ${postSlug}`)
})

// destroy
router.delete('/:slug', (req,res) => {
    const postSlug = req.params.slug
    res.send(`delete the post with id: ${postSlug}`)
})

module.exports = router