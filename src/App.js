import { useState } from "react";
import "./styles.css";

var Emoji = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍄": "Mushroom",
  "🍡": "Dango",
  "🍩": "Doughnut",
  "🍬": "Candy",
  "🍎": "Red Apple",
  "🍅": "Tomato",
  "🍞": "Bread",
  "🍚": "Cooked Rice",
  "🍮": "Custard",
  "🍲": "Pot of Food"
};

var EmojiList = Object.keys(Emoji);

export default function App() {
  var [meaning, setMeaning] = useState("");
  function onChangeListener(event) {
    var input = event.target.value;
    var meaning = Emoji[input];

    if (meaning === undefined) {
      setMeaning("Emoji not found in database.");
    } else {
      setMeaning(meaning);
    }
  }

  function onClickListener(item) {
    var meaning = Emoji[item];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> Emoji Interpreter App </h1>

      <input
        placeholder="Enter your emoji here..."
        onChange={onChangeListener}
      />

      <h3> Emoji we know </h3>
      {EmojiList.map((item) => {
        return (
          <span
            style={{ padding: "1rem", fontSize: "1.5rem", cursor: "pointer" }}
            onClick={() => onClickListener(item)}
          >
            {" "}
            {item}{" "}
          </span>
        );
      })}

      <h2> {meaning} </h2>
    </div>
  );
}
