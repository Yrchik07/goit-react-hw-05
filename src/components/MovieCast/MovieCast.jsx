// components/CastPage.jsx

const MovieCast = ({movieDetails}) => {
  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {movieDetails.production_companies.map(genre => (
            <li key={genre.id}>
              <img src={`https://image.tmdb.org/t/p/w500/${genre.logo_path}`} width="100" alt={genre.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
