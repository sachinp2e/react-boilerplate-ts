import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "./styles.module.scss";

const Home: React.FC = () => {
  return (
    <Container className={styles.home}>
      <Row className="mb-4">
        <Col>
          <h1 className={styles.title}>Welcome to Kalp React App</h1>
          <p className={styles.subtitle}>
            A production-ready React boilerplate with Redux, TypeScript, and
            Bootstrap
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={4} className="mb-4">
          <Card className={styles.featureCard}>
            <Card.Body>
              <Card.Title>TypeScript</Card.Title>
              <Card.Text>
                Built with TypeScript for enhanced developer experience and type
                safety.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className={styles.featureCard}>
            <Card.Body>
              <Card.Title>Redux Toolkit</Card.Title>
              <Card.Text>
                State management made easy with Redux Toolkit and Redux Persist.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className={styles.featureCard}>
            <Card.Body>
              <Card.Title>SASS Modules</Card.Title>
              <Card.Text>
                Modular styling with SASS and CSS Modules for better
                maintainability.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
