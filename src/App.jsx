import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  // State
  const [num, setNum] = useState(0);

  console.log("render!!")

  const onClickButton = () => {
    // alert();
    setNum((prev) => {
      console.log(prev)
      return prev + 1
    })
    setNum((prev) => {
      console.log(prev)
      return prev + 1
    })

    // setNum(num + 1);
    // console.log(num);
    // setNum(num + 1);
    // console.log(num);
  }

  return (
    <>
      <h1>hello</h1>
      <ColoredMessage color="blue" >How Are you??</ColoredMessage>
      <ColoredMessage color="pink" >fine!</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  );
};
