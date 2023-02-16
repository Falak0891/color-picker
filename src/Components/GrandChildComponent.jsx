import { useContext } from "react";
import { colorContext } from "../context";

const GrandChildComponent = () => {

  const {color} = useContext(colorContext)

  return (
  <p style={{ color: color }}>Color code: {color}</p>
)
};

export default GrandChildComponent;
