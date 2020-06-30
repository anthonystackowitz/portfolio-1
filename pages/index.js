import BaseLayout from "components/layouts/BaseLayout";
import BasePage from "components/BasePage";
import { Button, Container, Row, Col } from "reactstrap";
import Typed from "react-typed";
import { useGetUser } from "actions/user";
import { useGetPostById } from "actions";
import Particles from "react-particles-js";
import {backgroundStyle, letters, collisions, connect, image, cool} from 'styles/backgroundStyle'

const ROLES = [
  "Full Stack Developer",
  "Project Manager",
  "Team Lead",
  "Solidity",
  "React.js",
  "Blockchain",
  "Python",
];
const Index = () => {
  const { user, userLoading } = useGetUser();

  return (
    <>
      <BaseLayout
        navClass={""}
        user={user}
        userLoading={userLoading}
        className="cover"
      >
        {/* <BasePage indexPage> */}
        <div className="main-section">
          <div className="background-image">
            <Particles
              params={cool}
            />
          </div>
          <Container>
            <Row className="main-row">
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper`}>
                    <div className="back">
                      <div className="hero-section-content">
                        <h3> Full Stack Web Developer </h3>
                        <div className="hero-section-content-intro">
                          Please have a look at my Portfolio and History.
                        </div>
                      </div>
                      <img className="image" src="/images/section-1a.png" />
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    Welcome to the portfolio website of Anthony Stachowitz. Please take a look at my portfolio, Resume and blogs.
                  </h1>
                </div>
                <Typed
                  loop
                  strings={ROLES}
                  typeSpeed={50}
                  backSpeed={70}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  className="self-typed"
                  cursorChar="_"
                ></Typed>
                <div className="hero-welcome-bio">
                  <h1>Let's take a look on my work.</h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* </BasePage> */}
      </BaseLayout>
    </>
  );
};

export default Index;
