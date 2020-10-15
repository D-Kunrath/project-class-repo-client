import React, { useState, useRef } from "react";
import NavBar from "../NavBar";

const Template = () => {
  const [fomeName, setFormName] = useState("");
  const [labList, setLabList] = useState([]);
  const imputRef = useRef();

  const updateName = (event) => {
    setFormName(event.target.value);
  };

  const addLab = () => {
    // setLabList({...})
    console.log(imputRef.current);
  };

  return (
    <div id="content">
      <NavBar pageName="Template" />
      <div>
        <p>Tamplate Name</p>
        <input onChange={updateName} />
      </div>
      <div>
        <p>Labs</p>
        <input ref={imputRef} /> <button onClick={addLab}>Add</button>
      </div>
    </div>
  );
};

export default Template;
