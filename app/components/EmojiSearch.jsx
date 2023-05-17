// the app/emojis/page is a Client Component so ALL CHILDREN MUST ALSO BE
"use client";

import { useState } from "react";

// we accept a prop (function) that will PASS THE data BACK UP TO THE PARENT
const EmojiSearch = ({ getSearchResults }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(query);
    const response = await fetch(`/api/emojis/search?name=${query}`);
    const data = await response.json();

    // if you were using Context or Redux you would do this differently..
    // but this is to how to PASS THE VALUE UP to the PARENT and BACK DOWN INTO ANOTHER CHILD (!)
    getSearchResults(data);
  };

  return (
    <div className="emojis-search-container">
      <h2 className="page-subtitle">Emoji Search:</h2>
      <form className="emoji-search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="emoji-search-input"
          placeholder="Search Emojis..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button className="emoji-search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default EmojiSearch;
