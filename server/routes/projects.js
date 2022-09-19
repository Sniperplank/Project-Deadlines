import express from "express";
import ongoingProjects from "../models/ongoingProjects.js";
import finishedProjects from "../models/finishedProjects.js";
import abortedProjects from "../models/abortedProjects.js";
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
    res.json({ message: 'Task deleted succesfully' })
})

router.delete('/ongoing/:_id', async (req, res) => {
    const { _id } = req.params
    await ongoingProjects.findOneAndDelete({ _id: { $eq: _id } })
    res.json({ message: 'Project deleted succesfully' })
})

router.patch('/ongoing/:_id', async (req, res) => {
    const { _id } = req.params
    const project = req.body
    await ongoingProjects.findByIdAndUpdate(_id, { ...project }, { new: true })
    res.json({ message: 'Project updated succesfully' })
})

router.post('/finished', async (req, res) => {
    const { name, description, startDate, endDate, userEmail } = req.body
    try {
        const result = await finishedProjects.create({ name, description, startDate, endDate, userEmail })
        res.status(200).json({ result })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/finished', async (req, res) => {
    const { userEmail } = req.query
    try {
        const projects = await finishedProjects.find({ userEmail: { $eq: userEmail } })
        res.status(200).json(projects)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

router.post('/aborted', async (req, res) => {
    const { name, description, startDate, abortDate, userEmail } = req.body
    try {
        const result = await abortedProjects.create({ name, description, startDate, abortDate, userEmail })
        res.status(200).json({ result })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/aborted', async (req, res) => {
    const { userEmail } = req.query
    try {
        const projects = await abortedProjects.find({ userEmail: { $eq: userEmail } })
        res.status(200).json(projects)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

export default router