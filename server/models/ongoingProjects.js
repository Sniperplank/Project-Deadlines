import mongoose from "mongoose"

const ongoingProjectsSchema = mongoose.Schema({
    name: { type: String },
    description: { type: String },
    startDate: { type: Date },
    dueDate: { type: Date },
    userEmail: { type: String },
    id: { type: String }
})

export default mongoose.model('ongoingProjects', ongoingProjectsSchema)