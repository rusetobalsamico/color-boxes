import Box from "./Box";
import "./BoxContainer.css";

export default function BoxContainer() {
  const defaultBoxes = {
    numBoxes: 20,
  };

  const boxes = Array.from({ length: defaultBoxes.numBoxes }).map((box, i) => (
    <Box key={i} />
  ));

  return <div className="BoxContainer">{boxes}</div>;
}
