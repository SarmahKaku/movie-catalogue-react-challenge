import { CSSProperties, FC } from "react";
import MovieItem, { MovieItemProps } from "../atoms/MovieItem";

const movieListStyles: CSSProperties = {
  backgroundColor: "#ececec",
  height: "100%",
  paddingTop: "1em",
  width: "100%",
  display: "flex",
  flexDirection: "column"
};

type MovieListProps = {
  movieItemList: Omit<MovieItemProps, "parentCallback">[];
  selectedMovieId: string;
  parentCallback:any;
};

const MovieList: FC<MovieListProps> = ({ movieItemList, selectedMovieId, parentCallback}) => {
   
    
  return (
    <div style={movieListStyles}>
      {movieItemList.map(({ id, title }) => {
        return (
          <MovieItem
            key={id}
            id={id}
            title={title}
            selected={id === selectedMovieId}
            parentCallback={parentCallback}
          />
        );
      })}
    </div>
  );
};

export default MovieList;
