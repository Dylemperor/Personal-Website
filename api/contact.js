export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const { name, email, message } = req.body;

        // Basic validation
        if (!name || !email || !message) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        // For now, just log it (you’ll see this in Vercel logs)
        console.log("New contact form submission:", {
            name,
            email,
            message
        });

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
}
