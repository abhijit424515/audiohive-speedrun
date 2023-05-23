import React, { useState } from "react";
import axios from "axios";

async function searchUser(query) {
  try {
    const res = await axios.get(`https://api.github.com/users/${query}`);
    if (res.status == 200) {
      return res.data.avatar_url;
    } else {
      return "";
    }
  } catch (error) {
    console.log(error);
    return "";
  }
}

function GithubSearch() {
  const [query, setQuery] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  return (
    <div>
      {imageUrl && <img src={imageUrl} />}
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className="bg-cyan-400 px-[0.5rem] py-[0.5rem] outline-none"
      />
      <button
        onClick={async () => {
          const profile_url = await searchUser(query);
          setImageUrl(profile_url);
        }}
        className="bg-red-400 px-[0.5rem] py-[0.5rem]"
      >
        Search
      </button>
    </div>
  );
}

export default GithubSearch;
