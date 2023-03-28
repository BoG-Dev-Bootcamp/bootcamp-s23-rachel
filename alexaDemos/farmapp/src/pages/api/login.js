import bcrypt from "bcryptjs"
import User from "../../../server/mongodb/models/user"
import { sign } from "jsonwebtoken"
import { serialize } from "cookie";
import connectDB from "../../../server/mongodb/index"


export default async function handler(req, res) {
    const { username, password } = req.body
    // const { username, password } = req.query;
    connectDB()
    const user = await User.findOne({ username })
    const result = await bcrypt.compare(password, user.hash)
    if (!result) {
        return res.status(400).send("Incorrect username or password")
    }
    // request the JWT
    const token = sign({ admin: true }, process.env.SECRET, { expiresIn: '60s' })

    const serialized = serialize("OurJWT", token, {
        httpOnly: true,
        secure: false, // change this in production
        sameSite: "strict",
        maxAge: 60,
    });
    res.setHeader('Set-Cookie', serialized)
    res.status(200).send("JWT Created! " + token)
}