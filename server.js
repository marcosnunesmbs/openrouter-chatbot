require('dotenv').config(); // Carrega as variáveis do .env

const express = require('express');
const OpenAI = require('openai'); // Importa o SDK da OpenAI
const path = require('path'); // Para servir o arquivo HTML

const app = express();
const port = 3000; // Porta que o servidor vai rodar

// Configura o cliente OpenAI para usar o OpenRouter
const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY, // Usa a chave do .env
});

// Middleware para parsear JSON no corpo das requisições
app.use(express.json());

// Servir arquivos estáticos (como o HTML)
app.use(express.static(path.join(__dirname, 'public'))); // Cria uma pasta 'public' para o HTML

// Rota principal que serve o arquivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// Rota para lidar com as requisições de chat
app.post('/chat', async (req, res) => {
    const messages = req.body.messages; // Recebe o histórico de mensagens do frontend

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
        return res.status(400).json({ error: 'Requisição inválida. O histórico de mensagens é necessário.' });
    }

    try {
        // Usa o SDK da OpenAI para criar a completion
        const completion = await openai.chat.completions.create({
            // Escolha um modelo. Veja a lista em https://openrouter.ai/docs#models
            // 'cognitivecomputations/dolphin-2.6-mistral-7b-dpo-awq' ou 'mistralai/mistral-7b-instruct-v0.2' são boas opções gratuitas/acessíveis.
            // Note que o nome do modelo pode variar dependendo do provedor no OpenRouter.
            model: 'mistralai/mistral-7b-instruct-v0.2',
            messages: messages, // Envia o histórico completo
        });

        // A resposta do modelo está em completion.choices[0].message.content
        const assistantMessage = completion.choices[0].message.content;

        // Envia a resposta do modelo de volta para o frontend
        res.json({ reply: assistantMessage });

    } catch (error) {
        console.error('Erro no servidor ou na API do OpenRouter:', error);
        // Verifica se o erro tem uma resposta da API para incluir mais detalhes
        const errorMessage = error.response && error.response.data ? error.response.data : error.message;
        res.status(500).json({ error: `Erro ao processar a requisição: ${errorMessage}` });
    }
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});