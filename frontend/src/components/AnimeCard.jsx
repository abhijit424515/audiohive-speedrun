import React from "react";

function AnimeCard({ title, episodes, ranked, imgUrl, link }) {
  return (
    <div
      className="m-[1rem] border-[1px] border-black rounded-[1rem] w-max p-[1rem] cursor-pointer shadow-xl flex"
      onClick={() => window.open(link)}
    >
      <div>
        <img src={imgUrl} />
      </div>
      <div>
        <div>{title}</div>
        <div>{episodes}</div>
        <div>{ranked}</div>
      </div>
    </div>
  );
}

export default AnimeCard;
