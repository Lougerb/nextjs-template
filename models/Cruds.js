import mongoose, {Schema, mongo} from "mongoose";

const crudsSchema = new Schema(
    {
        text: String, 
    }, {
        timestamps: true,
    }
)

const Cruds = mongoose.models.Cruds || mongoose.model("Cruds", crudsSchema);

export default Cruds;