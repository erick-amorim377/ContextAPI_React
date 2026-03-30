# ContextAPI React

Projeto de aprendizado criado para praticar o uso da **React Context API** em uma aplicacao simples com multiplas paginas. A proposta aqui e entender como compartilhar estados globais entre componentes sem precisar passar props manualmente por varios niveis da arvore.

## Sobre o projeto

Esta aplicacao demonstra dois cenarios comuns de uso da Context API:

- **Controle de contador global** com `useState`
- **Mudanca global de cor de titulo/texto** com `useReducer`

O projeto possui navegacao entre paginas com `React Router`, e o estado compartilhado continua disponivel em diferentes rotas como `Home`, `About` e `Products`.

## O que foi praticado

- Criacao de contextos com `createContext`
- Encapsulamento da aplicacao com Providers
- Compartilhamento de estado global entre paginas
- Criacao de hooks customizados para consumir contexto
- Uso de `useState` e `useReducer` dentro de contextos
- Navegacao com `react-router-dom`

## Estrutura principal

Os arquivos mais importantes para entender o projeto sao:

- `src/context/CounterContext.jsx`: cria o contexto do contador e disponibiliza `counter` e `setCounter`
- `src/context/TitleColorContext.jsx`: cria o contexto de cor e usa `useReducer` para trocar a cor
- `src/hook/useCounterContext.jsx`: hook customizado para consumir o contexto do contador
- `src/hook/useTitleColorContext.jsx`: hook customizado para consumir o contexto da cor
- `src/components/ChangeCounter.jsx`: componente que altera o contador global
- `src/main.jsx`: ponto onde os Providers envolvem a aplicacao

## Stacks e ferramentas usadas

- **React 19**
- **Vite**
- **JavaScript (ES Modules)**
- **React Router DOM**
- **Context API**
- **ESLint**

## Como funciona na pratica

Na pagina inicial, o usuario pode:

- Incrementar o contador
- Resetar o contador
- Somar `+5` ao contador
- Alterar a cor do texto entre vermelho e azul

Essas mudancas ficam disponiveis tambem nas outras paginas, mostrando que o estado esta centralizado nos contextos e nao apenas em um componente isolado.

## Como rodar no seu PC

### 1. Clone o repositorio

```bash
git clone <url-do-repositorio>
```

### 2. Entre na pasta do projeto

Se a estrutura continuar igual a este repositorio:

```bash
cd ContextAPI_React/ContextAPI_React
```

### 3. Instale as dependencias

```bash
npm install
```

### 4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

Depois disso, abra no navegador o endereco exibido no terminal, normalmente algo como:

```bash
http://localhost:5173
```

## Outros comandos uteis

```bash
npm run build
```

Gera a versao de producao do projeto.

```bash
npm run preview
```

Permite visualizar localmente a versao de producao.

```bash
npm run lint
```

Executa a analise de codigo com ESLint.

## Objetivo de estudo

Este projeto e indicado para quem esta aprendendo:

- gerenciamento de estado global no React
- organizacao com Context API
- separacao entre contexto, provider e hooks customizados
- compartilhamento de dados entre paginas

## Autor

Projeto desenvolvido para fins de estudo sobre **React Context API**.
