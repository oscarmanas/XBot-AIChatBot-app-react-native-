import { Configuration, OpenAIApi } from 'openai';
import i18n from 'i18n-js';

const configuration = new Configuration({
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export default async function chatGPT4(message: any) {
    try {
        const response = await openai.createChatCompletion({
            model: "gpt-4-0314",
            messages: [{ role: 'user', content: message }],
            max_tokens: 2048,
            temperature: 0.6
        })
        return response.data.choices[0].message.content;
    } catch (error) {
        console.log('Error in chatGPT:', error);
        return i18n.t('errorMessage');
    }
}