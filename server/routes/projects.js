import express from "express";
import ongoingProjects from "../models/ongoingProjects.js";
const router = express.Router()

router.post('/ongoing', async (req, res) => {
    const { name, description, startDate, dueDate, userEmail } = req.body
    try {
        const result = await ongoingProjects.create({ name, description, startDate, dueDate, userEmail })
        res.status(200).json({ result })
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' })
    }
})

router.get('/ongoing', async (req, res) => {
    const userEmail = req.query
    try {
        const projects = await ongoingProjects.find(userEmail)
        res.status(200).json(projects)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

export default router