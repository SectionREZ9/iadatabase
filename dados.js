let dados = [
    {
    titulo : "GEMINI",
    descricao : "O Gemini é um modelo de linguagem de grande porte desenvolvido pela Google AI, representando um avanço significativo na área da inteligência artificial. Treinado em uma quantidade massiva de dados, o Gemini demonstra uma capacidade excepcional de gerar textos coerentes e informativos, traduzir idiomas, escrever diferentes tipos de conteúdo criativo e responder a uma ampla gama de perguntas com nuances e detalhes. Essa poderosa ferramenta, que pertence à mesma família de modelos do ChatGPT, oferece um potencial revolucionário para diversas aplicações, desde a criação de assistentes virtuais mais sofisticados até a otimização de processos em diversas indústrias.",
    funcoes: "geracaoTexto traducao resolucaoProblemas codificacao", 
    proprietario : "Google",
    link : "https://gemini.google.com/",
    imagem : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/516px-Google_Gemini_logo.svg.png"
    },
    
    {
    titulo : "ChatGPT",
    descricao : "O ChatGPT é um modelo de linguagem de grande porte desenvolvido pela OpenAI, com um alto investimento da Microsoft. Capaz de gerar textos semelhantes a humanos em conversas e completar diversas tarefas criativas. Treinado em uma vasta quantidade de dados textuais, o ChatGPT pode ser usado para gerar código, traduzir idiomas, escrever diferentes tipos de conteúdo criativo e responder a suas perguntas de forma informativa.",
    funcoes : "chatbot geracaoTexto traducao codificacao criatividade",
    proprietario : "OpenAI",
    link : "https://openai.com/chatgpt/",
    imagem : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSobT6Nq7W-FJnK5lLapZlwySLwB0W4sKCYDg&s"
    },
    
    {
    titulo : "Bing Chat",
    descricao : "O Bing Chat é um chatbot de inteligência artificial desenvolvido pela Microsoft, integrado ao mecanismo de busca Bing. Ele oferece uma experiência de conversação mais natural, capaz de responder a uma ampla gama de perguntas e realizar diversas tarefas, como gerar diferentes tipos de conteúdo criativo e fornecer resumos de tópicos complexos.",
    funcoes: "chatbot buscaInformacao resumoTexto geracaoTexto",
    proprietario : "Microsoft",
    link : "https://www.bing.com/chat",
    imagem : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Bing_Fluent_Logo.svg/113px-Bing_Fluent_Logo.svg.png"
    },
    
    {
    titulo : "Perplexity AI",
    descricao : "O Perplexity AI é fruto de uma startup, um mecanismo de busca que utiliza inteligência artificial para fornecer respostas mais completas e informativas às suas perguntas. Ao invés de apenas listar links, o Perplexity AI busca na web e sintetiza as informações mais relevantes, oferecendo uma experiência de pesquisa mais eficiente e personalizada.",
    funcoes: "buscaSemantica resumoTexto analiseInformacao",
    proprietario : "Jeff Bezoz Yann LeCun Andrej Karpathy Nat Friedman Garry Tan Nvidia",
    link : "https://www.perplexity.ai/",
    imagem : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Perplexity_AI_logo.svg/420px-Perplexity_AI_logo.svg.png"
    },

    {
    titulo : "Claude",
    descricao : "O Claude é um modelo de linguagem de grande porte desenvolvido pela Anthropic, conhecido por sua capacidade de gerar textos de alta qualidade e manter conversas coerentes e informativas. O Claude é projetado para ser útil e inofensivo, e pode ser usado para uma variedade de tarefas, como geração de texto, tradução de idiomas e resumo de textos.",
    funcoes: "geracaoTexto chatbot assistenteVirtual",
    proprietario : "Anthropic",
    link : "https://www.anthropic.com/claude",
    imagem : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Claude_Ai.svg/390px-Claude_Ai.svg.png"
    },
    
    {
    titulo: "Copilot",
    descricao: "Copilot da Microsoft é um assistente virtual com inteligência artificial (IA) que tem como objetivo auxiliar os usuários em diversas tarefas. Ele funciona como um copiloto, trabalhando ao seu lado para aumentar sua produtividade e criatividade.",
    funcoes: "geraçãoDeTexto analiseDados automacaoTarefas programacao autocompletar identificacaoErros",
    proprietario: "Microsoft",
    link: "https://copilot.microsoft.com/",
    imagem :"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Microsoft_365_Copilot_Icon.svg/96px-Microsoft_365_Copilot_Icon.svg.png"
    },
    
    {
    titulo: "ElevenLabs",
    descricao: "O ElevenLabs é uma plataforma que permite criar vozes realistas a partir de textos. Essa tecnologia pode ser utilizada para dublagem, audiolivros e outras aplicações.",
    funcoes: "geracaoVoz sinteseVocal dublagem",
    proprietario: "ElevenLabs",
    link: "https://elevenlabs.io/",
    imagem : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/ElevenLabs_Logo.png/375px-ElevenLabs_Logo.png"
    },
    
    {
    titulo: "DALL-E",
    descricao: "O DALL-E, criado pela OpenAI, é um modelo de geração de imagens a partir de descrições textuais. Ele pode criar imagens realistas e artísticas de alta qualidade.",
    funcoes: "geracaoImagem arteIA",
    proprietario: "OpenAI",
    link: "https://openai.com/index/dall-e-3/",
    imagem : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSobT6Nq7W-FJnK5lLapZlwySLwB0W4sKCYDg&s"
    },
    {
    titulo: "Bing Create",
    descricao: "O Bing Create é uma ferramenta de criação de conteúdo da Microsoft, integrada ao mecanismo de busca Bing. Ele permite gerar imagens e textos a partir de prompts.",
    funcoes: "geracaoTexto geracaoImagem",
    proprietario: "Microsoft",
    link: "https://www.bing.com/create",
    imagem : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Bing_Fluent_Logo.svg/113px-Bing_Fluent_Logo.svg.png"
    },
    
    {
    titulo: "GPTZero",
    descricao: "O GPTZero é uma ferramenta de detecção de texto gerado por IA. Ele ajuda a identificar se um texto foi escrito por um humano ou por uma máquina.",
    funcoes: "deteccaoIA",
    proprietario: " Edward Tia Alex Cui Yazan Mimi",
    link: "https://gptzero.me/",
    imagem :"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Header_gptzero_logo.svg/300px-Header_gptzero_logo.svg.png"
    },
    
    {
    titulo: "BypassGPT",
    descricao: "O BypassGPT é uma ferramenta que tenta contornar as restrições de modelos de linguagem, como o ChatGPT, permitindo a geração de textos mais livres e criativos.",
    funcoes: "deteccaoIA contornarRestricoes",
    proprietario: "BypassGPT",
    link: "https://bypassgpt.ai/pt"
    },
    {
    titulo: "Copyleaks",
    descricao: "O Copyleaks é uma ferramenta de detecção de plágio que utiliza inteligência artificial para comparar textos e identificar similaridades.",
    funcoes: "deteccaoPlagio deteccaoIA",
    proprietario: "Copyleaks",
    link: "https://copyleaks.com/"
    }
    ];