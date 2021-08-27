import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Grinning Face",
  "🤨": "Face with Raised Eyebrow",
  "😜": "Winking Face with Tongue",
  "✊": "Raised Fist",
  "🤝": "Handshake",
  "😳": "Flushed Face",
  "🤡": "Clown Face",
  "👍": "Thumbs Up",
  "✍️": "Writing Hand",
  "🙈": "See-No-Evil Monkey (Mizaru)",
  "🥰": "Smiling Face with Hearts",
  "🔥": "Fire"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Oops! Seems like We don't have this in our database😅";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <nav>
        <h1>Emojipedia</h1>
      </nav>
      <div className="para">
        <p>Emoji interpreter</p>
        <p>
          It is an emoji dictionary app where in you can enter the emoji and it
          will interpret its meaning.
        </p>
      </div>

      <input
        placeholder="Enter your emoji here"
        onChange={emojiInputHandler}
      ></input>
      <div className="meaning">{meaning}</div>
      <div>
        <p>Emojis we Know</p>
        {emojisWeKnow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
