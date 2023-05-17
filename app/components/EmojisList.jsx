// the app/emojis/page is a Client Component so ALL CHILDREN MUST ALSO BE
"use client";

// (because we have transitioned to a Client Side Component in /emojis/page.jsx)
// we turn this off
// async function fetchEmojis() {
//   const response = await fetch(`http://localhost:3000/api/emojis`);
//   const data = await response.json();
//   // console.log(data);
//   return data;
// }

// (because we have transitioned to a Client Side Component in /emojis/page.jsx)
// we adjust this to remove async and accept a prop from its parent
// const EmojisList = async () => {
//  const emojis = await fetchEmojis();
//  console.log(emojis);
const EmojisList = ({ emojis }) => {
  return (
    <div className="emojis-list-container">
      <h3 className="page-subtitle">Emojis List:</h3>
      <div className="emojis-list">
        {emojis.map((emoji, index) => {
          return (
            <div key={index} className="emoji-cell">
              <span className="emoji-character">{emoji.character}</span>
              <span className="emoji-unicode-name">{emoji.unicodeName}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmojisList;
