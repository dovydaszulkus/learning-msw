# Learning Mock Service Worker

Trying out mock service worker (MSW) by building an app using Next.JS and Rick and Morty API.

## Before you run the app

In order to run the app, you need to rename `.env.example` to `.env` and amend env variables below as needed.

```js
// Set it to disabled for prod and leave it enabled in dev
NEXT_PUBLIC_API_MOCKING=enabled
// Public Rick and Morty API
NEXT_PUBLIC_API_URL=https://rickandmortyapi.com/api/character
// App url. Replace this with prod url if you want to delploy it to prod
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Run the app

```js
npm install

npm run dev
```
