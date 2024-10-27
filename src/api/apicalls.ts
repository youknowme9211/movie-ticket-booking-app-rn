const apikey: string = 'f6706900c514ef603869ebc5e1503112';
export const baseImegePath=(size:string,path:string)=>{
    return `https://image.tmdb.org/t/p/${size}${path}`
}
export const nowPlayingMovies: string = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}`;
export const upcomingMovies: string = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}`;
export const popularMovies: string = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`;

export const searchMovies = (keyword: string) => {
    return `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${keyword}`;
};
export const movieDetails = (id: number) => {
    return `https://api.themoviedb.org/3/review/${id}?api_key=${apikey}`
}
export const movieCastDetail = (id: number) => {
    return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apikey}`
}