// once you define this as a Client Component, all children MUST ALSO BE Client Components
"use client";

// now we can use useState and useEffect
import { useState, useEffect } from "react";

// REMEMBER the loading.jsx is for SERVER COMPONENTS WHEN YOU ARE FETCHING SERVER DATA
// And in that mode it automatically works
// Since we will be fetching data from the Client.. that won't automatically work
// However we CAN bring it in and LOAD IT MANUALLY
import LoadingPage from "../loading";

import EmojisList from "../components/EmojisList";
import EmojisApiLinks from "../components/EmojisApiLinks";
import EmojiSearch from "../components/EmojiSearch";

const EmojisPage = () => {
  // we can use the state per normal client side react components
  const [emojis, setEmojis] = useState([]);
  const [loading, setLoading] = useState(true);

  // we run the standard useEffect to fetch and set the state
  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("/api/emojis");
      const data = await response.json();
      setEmojis(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  // if you didn't want to do it INLINE an anonymous Function below, we could do this:
  // function getSearchResults(results) {
  //   setEmojis(results);
  // }

  // if loading then we can use the LoadingPage component (that is automatically used by Server Side Components)
  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className="emojis-container">
      <h1 className="page-title">Emojis</h1>
      <p>
        This is to test Client Side Components, Interactivity, and working with
        Internal APIs...
      </p>
      {/* BELOW IN THE PROPS IS HOW TO PASS A VALUE UP TO THE PARENT AND SET STATE IN THE PARENT AND THEN THAT STATE GOES BACK DOWN TO ANOTHER CHILD */}
      <EmojiSearch getSearchResults={(results) => setEmojis(results)} />
      <EmojisApiLinks />
      <EmojisList emojis={emojis} />
    </div>
  );
};

export default EmojisPage;
