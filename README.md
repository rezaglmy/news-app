# News App
### A news application with these Apis:
- **News Api** (https://newsapi.org)
- **The Guardian** (https://open-platform.theguardian.com)

## Getting Started

```bash
git clone https://github.com/rezaglmy/news-app.git

cd news-app

yarn install

cp .env.example .env.local
```

#### Please get the api keys from below links and set into **.env.local** file:
- https://newsapi.org/register (for News Api)
- https://bonobo.capi.gutools.co.uk/register/developer (for The Guardian)

## Run in dev mode

```bash
yarn dev
```

```bash
# with docker
yarn docker:dev
```

## Run in prod mode

```bash
yarn build
yarn preview
```

```bash
# with docker
yarn docker:preview
```
