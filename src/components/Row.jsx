import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";


const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [items, setItems] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  // A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    // if [], run once when the row loads, and don't run it again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setItems(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (item) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {items.map((item) => (
          <img
            key={item.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${isLargeRow ? item.poster_path : item.backdrop_path
              }`}
            alt={item.name}
          />
        ))}
        {
            items.map((item)=>(
                <h2 key={item.id} className="row__poster__title">{item.title}</h2>
            ))
        }
        {
            items.map((item)=>(
                <p key={item.id} className="row__poster__desc">
                    {item.desc}
                </p>
            ))
        }
      </div>
      {/* if possible to create a downward window that displays the ingredients of the item */}
      {/* {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />} */}
    </div>
  );
}

export default Row;