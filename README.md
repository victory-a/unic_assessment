This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## LLM Wrapper

## Features

- WYSIWYG Editor
- Markdown and Syntax Highlighting
- Start, stop, and edit LLM Interaction
- Insert special commands, ie: Web-scraping and web-search
- Session persistence
- Accessibility and Responsive design

### Limitations - Tradeoffs

- Character limit is enforced by the LLM model used: I truncated the prompt for webscraping tasks
- LLM does not natively support rich text: I eliminate html tags from the prompt at the point of calling the llm

### Possible Improvements
- Implement a more robust state management a state management library
- Possibly add authentication with social login
- Persist history on a database
- Add automated test

### Getting Started

First, run the development server:

node >=18.18.0 is required to run this project

You can conveniently install this with nvm

```bash
nvm install v18.18.0
```

switch to the newly installed node version

```bash
nvm use v18.18.0
```

replace the `.env.example` with a `.env` file
populate the following in the `.env` file
`HUGGING_FACE_API_KEY`

Install dependencies

```bash
yarn
# or
npm i
```

Start project

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Live [URL](https://llm-wrapper-victory-asokomeh.vercel.app/)
