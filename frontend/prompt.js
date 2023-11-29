const OpenAI = require("openai");
const openai = new OpenAI({
    apiKey: "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",
});
const generateStory = async () => {
    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ "role": "user", "content": "Give me a 90 word story", }],
        max_tokens: 100
    });
    console.log(chatCompletion.choices[0].message.content);
}
// generateStory();
// generate image
const generateImage = async () => {
    const imageCompletion = await openai.completions.create({
        model: "text-davinci-003",
        prompt: "a painting of a flower",
        n: 1,
    });
    console.log(imageCompletion);
}
generateImage();