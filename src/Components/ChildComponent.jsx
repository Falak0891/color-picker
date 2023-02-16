import GrandChildComponent from "./GrandChildComponent";
import { useContext } from "react";
import { colorContext } from "../context";

const ChildComponent = () => {
  const {color} = useContext(colorContext);
  return (
  <div
    style={{
      border: `10px solid`,
      borderColor: color,
      marginLeft: "50px",
      padding: "10px",
      fontSize: "30px",
      width: "300px"
    }}
  >
    <GrandChildComponent />
  </div>
)};

export default ChildComponent;
