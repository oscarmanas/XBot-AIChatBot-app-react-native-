import i18n from 'i18n-js';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: `${process.env.OPENAI_API_KEY}`,
});

export default async function chatGPT4(message: any, model: string) {
    try {
        const response = openai.chat.completions.create({
            model: model,
            messages: [{ role: 'user', content: message }],
            max_completion_tokens: 1024,
            temperature: 1
        })
        return (await response).choices[0].message.content
    } catch (error) {
        console.log('Error in chatGPT:', error);
        return i18n.t('errorMessage');
    }
}