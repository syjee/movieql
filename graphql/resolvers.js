import { getById, getMovies, deleteMovie,addMovie } from "./db";

const resolvers = {
    Query : {
        movies : () => getMovies(),
        movie : (_, { id }) => getById(id),

    },
    Mutation: {
        addMovie: (_, {name, genre,score}) => addMovie(name,genre,score),
        deleteMovie : (_,{id})=> deleteMovie(id)
    }
};



export default resolvers; 