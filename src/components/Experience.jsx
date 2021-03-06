import { useState, React } from 'react'
import { Zoom, Fade } from 'react-awesome-reveal'
import practo from '../media/practo.png'
import straw from '../media/straw.png'
import adidas from "../media/adidas.png";
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
                {/* <Col lg={4} sm={12}>
                        <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                        <br></br>
                        <center>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div className="flip-card-front">
                                        <Card.Img variant="top" src={tcd}/>
                                        <Card.Body>
                                            <Card.Title align="center">Toxic Comment Detector</Card.Title>
                                            <Card.Text>
                                                <p align="center">A Chrome Extension which can detect whether the input text is Positive or Negative.</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back">
                                        <p>Implemented Linear Regression Algorithm of Scikit-Learn library on well-preprocessed dataset of Kaggle.
                                        <br></br>Hosted the Machine Learning Model on Heroku and Mia, integrated the hosted model in a Chrome Extension.
                                        <br></br>Achieved ROC AUC Score of 93.5%
                                        </p>
                                    </div> 
                                </div>
                            </div>
                        </center>
                        <br></br>
                        <div>
                            <a href="https://miamarketplace.com/apps/LG7MrdG4a9anFy3ZxQ4hiHeGZEQtsAlpkt0JBGz3fvJs" target="_blank" rel="noreferrer noopener">
                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button>
                            </a>
                            <a href="https://github.com/Tejaswi-Chaudhari/Toxic-Comment-Classification" target="_blank" rel="noreferrer noopener">
                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                            </a>
                        </div>
                        <br></br>
                        </Card>
                    </Col> */}
                {/* <Col lg={4} sm={12}>
                        <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                        <br></br>
                        <center>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div className="flip-card-front">
                                        <Card.Img variant="top" src={gotg}/>
                                        <Card.Body>
                                            <Card.Title align="center">InternExperience</Card.Title>
                                            <Card.Text>
                                                <p align="center">During this internship, I am building a web app to help people with their public speaking ability</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back">
                                        <p>Planned the UI for website and designed frontend using ReactJs and React-Bootstrap
                                        <br></br>Built Database models using Django Rest Framework and SQLite
                                        <br></br>Created APIs to integrate frontend and backend together
                                        <br></br>Dockerized the Web Application
                                        </p>
                                    </div> 
                                </div>
                            </div>
                        </center>
                        <br></br>
                        <div>   
                            <Modal show={show} onHide={handleClose} className="modal">
                                <Modal.Body>Heya! The project is in development mode, you can visit the repository and have a look. Feel free to contribute!</Modal.Body>
                                <Modal.Footer>
                                <Button variant="outline-dark" onClick={handleClose}>
                                    Close
                                </Button>
                                <a href="https://github.com/Tejaswi-Chaudhari/Gift-of-the-Gab" target="_blank" rel="noreferrer noopener">
                                    <Button variant="outline-dark">View Github Repo</Button>
                                </a>
                                </Modal.Footer>
                            </Modal>
                            <Button variant={darkMode ? "outline-light" : "outline-dark"} onClick={handleShow} className="sbtn">View Project</Button>
                            <a href="https://github.com/Tejaswi-Chaudhari/Gift-of-the-Gab" target="_blank" rel="noreferrer noopener">
                                <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                            </a>
                        </div>
                        <br></br>
                        </Card>
                    </Col>*/}
                {/* <Col lg={4} sm={12}>
                  <Card
                    align="center"
                    className="exp"
                    data-theme={darkMode ? "dark" : "light"}
                  >
                    <br></br>
                    <center>
                      <div class="flip-card">
                        <div class="flip-card-inner">
                          <div className="flip-card-front">
                            <Card.Img variant="top" src={ca} />
                            <Card.Body>
                              <Card.Title align="center">CharitAble</Card.Title>
                              <Card.Text>
                                <p align="center">
                                  A Fundraising Web App where people can start a
                                  fundraiser for free
                                </p>
                              </Card.Text>
                            </Card.Body>
                          </div>
                          <div className="flip-card-back">
                            <p>
                              Developed a Fundraising Web App where people can
                              start a fundraiser for free and also contribute to
                              other ongoing fundraisers.
                              <br></br>This website can connect you to different
                              Blood Banks as a Donor and Patient.
                              <br></br>Tech Stack - ReachJs, Bootstrap, Cloud
                              Firestore
                            </p>
                          </div>
                        </div>
                      </div>
                    </center>
                    <br></br>
                    <div>
                      <a
                        href="https://charit-able.netlify.app/"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Button
                          variant={darkMode ? "outline-light" : "outline-dark"}
                          className="sbtn"
                        >
                          View Project
                        </Button>
                      </a>
                      <a
                        href="https://github.com/Tejaswi-Chaudhari/CharitAble"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Button
                          variant={darkMode ? "outline-light" : "outline-dark"}
                          className="sbtn"
                        >
                          View Github Repo
                        </Button>
                      </a>
                    </div>
                    <br></br>
                  </Card>
                </Col>
              </Row>
            </Zoom>
            <br></br>
            <Zoom>
              <Row>
                <Col lg={4} sm={12}>
                  <Card
                    align="center"
                    className="exp"
                    data-theme={darkMode ? "dark" : "light"}
                  >
                    <br></br>
                    <center>
                      <div class="flip-card">
                        <div class="flip-card-inner">
                          <div className="flip-card-front">
                            <Card.Img variant="top" src={rfp} />
                            <Card.Body>
                              <Card.Title align="center">
                                Rooted - Portal for farmers
                              </Card.Title>
                              <Card.Text>
                                <p align="center">
                                  Developed a Portal for Farmers to sell their
                                  goods at a better rate.
                                </p>
                              </Card.Text>
                            </Card.Body>
                          </div>
                          <div className="flip-card-back">
                            <p>
                              User-friendly and clean basic scripted website
                              <br></br>Tech Stack - HTML, CSS, JavaScript
                            </p>
                          </div>
                        </div>
                      </div>
                    </center>
                    <br></br>
                    <div>
                      <a
                        href="https://rooted-portal.netlify.app/"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Button
                          variant={darkMode ? "outline-light" : "outline-dark"}
                          className="sbtn"
                        >
                          View Project
                        </Button>
                      </a>
                      <a
                        href="https://github.com/SheHacks-Hack-O-holics/SheHacks"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Button
                          variant={darkMode ? "outline-light" : "outline-dark"}
                          className="sbtn"
                        >
                          View Github Repo
                        </Button>
                      </a>
                    </div>
                    <br></br>
                  </Card>
                </Col> */}
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
                            <Card.Img variant="top" src={practo} />
                            <Card.Body>
                              <Card.Title align="center">
                                Practo Replica
                              </Card.Title>
                              <Card.Text>
                                <p align="center">
                                  A replica of Practo website in which users can
                                  book appointments , consultations with
                                  doctors.
                                </p>
                              </Card.Text>
                            </Card.Body>
                          </div>
                          <div className="flip-card-back">
                            <h4>
                              <strong>Tech stack</strong>
                            </h4>{" "}
                            HTML , CSS , JAVASCRIPT .<br></br>
                            <br />
                            <h4>
                              <strong>Features</strong>
                            </h4>{" "}
                            User authentication , Responsive home page , Cart
                            feature , products carousel , Payment gateway.
                          </div>
                        </div>
                      </div>
                    </center>
                    <br></br>
                    <div>
                      <a
                        href="https://practoclone-001.netlify.app/"
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
                      <a
                        href="https://github.com/Vaman93/Practo-Clone"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Button
                          variant={darkMode ? "outline-light" : "outline-dark"}
                          className="sbtn"
                        >
                          Github Repo
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
                            <Card.Img variant="top" src={straw} />
                            <Card.Body>
                              <Card.Title align="center">
                                Strawberrynet Replica
                              </Card.Title>
                              <Card.Text>
                                <p align="center">
                                  Strawberrynet is an e-commerce website from
                                  which user can purchase beauty products.
                                </p>
                              </Card.Text>
                            </Card.Body>
                          </div>
                          <div className="flip-card-back">
                            <h4>
                              <strong>Tech stack</strong>
                            </h4>{" "}
                            HTML , CSS , JAVASCRIPT , MONGODB , EXPRESS.
                            <br></br>
                            <br />
                            <h4>
                              <strong>Features</strong>
                            </h4>{" "}
                            User authentication , Backend integration , Mongodb
                            atlas integrated , Cart feature , products carousel
                            , Payment gateway.
                          </div>
                        </div>
                      </div>
                    </center>
                    <br></br>
                    <div>
                      <a
                        href="https://bit.ly/strawberry-cw"
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
                      <a
                        href="https://github.com/codingwithgyan/Strawberry-net"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Button
                          variant={darkMode ? "outline-light" : "outline-dark"}
                          className="sbtn"
                        >
                          Github Repo
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
                            <Card.Img variant="top" src={adidas} />
                            <Card.Body>
                              <Card.Title align="center">
                                Adidas Replica
                              </Card.Title>
                              <Card.Text>
                                <p align="center">
                                  Adidas e-commerce website for buying adidas
                                  products online.
                                </p>
                              </Card.Text>
                            </Card.Body>
                          </div>
                          <div className="flip-card-back">
                            <h4>
                              <strong>Tech stack</strong>
                            </h4>{" "}
                            HTML , CSS , JAVASCRIPT , MONGODB , EXPRESS , REACT
                            <br></br>
                            <br />
                            <h4>
                              <strong>Features</strong>
                            </h4>{" "}
                            User authentication , Backend integration , Mongodb
                            atlas integrated , Wishlist feature , Cart feature ,
                            products carousel , Payment gateway.
                          </div>
                        </div>
                      </div>
                    </center>
                    <br></br>
                    <div>
                      <a
                        href="https://adidas-clone-team44.netlify.app/"
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
                      <a
                        href="https://github.com/AnanthuSuresh098/Adidas-replica"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Button
                          variant={darkMode ? "outline-light" : "outline-dark"}
                          className="sbtn"
                        >
                          Github Repo
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
