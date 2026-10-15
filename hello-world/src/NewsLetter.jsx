import { ActionButton } from "./ActionButton";

export const NewsLetter = () => {
  const handleMessage = () => {
    console.log("NewsLetter Clicked!");
  };

  return (
    <div>
      <h2>NewsLetter Use</h2>
      <ActionButton text="NewsLetter Click" onClick={handleMessage} />
    </div>
  );
};
