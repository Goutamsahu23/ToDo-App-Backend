const express=require('express');
const router=express.Router();



const {createTodo}=require('../controllers/createTodo')
const {getTodo}=require('../controllers/getTodo')
const {updateTodo}=require('../controllers/updateToDo')
const {deleteTodo}=require('../controllers/deleteTodo');

router.post('/createTodo',createTodo);
router.get('/getTodo',getTodo);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);

module.exports=router;