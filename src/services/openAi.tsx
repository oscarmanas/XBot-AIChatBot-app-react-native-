import OpenAI from 'openai-api';

const OPENAI_API_KEY = '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';

const openai = new OpenAI(OPENAI_API_KEY);

export default async function chatGPT(message: any) {
    try {
        const prompt = `answer the next ${message};`
        const completions = await openai.complete({
            engine: 'text-davinci-003',
            prompt,
            maxTokens: 2048,
            temperature: 0.6,
        });
        const { choices } = completions.data;
        return choices[0].text.trim();
    } catch (error) {
        console.log('Error in chatGPT:', error);
        return 'Sorry, I am not able to respond at the moment.';
    }
}