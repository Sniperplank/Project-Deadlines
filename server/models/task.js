import mongoose from "mongoose"

const taskSchema = mongoose.Schema({
    description: { type: String, required: true },
    projectId: { type: String, required: true },
    id: { type: String }
})

export default mongoose.model('Task', taskSchema)