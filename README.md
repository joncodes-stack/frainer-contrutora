# Frainer Construtora — Site

Site institucional one-page, responsivo, sem dependências (HTML + CSS + JS puro).

## Estrutura

```
frainer-construtora/
├── index.html            # Página principal
├── README.md
└── assets/
    ├── css/style.css     # Estilos (cores da marca em :root)
    ├── js/main.js        # Menu mobile, header fixo, animações, formulário
    └── img/
        ├── favicon.svg   # Ícone da aba (logo em blocos)
        └── projetos/     # Coloque aqui as fotos reais das obras
```

## Como visualizar

Abra o `index.html` no navegador. Não precisa instalar nada.

## Antes de publicar

- [ ] Trocar o WhatsApp `(21) 90000-0000` / `5521900000000` no `index.html` (contato e botão flutuante)
- [ ] Confirmar o e-mail `contato@frainerconstrutora.com.br`
- [ ] Substituir as fotos de banco (Unsplash) por fotos reais em `assets/img/projetos/`
      e atualizar os caminhos (hero e sobre em `style.css`; projetos no `index.html`)
- [ ] Revisar nomes dos projetos e a frase do depoimento com o cliente
- [ ] Ligar o formulário a um serviço de envio (ex.: Formspree) em `assets/js/main.js`

## Cores da marca

| Token   | Cor     |
|---------|---------|
| --navy  | #1f2f4a |
| --steel | #5b7ba6 |
| --sky   | #9db8dc |
| --paper | #f6f4ef |

## Publicação

Site estático: pode ser hospedado em Netlify, Vercel, GitHub Pages ou na hospedagem
atual de frainerconstrutora.com.br — basta enviar a pasta inteira.
