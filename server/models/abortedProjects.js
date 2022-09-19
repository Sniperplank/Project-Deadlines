import mongoose from "mongoose"

const abortedProjectsSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    startDate: { type: Date, required: true },
    abortDate: { type: Date, required: true },
    userEmail: { type: String, required: true },
    id: { type: String }
})

export default mongoose.model('abortedProjects', abortedProjectsSchema)