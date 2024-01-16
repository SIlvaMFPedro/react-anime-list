const getAnime = async (type) => {
    const baseURL = `https://api.jikan.moe/v4/anime?order_by=score&sort=desc&type=${type}`;
    const firstResponse = await fetch(`${baseURL}&page=1`);
    const firstInfo = await firstResponse.json();
    const lateResponse = await fetch(`${baseURL}&page=2`);
    const lateInfo = await lateResponse.json();
    // Return page data
    return [...firstInfo.data, ...lateInfo.data];
};

const getFilteredAnime = async (filter) => {
    const baseURL = `https://api.jikan.moe/v4/top/anime?filter=${filter}`;
    const response = await fetch(baseURL);
    const info = await response.json();
    // Return filtered anime data
    return info.data;
}
const getAnimeById = async (id) => {
    const baseURL = `https://api.jikan.moe/v4/anime/${id}`;
    const response = await fetch(baseURL);
    const info = await response.json();
    // Return anime data
    return info.data;
};

export { getFilteredAnime, getAnimeById };

export default getAnime;