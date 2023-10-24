import { useEffect, useState } from "react";
import "./index.scss";
import { MovieService } from "../../api/MovieService";

const Home = () => {
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const {
      data: { results },
    } = await MovieService.getMovies();

    setMovies(results);
  }

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    console.log(movies);
  });

  return (
    <section className="Home">
      {movies.map(({ id, title, vote_average }) => (
        <div key={id}>
          <MovieCard />
        </div>
      ))}
    </section>
  );
};

export default Home;
