const express = require('express');
const router = express.Router()

// index
router.get('/', (req,res) => {
    res.send('Return all posts')
});

// show
router.get('/:id', (req,res) => {
    const postId = req.params.id
    res.send(`show the post with id: ${postId}`)
})

// create
router.post('/', (req,res) => {
    res.send('create a new post')
})

// update
router.put('/:id', (req,res) => {
    const postId = req.params.id
    res.send(`update the post with id: ${postId}`)
})

// modify
router.patch('/:id', (req,res) => {
    const postId = req.params.id
    res.send(`modify the post with id: ${postId}`)
})

// destroy
router.delete('/:id', (req,res) => {
    const postId = req.params.id
    res.send(`delete the post with id: ${postId}`)
})

module.exports = router