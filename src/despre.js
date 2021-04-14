import React from "react";
import { useHistory } from "react-router-dom";

const Despre = () => {
  const history = useHistory();
  const stil = {
    borderBottom: "2px solid green",
    display: "inline-block",
    width: "25%"
  };
  return (
    <>
      <h3 className="mt-5">Despre</h3>
      <div style={stil}></div>
      <p>
        Pagina <em>Despre</em>.
      </p>
      <button onClick={() => history.push("/evenimente/2")}>Home</button>
    </>
  );
};

export default Despre;
