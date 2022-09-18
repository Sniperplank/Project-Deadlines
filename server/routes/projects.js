import express from "express";
import ongoingProjects from "../models/ongoingProjects.js";
import task from "../models/task.js";
const router = express.Router()

router.post('/ongoing', async (req, res) => {
    const { name, description, startDate, dueDate, userEmail } = req.body
    try {
        const result = await ongoingProjects.create({ name, description, startDate, dueDate, userEmail })
        res.status(200).json({ result })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/ongoing', async (req, res) => {
    const { userEmail } = req.query
    try {
        const projects = await ongoingProjects.find({ userEmail: { $eq: userEmail } })
        res.status(200).json(projects)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

router.get('/ongoing/:_id', async (req, res) => {
    const { _id } = req.params
    try {
        const project = await ongoingProjects.find({ _id: { $eq: _id } })
        res.status(200).json(project)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

router.post('/ongoing/tasks', async (req, res) => {
    const { description, projectId } = req.body
    try {
        const result = await task.create({ description, projectId })
        res.status(200).json({ result })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/ongoing/tasks/:projectId', async (req, res) => {
    const { projectId } = req.params
    try {
        const result = await task.find({ projectId: { $eq: projectId } })
        res.status(200).json({ result })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/ongoing/tasks/deleteTask', async (req, res) => {
    const { _id } = req.query
    await task.findOneAndDelete({ _id: { $eq: _id } })
    res.json({ message: 'Post deleted succesfully' })
})


export default router