import fetch from "node-fetch";
const API_URL = "https://yts.lt/api/v2/list_movies.json?";

export const getMovies = (limit, rating) => {
	let REQUEST_URL = API_URL;
	if(limit > 0){
		REQUEST_URL += `limit=${limit}`;
	}
	if(rating > 0){
		REQUEST_URL += `&minimum_rating=${rating}`;
	}
	return fetch(REQUEST_URL)
	.then(res => res.json())
	.then(json => json.data.movies);
}

// fetch or axios

	// export const getMovies = (limit, rating) =>
	// fetch(`${API_URL}`)
	// .then(res => res.json())
	// .then(json => json.data.movies);

// export let movies = [
// 	{
// 		id : 0,
// 		name : "엑시트",
// 		score : 1
// 	},{
// 		id : 1,
// 		name : "라이온 킹",
// 		score : 12
// 	},{
// 		id : 2,
// 		name : "스파이더맨-파 프롬 홈",
// 		score : 13
// 	},{
// 		id : 3,
// 		name : "레드슈즈",
// 		score : 121
// 	}
// ];

// export const getMovies = () => movies;

// export const getById = id => {
// 	const filteredMovies = movies.filter(movie => id === movie.id);
// 	return filteredMovies[0]; 
// }

// export const deleteMovie = (id) =>{
// 	const cleanedMovies = movies.filter(movie => movie.id !== id);
// 	if(movies.length > cleanedMovies.length) {
// 		movies = cleanedMovies;
// 		return true;
// 	} else {
// 		return false;
// 	}
// };

// export const addMovie = (name, score) => {
// 	const newMovie = {
// 		id: `${movies.length + 1}`,
// 		name,
// 		score
// 	}
// 	movies.push(newMovie);
// 	return newMovie;
// }