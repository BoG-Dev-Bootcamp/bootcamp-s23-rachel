import auth from "../../../../server/utils/auth"
export default function handler(req, res) {
    try {
        const decoded = auth(req)
        return res.status(200).json(decoded)
    }
    catch (e) {
        return res.status(400).send(e.message)
    }
}