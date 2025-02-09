import { fetch } from 'expo/fetch';

const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;

export default async function deepSeek(message: string, model: string, onStreamUpdate: (chunk: string) => void, setIsLoading: () => void) {
    try {
        setIsLoading(true);
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
            },
            body: JSON.stringify({
                model: model,
                messages: [{ role: 'user', content: message }],
                stream: true
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const reader = response.body?.getReader();
        const decoder = new TextDecoder();
        let buffer = '';
        let fullResponse = '';

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            
            // Procesar cada línea del buffer
            const lines = buffer.split('\n');
            buffer = lines.pop() || ''; // Guardar cualquier línea incompleta

            for (const line of lines) {
                const trimmedLine = line.trim();
                if (!trimmedLine || trimmedLine === 'data: [DONE]') continue;

                if (trimmedLine.startsWith('data: ')) {
                    try {
                        const json = JSON.parse(trimmedLine.slice(6));
                        const content = json.choices[0]?.delta?.content || '';
                        if (content) {
                            setIsLoading(false)
                            fullResponse += content;
                            onStreamUpdate(fullResponse);
                        }
                    } catch (e) {
                        console.error('Error parsing JSON:', e);
                    }
                }
            }
        }

        return fullResponse;
    } catch (error) {
        setIsLoading(false);
        console.error('Error:', error);
        throw error;
    }
}