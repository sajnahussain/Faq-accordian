import React, { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { data } from "./faq";

const SampleAccord = () => {
  const [active, setActive] = useState(null);
  const id = data.id;
  const handleActive = (id) => {
    setActive(id === active ? null : id);
  };
  console.log(id, "=id");
  return (
    <>
      {data.map((item, id) => (
        <div key={id} className="accordian-bar ">
          <div className="title-bar">
            <div>{item.title}</div>
            <div onClick={() => handleActive(id)}>
              {active === id ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>
          <div>{active === id && <p>{item.Content} </p>}</div>
        </div>
      ))}
    </>
  );
};
<script
  src="https://kit.fontawesome.com/b03a3e62c1.js"
  crossorigin="anonymous"
></script>;
export default SampleAccord;
