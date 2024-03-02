const {Router} = require('express')

const {createPost , getPosts, getPost, getCatPosts, getUserPosts,editPosts,deletePost, } = require("../controllers/postControllers")
const authMiddleware = require("../middleware/authMiddleware")

const router = Router()

router.post('/',authMiddleware, createPost)
router.get('/', getPosts)
router.get('/:id', getPost)
router.get('/categories/:category', getCatPosts)
router.get('/users/:id', getUserPosts)
router.patch('/:id', authMiddleware,editPosts)
router.delete('/:id',authMiddleware,deletePost)

module.exports = router