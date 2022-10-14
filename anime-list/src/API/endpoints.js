import {DAYS} from "../Constants/index";

export const endPoints = {
    anime: function (animeId, request = '') {
        return request ? 'https://api.jikan.moe/v4/anime/${animeId}/${request}' : 'https://api.jikan.moe/v4/anime/${animeId}';
    },
    season: function (season, year) {
        return {
            id: '${season.title} ${year.title}',
            url: 'https://api.jikan.moe/v4/seasons/${year.id}/${season.id}',
            path: "anime"
        };
    },
    schedule: function (queryDay) {
        return {
            id: 'Anime on ${queryDay.title}',
            url: 'https://api.jikan.moe/v4/schedules?filter=${queryDay.id}',
            path: queryDay.id
        };
    },
    search: function (obj) {
        return {
            id: 'Search Results',
            url: `https://api.jikan.moe/v4/anime?q=${obj.searchQuery}&page=${obj.pageNo}&order_by=${obj.orderBy}&sort=${obj.sort}&genres=${obj.genre}&rating=${obj.rating}`,
            path: 'results'
        };
    },
    genre: function (genre) {
        return {
            id: genre.title,
            url: 'https://api.jikan.moe/v4/genre/anime?filter=${genre.id}',
            path: "anime"
        };
    },
    airingToday: function() {
        const date = new Date();
        const today = DAYS[date.getDay()].id;
        return {
            id: "Airing Today",
            url: `https://api.jikan.moe/v4/schedules?filter=${today}`,
            path: today
        };
    },
    topAiring: function () {
        return {
            id: "Top Airing",
            url: "https://api.jikan.moe/v4/top/anime?filter=airing",
            path: "top"
        };
    },
    upcoming: function () {
        return {
            id: "Upcoming Anime",
            url: "https://api.jikan.moe/v4/seasons/upcoming",
            path: "anime"
        };
    }
}