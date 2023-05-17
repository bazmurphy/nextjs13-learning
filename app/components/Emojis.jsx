async function fetchEmojis() {
  const response = await fetch("http://localhost:3000/api/emojis");
  const data = await response.json();
  // console.log(data);
  return data;
}

const Emojis = async () => {
  const emojis = await fetchEmojis();
  // console.log(emojis);

  return (
    <div className="emojis-list-container">
      <h3 className="page-subtitle">Emojis List</h3>
      <div className="emojis-list">
        {emojis.map((emoji) => {
          return (
            <div className="emoji-cell">
              <span className="emoji-character">{emoji.character}</span>
              <span className="emoji-unicode-name">{emoji.unicodeName}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Emojis;
