const { findAllPosts, findPostById, createPost, deletePost, updatePost } = require('./posts.controllers')

const getAllPosts = (req,res) =>{
    findAllPosts()
    .then((data)=>{
        res.status(200).json(data)
    })
    .catch(error =>{
        res.status(400).json(error)
    })
}

const getPostById = (req,res) =>{
    const id = Number(req.params.id)
    findPostById(id)
    .then((data)=>{
        if(data){
            res.status(200).json(data)
        }else{
            res.status(400).json({
                message:'Invalid Id'
            })
        }
    })
    .catch(error =>{
        res.status(400).json(error)
    })
}

const postNewPost = (req,res) =>{
    const postObj = req.body
    createPost(postObj)
    .then((data)=>{
        res.status(201).json(data)
    })
    .catch(error => {
        res.statu(400).json(error)
    })
}

const deletePostId = (req,res) =>{
    const id = req.params.id
    deletePost(id)
    .then((data)=>{
        if(data){
            res.status(204).json()            
        }else{
            res.status(404).json({
                message:'invalid Id'
            })
        }
    })
    .catch(error =>{
        res.ststus(400).json(error)
    })
}

const patchPost = (req,res) => {
    const id = req.params.id
    const postObj = req.body
    updatePost(id,postObj)
    .then((data)=>{
        if(data){
            res.status(200).json(`product with Id ${id} updated succesfully`)            
        }else{
            res.staus(404).json('invali id or no params to update')
        }
    })
    .catch(error =>{
        res.status(400).json(error)
    })
}

module.exports = {
    getAllPosts,
    getPostById,
    postNewPost,
    deletePostId,
    patchPost
}