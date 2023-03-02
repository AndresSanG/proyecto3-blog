const postServices = require('./posts.services')

const router = require('express').Router()

router.get('/posts',postServices.getAllPosts)
router.post('/posts',postServices.postNewPost)
router.get('/posts/:id',postServices.getPostById)
router.patch('/posts/:id',postServices.patchPost)
router.delete('/posts/:id',postServices.deletePostId)

module.exports = router