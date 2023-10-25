const OpenAIApi = require('openai');
const openai = new OpenAIApi({apiKey : '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', dangerouslyAllowBrowser: true});

export async function sendMsg(message) {
    const res = await openai.completions.create({
        model:'gpt-3.5-turbo-instruct',
        prompt: message,
        temperature:0.7,
        max_tokens:300,
    })
    return res.choices[0].text;
}