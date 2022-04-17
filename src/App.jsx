import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  const onClickButton = () => {
    alert();
  }

  return (
    <>
      <h1>hello</h1>
      <ColoredMessage color="blue" >How Are you??</ColoredMessage>
      <ColoredMessage color="pink" >fine!</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
