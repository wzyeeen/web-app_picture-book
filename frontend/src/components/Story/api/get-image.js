const OpenAI = require("openai");
const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true 
});

export default async function getImage(Prompt) {
    if (typeof Prompt == "string") {
        const response = await openai.images.generate({
            model: "dall-e-2",
            prompt: `A image of a ${Prompt}`,
            n: 1,
            size: "512x512",
        })
        return response.data[0].url;
    }
    else {
        console.log("https://images.dog.ceo/breeds/ridgeback-rhodesian/n02087394_1722.jpg");
        return "https://images.dog.ceo/breeds/ridgeback-rhodesian/n02087394_1722.jpg";
    }
}

/*
export default async function handler(req, res) {
    if (typeof req.body.prompt !== "string") {
        const response = await openai.createImage({
            model: "Dall-e-2",
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
*/


/*
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
*/