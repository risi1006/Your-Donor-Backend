import express from 'express';
import PostController from '../controllers/postController';
import quadTreeController from '../controllers/quadtreeController';
import registerController from '../controllers/registerController';
import tokenMiddleware from '../middleware/tokenMiddleware';
import userController from '../controllers/userController';
import bloodBankController from '../controllers/bloodBankController';

const router = express.Router();


router.post('/register', registerController.register)
router.post('/login', registerController.login)
router.post('/add', userController.insertData);
router.get('/get', userController.fetchData);

router.post('/post',tokenMiddleware, PostController.createPost);
router.get('/posts',tokenMiddleware, PostController.fetchPost);

router.get('/bloodbank', bloodBankController.fetchBloodBank);
router.post('/bloodbank', bloodBankController.updateBloodBank);

export default router;