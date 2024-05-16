import { useState } from "react";
import "./Box.css";
import { choise } from "./helpers";

export default function Box() {
  const defaultColors = {
    allColors: [
      "purple",
      "magenta",
      "orange",
      "lilac",
      "yellow",
      "pink",
      "red",
      "green",
      "brown",
      "gold",
      "silver",
      "lime",
      "magenta",
      "olive",
      "maroon",
      "navy",
      "teal",
    ],
  };
  const [color, setColor] = useState(choise(defaultColors.allColors));
  function pickColor() {
    let newColor;

    //console.log(newColor === color);

    do {
      newColor = choise(defaultColors.allColors);
    } while (newColor === color);

    setColor(newColor);
  }
  const handleClick = () => {
    pickColor();
  };
  return (
    <div
      className="Box"
      onClick={handleClick}
      style={{ backgroundColor: color }}
    >
     Click me
    </div>
  );
}
