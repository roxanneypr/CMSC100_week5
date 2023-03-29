import {homepage, findStudents, findStudentsPost, addStudentPost, deleteStudentPost} from './controller.js';

const router = (app) => {
    app.get('/', homepage);
    app.get('/find-students', findStudents);
    app.post('/find-students-post', findStudentsPost);
    app.post('/add-students', addStudentPost);
    app.post('/delete-students', deleteStudentPost);
}

export default router;