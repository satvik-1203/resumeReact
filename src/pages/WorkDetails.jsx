import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { MovieState } from "../MovieState";

export default function WorkDetails() {
  const history = useHistory();
  const [Movies, setMovies] = useState(MovieState);
  const url = history.location.pathname;
  const [currentMovie, setCurrentMovie] = useState();

  useEffect(() => {
    setCurrentMovie(Movies.find((movie) => movie.url === url));
  }, [Movies, url]);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
