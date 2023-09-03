import express from "express";
import ParentController from "../controllers/ParentController";
import KidController from "../controllers/KidController";
import TeacherController from "../controllers/TeacherController";
import { verify } from "../middleware/Verify";

const router = express.Router();

/* 
____________________________________________

// Teacher Routes
router.post('/teachers/register', teacherController.register);
router.post('/teachers/login', teacherController.login);
router.put('/teachers/:teacher_id', teacherController.update);
router.delete('/teachers/:teacher_id', teacherController.delete);

____________________________________________

// Kid Routes
router.post('/kids/register', kidController.register);
router.post('/kids/login', kidController.login);
router.put('/kids/:kid_id', kidController.update);
router.delete('/kids/:kid_id', kidController.delete);

Registration: POST /kids/register
Login: POST /kids/login
Update: PUT /kids/{kid_id}
Delete: DELETE /kids/{kid_id}
Get Teachers of a Kid: GET /kids/{kid_id}/teachers
Add Teacher to Kid: POST /kids/{kid_id}/teachers
Remove Teacher from Kid: DELETE /kids/{kid_id}/teachers/{teacher_id}
____________________________________________

// Parent Routes
Registration: POST /parents/register
Login: POST /parents/login
Update: PUT /parents/{parent_id}
Delete: DELETE /parents/{parent_id}
Get Kids of a Parent: GET /parents/{parent_id}/kids
Add Kid to Parent: POST /parents/{parent_id}/kids
Remove Kid from Parent: DELETE /parents/{parent_id}/kids/{kid_id}

____________________________________________
*/

router.post("/parents/register", ParentController.register);
router.post("/parents/login", ParentController.login);

router.post("/kids/register", verify, KidController.register);
router.post("/kids/login", verify, KidController.register);

router.post("/teachers/register", TeacherController.register);
router.post("/teachers/login", TeacherController.register);

export default router;
