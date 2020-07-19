import BaseLayout from "components/layouts/BaseLayout";
import BasePage from "components/BasePage";
import { useGetUser } from "actions/user";
import { useEffect } from "react";
import { Row, Col } from "reactstrap";

const About = () => {
  const { user, userLoading } = useGetUser();
  return (
    <BaseLayout user={user} userLoading={userLoading}>
      <BasePage
        title="About - Anthony Stachowitz"
        className="about-page"
        canonicalPath="/about"
      >
        <Row className="mt-5">
          <Col md="6">
            <div className="left-side">
              <h1 className={`title fadein`}>Welcome to</h1>
              <h4 className={`subtitle fadein`}>A Little Info About Me</h4>
              <p className={`subsubTitle fadein`}>
                A short description.
              </p>
            </div>
          </Col>
          <Col md="6">
            <div className={`fadein`}>
              <p>
                My name is Anthony Stachowitz and I am a developer who enjoys new technologies and likes to work on the edge of tech.{" "}
              </p>
              <p>
                I have a Bachelors degree in Criminal Justice, Political Science and Marketing from Metro State University of Denver. I studied full stack development at the Lambda school in San Francisco (online) and blockchain technology at the Emurgo Academy in India (online) - along with various self taught online classes.
              </p>
              <p>
                Throughout my career, I have acquired a variety of diverse experiences. The early part of my career has been spent building some of my own businesses and the later part has been dedicated to learning new technologies with a personal focus on blockchain technology.
              </p>
            </div>
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default About;
