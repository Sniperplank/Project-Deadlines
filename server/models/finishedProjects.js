import mongoose from "mongoose"

const finishedProjectsSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    userEmail: { type: String, required: true },
    id: { type: String }
})

export default mongoose.model('finishedProjects', finishedProjectsSchema)