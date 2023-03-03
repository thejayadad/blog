const Post = require("../models/Post.js");

const postController = require("express").Router()
const verifyToken = require("../middleware/verifyToken.js")

postController.get('/getAll', async (req, res) => {
    try {
        const posts = await Post.find({}).populate("userId", '-password')
        return res.status(200).json(posts)
    } catch (error) {
        return res.status(500).json(error)
    }
})

postController.get('/find/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate("userId", '-password')
        post.views += 1
        await post.save()
        return res.status(200).json(post)
    } catch (error) {
        return res.status(500).json(error)
    }
})

postController.get('/featured', async (req, res) => {
    try {
        const posts = await Post.find({ featured: true }).populate("userId", '-password').limit(3)
        return res.status(200).json(posts)
    } catch (error) {
        return res.status(500).json(error)
    }
})

postController.post('/', verifyToken, async (req, res) => {
    try {
        const post = await Post.create({ ...req.body, userId: req.user.id })
        return res.status(201).json(post)
    } catch (error) {
        return res.status(500).json(error)
    }
})

postController.put("/updatepost/:id", verifyToken, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (post.userId.toString() !== req.user.id.toString()) {
            throw new Error("You can update only your own posts")
        }

        const updatedpost = await post
            .findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
            .populate('userId', '-password')

        return res.status(200).json(updatedpost)
    } catch (error) {
        return res.status(500).json(error.message)
    }
})

postController.put('/likepost/:id', verifyToken, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if(post.likes.includes(req.user.id)){
            post.likes = post.likes.filter((userId) => userId !== req.user.id)
            await post.save()

            return res.status(200).json({msg: 'Successfully unliked the post'})
        } else {
            post.likes.push(req.user.id)
            await post.save()

            return res.status(200).json({msg: "Successfully liked the post"})
        }

    } catch (error) {
        return res.status(500).json(error)
    }
})

postController.delete('/deletepost/:id', verifyToken, async(req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if(post.userId.toString() !== req.user.id.toString()){
            throw new Error("You can delete only your own posts")
        }

        await Post.findByIdAndDelete(req.params.id)

        return res.status(200).json({msg: "Successfully deleted the post"})
    } catch (error) {
        return res.status(500).json(error)
    }
})

module.exports = postController