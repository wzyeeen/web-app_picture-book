const OpenAI = require("openai");
const openai = new OpenAI({
    apiKey: "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",
});

export default async function handler(req, res) {
    if (typeof req.body.prompt !== "string") {
        const response = await openai.completions.create({
            prompt: `A image of a ${req.body.prompt}`,
            n: 1,
            size: "512x512",
        })
        res.status(200).json({ text: response.data.data[0].url })
    }
    else {
        res.status(200).json({ text: "https://images.dog.ceo/breeds/ridgeback-rhodesian/n02087394_1722.jpg" })
    }
}

// generate image
const generateImage = async () => {
    const imageCompletion = await openai.completions.create({
        model: "text-davinci-003",
        prompt: "a painting of a flower",
        n: 1,
    });
    console.log(imageCompletion);
}
// generateImage();