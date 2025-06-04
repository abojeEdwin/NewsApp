const API_KEY = '3755ceed614940899802bc2f35117090';
const BASE_URL = 'https://newsapi.org/v2/top-headlines?country=us';

export const fetchNews = async () =>{
    try{
        const response = await fetch(`${BASE_URL}& apikey=${API_KEY}`);
        const data = response.json;
        return data.articules;

    }catch(err){
        console.log("Failed to fetch news : ", err);
        return [];
    }
};