import { useState, React } from 'react'
import { Zoom, Fade } from 'react-awesome-reveal';
import dreamwell from '../media/dreamwell.png';
import zinggalas from "../media/zinggalas.png";
import jsk from "../media/jsk.png";
import formula from "../media/formula.png";
import vihari from "../media/vihari.png";
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/esm/Card'

const Experience = ({darkMode}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <div data-theme={darkMode ? "dark" : "light"}>
        <br></br>
        <Fade>
          <Container>
            <br></br>
            <h2 className="lead" align="center">
              <b> Projects </b>
            </h2>
            <br></br>
            <Zoom>
              <Row id="proj-wrap">
                <Col lg={4} sm={12}>
                  <Card
                    align="center"
                    className="exp"
                    data-theme={darkMode ? "dark" : "light"}
                  >
                    <br></br>
                    <center>
                      <div className="flip-card">
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                            <Card.Img variant="top" src={dreamwell} />
                            <Card.Body>
                              <Card.Title align="center">Dreamwell</Card.Title>
                              <Card.Text>
                                <p align="center">
                                  Dreamwell is a lead generation website from
                                  which user can browse through different
                                  mattress and pillow products and customise it.
                                </p>
                              </Card.Text>
                            </Card.Body>
                          </div>
                          <div className="flip-card-back">
                            <h4>
                              <strong>Tech stack</strong>
                            </h4>{" "}
                            REACTJS | HTML | CSS | NODEJS | BOOTSTRAP | MONGODB
                            <br></br>
                            <br />
                            <h4>
                              <strong>Features</strong>
                            </h4>{" "}
                            Customisation of products according to user needs,
                            Lead Generation through form , Responsive UI for
                            different screen sizes , Product Carousels and
                            Components ,
                          </div>
                        </div>
                      </div>
                    </center>
                    <br></br>
                    <div>
                      <a
                        href="https://Dreamwell.in"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Button
                          variant={darkMode ? "outline-light" : "outline-dark"}
                          className="sbtn"
                        >
                          View Website
                        </Button>
                      </a>
                    </div>
                    <br></br>
                  </Card>
                </Col>
                <Col lg={4} sm={12}>
                  <Card
                    align="center"
                    className="exp"
                    data-theme={darkMode ? "dark" : "light"}
                  >
                    <br></br>
                    <center>
                      <div className="flip-card">
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                            <Card.Img variant="top" src={zinggalas} />
                            <Card.Body>
                              <Card.Title align="center">Zinggalas</Card.Title>
                              <Card.Text>
                                <p align="center">
                                  Zinggalas is an e-commerce website from which
                                  user can book events and wishlist , add to
                                  cart and purchase party products.
                                </p>
                              </Card.Text>
                            </Card.Body>
                          </div>
                          <div className="flip-card-back">
                            <h4>
                              <strong>Tech stack</strong>
                            </h4>{" "}
                            HTML | CSS | REACTJS | MONGODB ATLAS | NODEJS |
                            FIREBASE | MATERIAL UI
                            <br></br>
                            <br />
                            <h4>
                              <strong>Features</strong>
                            </h4>{" "}
                            Google Firebase authentication , Backend integration
                            , Mongodb atlas integrated , Cart feature ,
                            Wishlisting , User friendly UI for responsive
                            screens
                          </div>
                        </div>
                      </div>
                    </center>
                    <br></br>
                    <div>
                      <a
                        href="https://zinggalas.netlify.app/"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Button
                          variant={darkMode ? "outline-light" : "outline-dark"}
                          className="sbtn"
                        >
                          View Website
                        </Button>
                      </a>
                    </div>
                    <br></br>
                  </Card>
                </Col>

                <Col lg={4} sm={12}>
                  <Card
                    align="center"
                    className="exp"
                    data-theme={darkMode ? "dark" : "light"}
                  >
                    <br></br>
                    <center>
                      <div className="flip-card">
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                            <Card.Img variant="top" src={vihari} />
                            <Card.Body>
                              <Card.Title align="center">Vihari</Card.Title>
                              <Card.Text>
                                <p align="center">
                                  Vihari is a real-estate lead generation
                                  website where user can browse through some
                                  real estate projects and the info about them
                                </p>
                              </Card.Text>
                            </Card.Body>
                          </div>
                          <div className="flip-card-back">
                            <h4>
                              <strong>Tech stack</strong>
                            </h4>{" "}
                            REACTJS | HTML | CSS | NODEJS | BOOTSTRAP | MONGODB
                            <br></br>
                            <br />
                            <h4>
                              <strong>Features</strong>
                            </h4>{" "}
                            Lead Generation through form , Responsive UI for
                            different screen sizes , Product Carousels and
                            Components ,User friendly UI for better user
                            experience
                          </div>
                        </div>
                      </div>
                    </center>
                    <br></br>
                    <div>
                      <a
                        href="https://vihariprojects.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Button
                          variant={darkMode ? "outline-light" : "outline-dark"}
                          className="sbtn"
                        >
                          View Website
                        </Button>
                      </a>
                    </div>
                    <br></br>
                  </Card>
                </Col>

                <Col lg={4} sm={12}>
                  <Card
                    align="center"
                    className="exp"
                    data-theme={darkMode ? "dark" : "light"}
                  >
                    <br></br>
                    <center>
                      <div className="flip-card">
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                            <Card.Img variant="top" src={jsk} />
                            <Card.Body>
                              <Card.Title align="center">JSK</Card.Title>
                              <Card.Text>
                                <p align="center">
                                  Jsk is a lead generation website from which
                                  user can browse through different packaging
                                  products and request for samples and quote.
                                </p>
                              </Card.Text>
                            </Card.Body>
                          </div>
                          <div className="flip-card-back">
                            <h4>
                              <strong>Tech stack</strong>
                            </h4>{" "}
                            REACTJS | HTML | CSS | NODEJS | BOOTSTRAP | MONGODB
                            <br></br>
                            <br />
                            <h4>
                              <strong>Features</strong>
                            </h4>{" "}
                            Lead Generation through form , Responsive UI for
                            different screen sizes , Product Carousels and
                            Components , User friendly ui for better user
                            experience.
                          </div>
                        </div>
                      </div>
                    </center>
                    <br></br>
                    <div>
                      <a
                        href="https://jsk00.netlify.app/"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Button
                          variant={darkMode ? "outline-light" : "outline-dark"}
                          className="sbtn"
                        >
                          View Website
                        </Button>
                      </a>
                    </div>
                    <br></br>
                  </Card>
                </Col>

                <Col lg={4} sm={12}>
                  <Card
                    align="center"
                    className="exp"
                    data-theme={darkMode ? "dark" : "light"}
                  >
                    <br></br>
                    <center>
                      <div className="flip-card">
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                            <Card.Img variant="top" src={formula} />
                            <Card.Body>
                              <Card.Title align="center">
                                Formula Hub
                              </Card.Title>
                              <Card.Text>
                                <p align="center">
                                  Formula hub is an edutech website where user
                                  can browse through different universities and
                                  courses.
                                </p>
                              </Card.Text>
                            </Card.Body>
                          </div>
                          <div className="flip-card-back">
                            <h4>
                              <strong>Tech stack</strong>
                            </h4>{" "}
                            REACTJS | HTML | CSS | NODEJS | BOOTSTRAP | MONGODB
                            <br></br>
                            <br />
                            <h4>
                              <strong>Features</strong>
                            </h4>{" "}
                            Lead Generation through form , Responsive UI for
                            different screen sizes , Product Carousels and
                            Components ,User friendly UI for better user
                            experience
                          </div>
                        </div>
                      </div>
                    </center>
                    <br></br>
                    <div>
                      <a
                        href="https://formula-hub.netlify.app/"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Button
                          variant={darkMode ? "outline-light" : "outline-dark"}
                          className="sbtn"
                        >
                          View Website
                        </Button>
                      </a>
                    </div>
                    <br></br>
                  </Card>
                </Col>
              </Row>
            </Zoom>
          </Container>
        </Fade>
        <br></br>
        <hr></hr>
        <br></br>
      </div>
    );
}

export default Experience
