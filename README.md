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
# run with docker
yarn docker:dev
```

## Run in prod mode

```bash
yarn build
yarn preview
```

```bash
# run with docker
yarn docker:preview

# stop docker container
yarn docker:stop 
```

## Filter
<p align="center">
  <img src="https://github.com/rezaglmy/news-app/blob/main/public/images/filter-guide?raw=true" alt="Filter"/>
</p>

## Customization
<p align="center">
  <img src="https://github.com/rezaglmy/news-app/blob/main/public/images/customization-guide?raw=true" alt="Customization"/>
</p>