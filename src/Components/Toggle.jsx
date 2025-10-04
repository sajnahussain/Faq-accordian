import React, { useState } from "react";

const Toggle = () => {
  const [toggleOn, setToggleOn] = useState(true);
  const handleToggle = () => {
    setToggleOn((prev) => !prev);
    console.log(toggleOn, "=state of toggleOn");
  };
  return (
    <div>
      <h1>Sample Toggle</h1>
      {!toggleOn ? (
        <button
          type="button"
          onClick={handleToggle}
          style={{ backgroundColor: "green", color: "white" }}
        >
          On
        </button>
      ) : (
        <button
          type="button"
          onClick={handleToggle}
          style={{ backgroundColor: "blue", color: "white" }}
        >
          Off
        </button>
      )}
    </div>
  );
};

export default Toggle;
