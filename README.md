# OpenRouter Chatbot Tutorial

Este é um projeto tutorial que demonstra como integrar o OpenRouter em uma aplicação Node.js para criar um chatbot simples.

## Objetivo

O objetivo deste projeto é mostrar como criar uma interface web simples que permite aos usuários interagir com os modelos de linguagem disponíveis através do OpenRouter, enviando mensagens e recebendo respostas em um formato de chat.

## Funcionalidades

- Interface web de chat amigável e responsiva
- Histórico de conversa armazenado no localStorage do navegador
- Comunicação em tempo real com modelos de IA através do OpenRouter
- Servidor Node.js com Express para processar as requisições
- Suporte para uso de diferentes modelos de IA

## Estrutura do Projeto

- `server.js` - Servidor Express que se conecta à API do OpenRouter
- `public/index.html` - Interface web de chat para interação com o usuário
- `.env` - Arquivo para armazenar sua chave de API do OpenRouter (não incluído no repositório)
- `.env.example` - Exemplo de como estruturar seu arquivo .env
- `package.json` - Dependências e configurações do projeto

## Como usar

1. Clone este repositório
2. Execute `npm install` para instalar as dependências
3. Crie um arquivo `.env` com sua chave de API do OpenRouter (veja `.env.example`)
4. Execute `npm start` ou `node server.js` para iniciar o servidor
5. Acesse `http://localhost:3000` no navegador para interagir com o chatbot

## Tutorial Completo

Este projeto faz parte de um tutorial detalhado que pode ser encontrado em:
[https://blog.mnunes.xyz/crie-seu-primeiro-chatbot-com-openrouter-node-js-e-html/](https://blog.mnunes.xyz/crie-seu-primeiro-chatbot-com-openrouter-node-js-e-html/)

## Tecnologias Utilizadas

- Node.js
- Express
- OpenAI SDK (para comunicação com OpenRouter)
- OpenRouter API
- HTML/CSS/JavaScript