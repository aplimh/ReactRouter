import React from "react";
import Home from "./home";
import Despre from "./despre";
import Navi from "./navi";
import Evenimente from "./evenimente";
import NotFound from "./notfound";
import { Container, Row, Col } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Container>
      <h2>Demo rutare</h2>
      <Row>
        <Col sm={4}>
          <Navi />
        </Col>
        <Col>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/evenimente/:id">
              <Evenimente />
            </Route>
            <Route path="/despre">
              <Despre />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
