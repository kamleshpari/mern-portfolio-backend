import express from 'express';
import { postTimeline, deleteTimeline, getAllTimelines } from '../controller/timelineController.js';
import { isAuthenticated } from '../middlewears/auth.js';


const router = express.Router();

router.route('/add').post(isAuthenticated, postTimeline);
router.route('/delete/:id').delete(isAuthenticated, deleteTimeline);
router.route('/getall').get(getAllTimelines);

export default router;