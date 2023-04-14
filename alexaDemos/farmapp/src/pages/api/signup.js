import bcrypt from "bcryptjs"
import User from "../../../server/mongodb/models/user"
import connectDB from "../../../server/mongodb/index"

export default async function handler(req, res) {
    if (req.method == 'POST') {
        const { username, password } = req.body
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        connectDB()
        const user = new User({ username, hash })
        await user.save()

        return res.status(200).send("New user created with hash " + hash)
    }
    return res.status(400).send("Incorrect req method type")

}