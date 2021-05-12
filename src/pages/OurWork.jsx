import React, { useState } from "react";
import Work from "../components/Work";
import athlete from "../img/athlete2.png";
import racer from "../img/theracer-small.png";
import goodTimes from "../img/good-times2.jpg";
import { MovieState } from "../MovieState";

export default function OurWork() {
  const [Movies] = useState(MovieState);

  return (
    <div className="bodyWork">
      {Movies.map((Movie) => (
        <Work Movie={Movie} />
      ))}
    </div>
  );
}
