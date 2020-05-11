import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import FileController from './app/controllers/FileController';
import TweetController from './app/controllers/TweetController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.put('/users/:_id', UserController.update);

routes.post('/files', upload.single('file'), FileController.store);

routes.post('/tweets', TweetController.store);
routes.get('/tweets', TweetController.index);

export default routes;
