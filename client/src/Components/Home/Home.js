import React, { useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import "./Home.scss";

const TEXTS = [
  "This is home page",
  "You have to be logged in to see Customers",
];

function Home() {
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1 className="tekst">
      <TextTransition
        text={TEXTS[index % TEXTS.length]}
        springConfig={presets.wobbly}
      />
    </h1>
  );
}

export default Home;
