import mongoose from "mongoose"

const ongoingProjectsSchema = mongoose.Schema({
    name: { type: String },
    description: { type: String },
    startDate: { type: String },
    dueDate: { type: String },
    userEmail: { type: String },
    id: { type: String }
})

export default mongoose.model('ongoingProjects', ongoingProjectsSchema)