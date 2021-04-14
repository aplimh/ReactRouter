import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { NavLink, Link } from "react-router-dom";

const Navi = () => {
  const activ = { fontWeight: "bold", color: "red" };
  return (
    <ListGroup>
      <ListGroup.Item>
        <NavLink exact to="/" activeStyle={activ}>
          Home
        </NavLink>
      </ListGroup.Item>
      <ListGroup.Item>
        <div>Evenimente</div>
        <ul>
          <li>
            <NavLink to="/evenimente/1" activeStyle={activ}>
              Lansare <b>Smart dogs</b>
            </NavLink>
          </li>
          <li>
            <Link to="/evenimente/2">Mutare în noul sediu</Link>
          </li>
          <li>
            <Link to="/evenimente/3">Team building '2021</Link>
          </li>
        </ul>
      </ListGroup.Item>
      <ListGroup.Item>
        <NavLink to="/despre" activeStyle={activ}>
          Despre
        </NavLink>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Navi;
