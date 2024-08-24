import express from 'express';
import { creatTodo, getTodo, getTodos, updateStatus, updateTodo } from '../controllers/todo.controller.js';

const router=express.Router()

router.post('/todo',creatTodo)
router.get('/todo',getTodos)
router.get('/todo/:id',getTodo)
router.put('/todo/:id',updateTodo)
router.put('/todostatus/:id',updateStatus)

export default router;