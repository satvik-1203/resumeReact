import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import WorkDetail from "../components/WorkDetail";
import { MovieState } from "../MovieState";

export default function WorkDetails() {
  const history = useHistory();
  const [Movies, setMovies] = useState(MovieState);
  const url = history.location.pathname;
  const [currentMovie, setCurrentMovie] = useState();

  useEffect(() => {
    setCurrentMovie(Movies.find((movie) => movie.url === url));
  }, [Movies, url]);

  return <div>{currentMovie && <WorkDetail movie={currentMovie} />}</div>;
}
