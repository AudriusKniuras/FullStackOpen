import React, { useState } from "react";

const App = () => {
  // storing state in big objects is not recommended, better to use separate states
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });

  // using object spread syntax (...clicks) to avoid retyping fields which are not changed
  const handleLeftClick = () => setClicks({ ...clicks, left: clicks.left + 1 });
  const handleRightClick = () =>
    setClicks({ ...clicks, right: clicks.right + 1 });

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  );
};

export default App;
