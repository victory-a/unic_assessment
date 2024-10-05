This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## LLM Wrapper

## Features

- WYSIWYG Editor
- Markdown rendering and syntax highlighting
- Start, stop, and edit LLM interactions
- Insert special commands (e.g., web scraping, web search)
- Session persistence

### Limitations & Trade-offs

- **Max Character limit**: The LLM model enforces a character limit, so I truncate prompts for web scraping tasks.
- **Rich text support**: The LLM does not natively handle rich text, so HTML tags are stripped before sending prompts to the model.

### Possible Improvements

- Implement a more robust state management solution (e.g., using a state management library)
- Add social login for authentication
- Persist chat history in a database
- Implement automated testing


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
