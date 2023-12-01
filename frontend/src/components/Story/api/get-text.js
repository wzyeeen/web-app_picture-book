const OpenAI = require("openai");
const openai = new OpenAI({
    apiKey: "",
});

export default async function handler(req, res) {
    if (typeof req.body.prompt !== "string") {
        const response = await openai.chat.completions.create({
            modelL: "text-davinci-003",
            prompt: req.body.prompt,
            temperature: 0,
            max_token: 1000,
        })
        res.status(200).json({ text: response.data.choices[0].text })
    }
    else {
        res.status(200).json({ text: "Invalid prompt provided." })
    }
}



// const generateStory = async () => {
//     const chatCompletion = await openai.chat.completions.create({
//         model: "gpt-3.5-turbo",
//         messages: [{ "role": "user", "content": "Give me a 90 word story", }],
//         max_tokens: 100
//     });
//     console.log(chatCompletion.choices[0].message.content);
// }
// generateStory();