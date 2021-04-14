import React from "react";
import { useParams } from "react-router-dom";

const Evenimente = (props) => {
  const { id } = useParams(); //  Destructurare. Pot fi mai multi parametri.

  const stil = {
    borderBottom: "2px solid green",
    display: "inline-block",
    width: "25%"
  };
  return (
    <>
      <h3 className="mt-5">Evenimente</h3>
      <div style={stil}></div>
      <p>
        Pagina <em>Evenimente ({id})</em>.
      </p>
    </>
  );
};

export default Evenimente;
