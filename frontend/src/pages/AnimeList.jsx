import React from "react";
import AnimeCard from "../components/AnimeCard";
import { useState, useEffect } from "react";
import axios from "axios";

function AnimeList() {
  const [data, setData] = useState([]);

  async function fetchData() {
    const res = await axios.get("http://localhost:5000/getAnimeList");
    if (res.status == 200) {
      setData(res.data);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data.map((x) => (
        <AnimeCard
          key={x.uid}
          title={x.title}
          episodes={x.episodes}
          ranked={x.ranked}
          imgUrl={x.img_url}
          link={x.link}
        />
      ))}
    </div>
  );
}

export default AnimeList;
