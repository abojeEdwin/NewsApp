const API_KEY = '6e94239a07fc40d4ad9cb3c4f0cc1557';
const BASE_URL = `https://newsapi.org/v2/top-headlines?country=us`;

export const fetchNews = async () => {
  try {
    const res = await fetch(`${BASE_URL}&apiKey=${API_KEY}`);
    const data = await res.json();
    return data.articles;
  } catch (err) {
    console.error("Failed to fetch news:", err);
    return [];
  }
};