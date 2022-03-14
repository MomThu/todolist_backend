const express = require('express');
const cors = require('cors');

const Tasks = require('../models/tasks.model');
const taskRouter = express.Router();

// Parse request to json format
taskRouter.use(express.json());
// Using cors
taskRouter.use(cors());

taskRouter.route('/')
    // Get all task
    .get(async (req, res, next) => {
        try {
            let tasks = await Tasks.find({});
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(tasks);
        } catch (error) {
            next(error);
        }
    })
    // Post one task
    .post(async (req, res, next) => {
        try {
            await Tasks.create(req.body);
            console.log('Task Created');
            res.statusCode = 201;
            res.setHeader('Content-Type', 'application/json');
            res.json({ success: true });
        } catch (error) {
            next(error);
        }
    })

taskRouter.route('/:id')
    // Get one task by id
    .get(async (req, res, next) => {
        try {
            let task = await Tasks.findById(req.params.id);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(task);
        } catch (error) {
            next(error);
        }
    })
    // Update one task by id
    .put(async (req, res, next) => {
        try {
            await Tasks.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            });
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({success: true});
        } catch (error) {
            next(error);
        }
    })
    // Delete one task by id
    .delete(async (req, res, next) => {
        try {
            await Tasks.findByIdAndRemove(req.params.id);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({success: true});
        } catch (error) {
            next(error);
        }
    })

module.exports = taskRouter;