const configs = {
  newsApi: {
    baseUrl: 'https://newsapi.org',
    apiKey: import.meta.env.VITE_NEWS_API_KEY as string,
  },
  guardian: {
    baseUrl: 'https://content.guardianapis.com',
    apiKey: import.meta.env.VITE_THE_GUARDIAN_API_KEY as string,
  },
};

export default configs;
