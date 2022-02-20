import React from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

function App() {
  let titleProduct ="Product List";
  let titleCategory ="Category List";
  return (
    <div>
      <Container>
        <Row>
          <Navi> </Navi>
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList title={titleProduct}></CategoryList>
          </Col>
          <Col xs="9">
            <ProductList title={titleCategory}></ProductList>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
