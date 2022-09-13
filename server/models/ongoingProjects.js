import mongoose from "mongoose"

const ongoingProjectsSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    startDate: { type: Date, required: true },
    dueDate: { type: Date, required: true },
    userEmail: { type: String, required: true },
    id: { type: String }
})

export default mongoose.model('ongoingProjects', ongoingProjectsSchema)