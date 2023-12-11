const OpenAI = require("openai");
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});

export default async function getText(Prompt) {
    var heading = "Give one to two sentences for a story paragraph about ";
    if (typeof Prompt == "string") {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: 'user', content: heading + Prompt }],
        })
        return response.choices[0].message.content;
    }
    else {
        console.log("Invalid prompt provided.");
        return "Invalid prompt provided.";
    }
}

/*
export default async function handler(req, res) {
    var heading = "Give two to four sentences of story about ";
    if (typeof req.body.prompt !== "string") {
        const response = await openai.chat.completions.create({
            model: "text-davinci-003",
            prompt: heading + req.body.prompt,
            temperature: 0,
            max_token: 1000,
        })
        res.status(200).json({ text: response.data.choices[0].text })
    }
    else {
        res.status(200).json({ text: "Invalid prompt provided." })
    }
}
*/



// const generateStory = async () => {
//     const chatCompletion = await openai.chat.completions.create({
//         model: "gpt-3.5-turbo",
//         messages: [{ "role": "user", "content": "Give me a 90 word story", }],
//         max_tokens: 100
//     });
//     console.log(chatCompletion.choices[0].message.content);
// }
// generateStory();