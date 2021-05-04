import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import NavbarHeader from "../../components/NavbarHeader";
import SideMenu from "../SideMenu";
import AlertMsg from "../../components//AlertMsg";
import HomePage from "../HomePage";
import GalleryPage from "../GalleryPage";
import NotFoundPage from "../../components//NotFoundPage";

const Routes = () => {
  return (
    <>
      <NavbarHeader />
      <Container fluid>
        <Row>
          <SideMenu />
          <Col md={9} className="d-flex justify-content-center">
            <AlertMsg />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/gallery" component={GalleryPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Routes;
