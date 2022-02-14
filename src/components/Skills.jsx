import React from 'react'
import { Slide } from "react-awesome-reveal";
import skillsLight from '../media/version.svg';
import skillsDark from '../media/skill-anim-dark.svg';
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faDocker, faHtml5, faJs, faReact ,faNodeJs } from '@fortawesome/free-brands-svg-icons';

const Skills = ({darkMode}) => {
    return (
      <div data-theme={darkMode ? "dark" : "light"}>
        <br></br>
        <Slide>
          <Container>
            <Row>
              <Col lg={4} xs={8}>
                <h1 className="display-3 skill-h">
                  I can work <p className="with">with</p>{" "}
                </h1>
                <img
                  src={darkMode ? skillsDark : skillsLight}
                  alt="skills"
                  className="skills-img img-fluid animated"
                />
              </Col>
              <Col lg={2} xs={4}>
                <br></br>
                <Card className="nbcard" id="skill-sec">
                  <div id="html-wrap">
                    <Button
                      variant={darkMode ? "outline-light" : "outline-dark"}
                      className="skills-btn"
                      id="html-btn"
                    >
                      <FontAwesomeIcon
                        className="skill"
                        size="2x"
                        icon={faHtml5}
                      />
                    </Button>
                    <div id="html-pop">HTML</div>
                  </div>
                  <div id="css-wrap">
                    <Button
                      variant={darkMode ? "outline-light" : "outline-dark"}
                      className="skills-btn"
                      id="css-btn"
                    >
                      <FontAwesomeIcon
                        className="skill"
                        size="2x"
                        icon={faCss3Alt}
                      />
                    </Button>
                    <div id="css-pop">CSS</div>
                  </div>
                  <div id="js-wrap">
                    <Button
                      variant={darkMode ? "outline-light" : "outline-dark"}
                      className="skills-btn"
                      id="js-btn"
                    >
                      <FontAwesomeIcon
                        className="skill"
                        size="2x"
                        icon={faJs}
                      />
                    </Button>
                    <div id="js-pop">JAVASCRIPT</div>
                  </div>
                  <div id="react-wrap">
                    <Button
                      variant={darkMode ? "outline-light" : "outline-dark"}
                      className="skills-btn"
                      id="react-btn"
                    >
                      <FontAwesomeIcon
                        className="skill"
                        size="2x"
                        icon={faReact}
                      />
                    </Button>
                    <div id="react-pop">REACT</div>
                  </div>
                  <div id="node-wrap">
                    <Button
                      variant={darkMode ? "outline-light" : "outline-dark"}
                      className="skills-btn"
                      id="node-btn"
                    >
                      <FontAwesomeIcon
                        className="skill"
                        size="2x"
                        icon={faNodeJs}
                      />
                    </Button>
                    <div id="node-pop">NODE</div>
                  </div>
                  {/* <Button variant={darkMode ? "outline-light" : "outline-dark"} className="skills-btn">
                    <p align="center" className="skill-txt">C</p>
                    </Button> */}
                </Card>
              </Col>
              <Col lg={6} xs={12}>
                <br></br>
                {/* <Card className="skill-nbcard">
                        <Card.Body>
                            <Card.Title>Programming Languages</Card.Title>
                            <Card.Text>C Programming, C++, GNU Octave, Python, JavaScript</Card.Text>
                        </Card.Body>
                    </Card> */}
                <Card className="skill-nbcard">
                  <Card.Body>
                    <Card.Title>Technologies</Card.Title>
                    <Card.Text>
                      HTML , CSS , JS , REACT , MONGODB , REDUX , NODE , EXPRESS
                    </Card.Text>
                  </Card.Body>
                </Card>
                {/* <Card className="skill-nbcard">
                        <Card.Body >
                            <Card.Title>Others</Card.Title>
                            <Card.Text>MS office, Graphic Designing</Card.Text>
                        </Card.Body>
                    </Card> */}
              </Col>
            </Row>
            <br></br>
            <hr></hr>
          </Container>
        </Slide>
      </div>
    );
}

export default Skills
