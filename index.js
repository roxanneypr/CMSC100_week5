import express from 'express';
import router from './router.js';

//runs server

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// cal router
console.log("Server now running on port 3000");
app.listen(3000);
router(app);