import React, { useState } from "react";
import { data } from "./faq";
const SampleAccord = () => {
  const [active, setActive] = useState(null);
 
  const handleActive = (index) => {
    setActive(index === active ? null : index);
  };

 
  return (
    <>
      {data.map((item,index) => (
        <div key={index} className="accordian-bar ">
          <div className="title-bar"
          >
            <div>{item.title}</div>
            <div onClick={() => handleActive(index)}>{active === index ? <button>-</button> : <button>+</button>}</div>
          </div>
          <div>
        {active === index &&
            (<p>{item.Content} </p> ) }
          </div>
        </div>
      ))}
    </>
  );
};

export default SampleAccord;
