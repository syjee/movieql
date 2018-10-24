//import { findRemovedLocationsForDirective } from "graphql/utilities/findBreakingChanges";
//import { defaultCreateRemoteResolver } from "graphql-tools";

let movies = [
    {
        id: 1,
        name: "About-Time",
        genre: "romaticLove",
        score: 10
    },
    {
        id: 2,
        name: "Notebook",
        genre: "romaticLove",
        score: 10
    },
    {
        id: 3,
        name: "Gravity",
        genre: "SF",
        score: 10
    },
    {
        id: 4,
        name: "One-day",
        genre: "romanticLove",
        score: 10
    },
    {
        id: 5,
        name: "Les-Miserables",
        genre: "drama",
        score: 10
    },
    {
        id: 6,
        name: "The Greatest Show",
        genre: "drama",
        score: 10
    },
    {
        id: 7,
        name: "Gladiator",
        genre: "Action",
        score: 10
    }

];

export const getMovies = () => movies;

export const getById = id => {
    const filterdMovies = movies.filter(item => item.id === id);
    return filterdMovies[0];
}

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    }else return false;

}

export const addMovie = (name, genre, score) =>{
    const newMovie = {
        id : `${movies.length + 1}`,
        name,
        genre,
        score
    }
    movies.push(newMovie);
    return newMovie;
}