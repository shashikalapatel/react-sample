import { useEffect, useState } from "react";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

const Home = () => {
  const [newName, setNewName] = useState("");
  const [newMarks, setNewMarks] = useState(0);
  const [users, setUsers] = useState([]);
  // const usersCollectionRef = null;
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    // getUsers();
  });

  const getUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      name: newName,
      marks: Number(newMarks),
    });
    getUsers();
  };

  const updateUser = async (id, marks) => {
    const userDoc = doc(db, "users", id);
    const newFields = { marks: marks + 1 };
    await updateDoc(userDoc, newFields);
    getUsers();
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    getUsers();
  };

  return (
    <>
      <div style={{ display: "none" }}>
        <div className="FormHolder">
          <input
            type="text"
            placeholder="Name..."
            onChange={(event) => {
              setNewName(event.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Marks..."
            onChange={(event) => {
              setNewMarks(event.target.value);
            }}
          />
          <button onClick={createUser}>Create User</button>
        </div>
        <Container>
          <Row>
            {users.map((user, index) => (
              <Col sm={12} md={6} lg={4} xl={3} key={index}>
                <Card style={{ width: "15rem", margin: "0.5rem" }}>
                  <Card.Img variant="top" src="/favicon.ico" />
                  <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>{user.marks}</Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => updateUser(user.id, user.marks)}
                    >
                      Increase Marks
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete User
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className="container-fluid featurs py-5">
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="featurs-item text-center rounded bg-light p-4">
                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                  <i className="fas fa-car-side fa-3x text-white"></i>
                </div>
                <div className="featurs-content text-center">
                  <h5>Free Shipping</h5>
                  <p className="mb-0">Free on order over $300</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="featurs-item text-center rounded bg-light p-4">
                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                  <i className="fas fa-user-shield fa-3x text-white"></i>
                </div>
                <div className="featurs-content text-center">
                  <h5>Security Payment</h5>
                  <p className="mb-0">100% security payment</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="featurs-item text-center rounded bg-light p-4">
                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                  <i className="fas fa-exchange-alt fa-3x text-white"></i>
                </div>
                <div className="featurs-content text-center">
                  <h5>30 Day Return</h5>
                  <p className="mb-0">30 day money guarantee</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="featurs-item text-center rounded bg-light p-4">
                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                  <i className="fa fa-phone-alt fa-3x text-white"></i>
                </div>
                <div className="featurs-content text-center">
                  <h5>24/7 Support</h5>
                  <p className="mb-0">Support every time fast</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid fruite py-5">
        <div className="container py-5">
          <div className="tab-class text-center">
            <div className="row g-4">
              <div className="col-lg-4 text-start">
                <h1>Our Products</h1>
              </div>
              <div className="col-lg-8 text-end">
                <ul className="nav nav-pills d-inline-flex text-center mb-5">
                  <li className="nav-item">
                    <a
                      className="d-flex m-2 py-2 bg-light rounded-pill active"
                      data-bs-toggle="pill"
                      href="#tab-1"
                    >
                      <span className="text-dark" style={{ width: "130px" }}>
                        All Products
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex py-2 m-2 bg-light rounded-pill"
                      data-bs-toggle="pill"
                      href="#tab-2"
                    >
                      <span className="text-dark" style={{ width: "130px" }}>
                        Vegetables
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex m-2 py-2 bg-light rounded-pill"
                      data-bs-toggle="pill"
                      href="#tab-3"
                    >
                      <span className="text-dark" style={{ width: "130px" }}>
                        Products
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex m-2 py-2 bg-light rounded-pill"
                      data-bs-toggle="pill"
                      href="#tab-4"
                    >
                      <span className="text-dark" style={{ width: "130px" }}>
                        Bread
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex m-2 py-2 bg-light rounded-pill"
                      data-bs-toggle="pill"
                      href="#tab-5"
                    >
                      <span className="text-dark" style={{ width: "130px" }}>
                        Meat
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="img/fruite-item-5.jpg"
                              className="img-fluid w-100 rounded-top"
                              alt=""
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Products
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Grapes</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99
                              </p>
                              <a
                                href="google.com"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary"></i>
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="/img/fruite-item-2.jpg"
                              className="img-fluid w-100 rounded-top"
                              alt=""
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Products
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Grapes</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99
                              </p>
                              <a
                                href="google.com"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary"></i>
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="img/fruite-item-2.jpg"
                              className="img-fluid w-100 rounded-top"
                              alt=""
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Products
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Raspberries</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99
                              </p>
                              <a
                                href="google.com"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary"></i>
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="img/fruite-item-4.jpg"
                              className="img-fluid w-100 rounded-top"
                              alt=""
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Products
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Apricots</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99
                              </p>
                              <a
                                href="google.com"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary"></i>
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="img/fruite-item-3.jpg"
                              className="img-fluid w-100 rounded-top"
                              alt=""
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Products
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Banana</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99
                              </p>
                              <a
                                href="google.com"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary"></i>
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="img/fruite-item-1.jpg"
                              className="img-fluid w-100 rounded-top"
                              alt=""
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Products
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Oranges</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99
                              </p>
                              <a
                                href="google.com"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary"></i>
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="img/fruite-item-2.jpg"
                              className="img-fluid w-100 rounded-top"
                              alt=""
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Products
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Raspberries</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99
                              </p>
                              <a
                                href="google.com"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary"></i>
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="img/fruite-item-5.jpg"
                              className="img-fluid w-100 rounded-top"
                              alt=""
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Products
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Grapes</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99
                              </p>
                              <a
                                href="google.com"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary"></i>
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-2" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="img/fruite-item-5.jpg"
                              className="img-fluid w-100 rounded-top"
                              alt=""
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Products
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Grapes</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99
                              </p>
                              <a
                                href="google.com"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary"></i>
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="img/fruite-item-2.jpg"
                              className="img-fluid w-100 rounded-top"
                              alt=""
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Products
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Raspberries</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99
                              </p>
                              <a
                                href="google.com"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary"></i>
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-3" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="img/fruite-item-1.jpg"
                              className="img-fluid w-100 rounded-top"
                              alt=""
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Products
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Oranges</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99
                              </p>
                              <a
                                href="google.com"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary"></i>
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="img/fruite-item-6.jpg"
                              className="img-fluid w-100 rounded-top"
                              alt=""
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Products
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Apple</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99
                              </p>
                              <a
                                href="google.com"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary"></i>
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-4" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="img/fruite-item-5.jpg"
                              className="img-fluid w-100 rounded-top"
                              alt=""
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Products
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Grapes</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99
                              </p>
                              <a
                                href="google.com"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary"></i>
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="img/fruite-item-4.jpg"
                              className="img-fluid w-100 rounded-top"
                              alt=""
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Products
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Apricots</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99
                              </p>
                              <a
                                href="google.com"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary"></i>
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-5" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="img/fruite-item-3.jpg"
                              className="img-fluid w-100 rounded-top"
                              alt=""
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Products
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Banana</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99
                              </p>
                              <a
                                href="google.com"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary"></i>
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="img/fruite-item-2.jpg"
                              className="img-fluid w-100 rounded-top"
                              alt=""
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Products
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Raspberries</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99
                              </p>
                              <a
                                href="google.com"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary"></i>
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src="img/fruite-item-1.jpg"
                              className="img-fluid w-100 rounded-top"
                              alt=""
                            />
                          </div>
                          <div
                            className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                            style={{ top: "10px", left: "10px" }}
                          >
                            Products
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>Oranges</h4>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit sed do eiusmod te incididunt
                            </p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                              <p className="text-dark fs-5 fw-bold mb-0">
                                $4.99
                              </p>
                              <a
                                href="google.com"
                                className="btn border border-secondary rounded-pill px-3 text-primary"
                              >
                                <i className="fa fa-shopping-bag me-2 text-primary"></i>
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container-fluid service py-5">
        <div className="container py-5">
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-4">
              <a href="google.com">
                <div className="service-item bg-secondary rounded border border-secondary">
                  <img
                    src="img/featur-1.jpg"
                    className="img-fluid rounded-top w-100"
                    alt=""
                  />
                  <div className="px-4 rounded-bottom">
                    <div className="service-content bg-primary text-center p-4 rounded">
                      <h5 className="text-white">Fresh Apples</h5>
                      <h3 className="mb-0">20% OFF</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="google.com">
                <div className="service-item bg-dark rounded border border-dark">
                  <img
                    src="img/featur-2.jpg"
                    className="img-fluid rounded-top w-100"
                    alt=""
                  />
                  <div className="px-4 rounded-bottom">
                    <div className="service-content bg-light text-center p-4 rounded">
                      <h5 className="text-primary">Tasty Products</h5>
                      <h3 className="mb-0">Free delivery</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a href="google.com">
                <div className="service-item bg-primary rounded border border-primary">
                  <img
                    src="img/featur-3.jpg"
                    className="img-fluid rounded-top w-100"
                    alt=""
                  />
                  <div className="px-4 rounded-bottom">
                    <div className="service-content bg-secondary text-center p-4 rounded">
                      <h5 className="text-white">Exotic Vegitable</h5>
                      <h3 className="mb-0">Discount 30$</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container-fluid banner bg-secondary my-5">
        <div className="container py-5">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="py-4">
                <h1 className="display-3 text-white">Fresh Product</h1>
                <p className="fw-normal display-3 text-dark mb-4">
                  in Our Store
                </p>
                <p className="mb-4 text-dark">
                  The generated Lorem Ipsum is therefore always free from
                  repetition injected humour, or non-characteristic words etc.
                </p>
                <a
                  href="google.com"
                  className="banner-btn btn border-2 border-white rounded-pill text-dark py-3 px-5"
                >
                  BUY
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <img
                  src="img/baner-1.png"
                  className="img-fluid w-100 rounded"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto mb-5"
            style={{ maxWidth: "700px" }}
          >
            <h1 className="display-4">Bestseller Products</h1>
            <p>
              Latin words, combined with a handful of model sentence structures,
              to generate Lorem Ipsum which looks reasonable.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 col-xl-4">
              <div className="p-4 rounded bg-light">
                <div className="row align-items-center">
                  <div className="col-6">
                    <img
                      src="img/best-product-1.jpg"
                      className="img-fluid rounded-circle w-100"
                      alt=""
                    />
                  </div>
                  <div className="col-6">
                    <a href="google.com" className="h5">
                      Organic Tomato
                    </a>
                    <div className="d-flex my-3">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <h4 className="mb-3">3.12 $</h4>
                    <a
                      href="google.com"
                      className="btn border border-secondary rounded-pill px-3 text-primary"
                    >
                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4">
              <div className="p-4 rounded bg-light">
                <div className="row align-items-center">
                  <div className="col-6">
                    <img
                      src="img/best-product-2.jpg"
                      className="img-fluid rounded-circle w-100"
                      alt=""
                    />
                  </div>
                  <div className="col-6">
                    <a href="google.com" className="h5">
                      Organic Tomato
                    </a>
                    <div className="d-flex my-3">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <h4 className="mb-3">3.12 $</h4>
                    <a
                      href="google.com"
                      className="btn border border-secondary rounded-pill px-3 text-primary"
                    >
                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4">
              <div className="p-4 rounded bg-light">
                <div className="row align-items-center">
                  <div className="col-6">
                    <img
                      src="img/best-product-3.jpg"
                      className="img-fluid rounded-circle w-100"
                      alt=""
                    />
                  </div>
                  <div className="col-6">
                    <a href="google.com" className="h5">
                      Organic Tomato
                    </a>
                    <div className="d-flex my-3">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <h4 className="mb-3">3.12 $</h4>
                    <a
                      href="google.com"
                      className="btn border border-secondary rounded-pill px-3 text-primary"
                    >
                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4">
              <div className="p-4 rounded bg-light">
                <div className="row align-items-center">
                  <div className="col-6">
                    <img
                      src="img/best-product-4.jpg"
                      className="img-fluid rounded-circle w-100"
                      alt=""
                    />
                  </div>
                  <div className="col-6">
                    <a href="google.com" className="h5">
                      Organic Tomato
                    </a>
                    <div className="d-flex my-3">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <h4 className="mb-3">3.12 $</h4>
                    <a
                      href="google.com"
                      className="btn border border-secondary rounded-pill px-3 text-primary"
                    >
                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4">
              <div className="p-4 rounded bg-light">
                <div className="row align-items-center">
                  <div className="col-6">
                    <img
                      src="img/best-product-5.jpg"
                      className="img-fluid rounded-circle w-100"
                      alt=""
                    />
                  </div>
                  <div className="col-6">
                    <a href="google.com" className="h5">
                      Organic Tomato
                    </a>
                    <div className="d-flex my-3">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <h4 className="mb-3">3.12 $</h4>
                    <a
                      href="google.com"
                      className="btn border border-secondary rounded-pill px-3 text-primary"
                    >
                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4">
              <div className="p-4 rounded bg-light">
                <div className="row align-items-center">
                  <div className="col-6">
                    <img
                      src="img/best-product-6.jpg"
                      className="img-fluid rounded-circle w-100"
                      alt=""
                    />
                  </div>
                  <div className="col-6">
                    <a href="google.com" className="h5">
                      Organic Tomato
                    </a>
                    <div className="d-flex my-3">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <h4 className="mb-3">3.12 $</h4>
                    <a
                      href="google.com"
                      className="btn border border-secondary rounded-pill px-3 text-primary"
                    >
                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="text-center">
                <img
                  src="img/fruite-item-1.jpg"
                  className="img-fluid rounded"
                  alt=""
                />
                <div className="py-4">
                  <a href="google.com" className="h5">
                    Organic Tomato
                  </a>
                  <div className="d-flex my-3 justify-content-center">
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <h4 className="mb-3">3.12 $</h4>
                  <a
                    href="google.com"
                    className="btn border border-secondary rounded-pill px-3 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary"></i> Add
                    to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="text-center">
                <img
                  src="img/fruite-item-2.jpg"
                  className="img-fluid rounded"
                  alt=""
                />
                <div className="py-4">
                  <a href="google.com" className="h5">
                    Organic Tomato
                  </a>
                  <div className="d-flex my-3 justify-content-center">
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <h4 className="mb-3">3.12 $</h4>
                  <a
                    href="google.com"
                    className="btn border border-secondary rounded-pill px-3 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary"></i> Add
                    to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="text-center">
                <img
                  src="img/fruite-item-3.jpg"
                  className="img-fluid rounded"
                  alt=""
                />
                <div className="py-4">
                  <a href="google.com" className="h5">
                    Organic Tomato
                  </a>
                  <div className="d-flex my-3 justify-content-center">
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <h4 className="mb-3">3.12 $</h4>
                  <a
                    href="google.com"
                    className="btn border border-secondary rounded-pill px-3 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary"></i> Add
                    to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="text-center">
                <img
                  src="img/fruite-item-4.jpg"
                  className="img-fluid rounded"
                  alt=""
                />
                <div className="py-2">
                  <a href="google.com" className="h5">
                    Organic Tomato
                  </a>
                  <div className="d-flex my-3 justify-content-center">
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <h4 className="mb-3">3.12 $</h4>
                  <a
                    href="google.com"
                    className="btn border border-secondary rounded-pill px-3 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary"></i> Add
                    to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="bg-light p-5 rounded">
            <div className="row g-4 justify-content-center">
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="counter bg-white rounded p-5">
                  <i className="fa fa-users text-secondary"></i>
                  <h4>satisfied customers</h4>
                  <h1>1963</h1>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="counter bg-white rounded p-5">
                  <i className="fa fa-users text-secondary"></i>
                  <h4>quality of service</h4>
                  <h1>99%</h1>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="counter bg-white rounded p-5">
                  <i className="fa fa-users text-secondary"></i>
                  <h4>quality certificates</h4>
                  <h1>33</h1>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="counter bg-white rounded p-5">
                  <i className="fa fa-users text-secondary"></i>
                  <h4>Available Products</h4>
                  <h1>789</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid testimonial py-5">
        <div className="container py-5">
          <div className="testimonial-header text-center">
            <h4 className="text-primary">Our Testimonial</h4>
            <h1 className="display-5 mb-5 text-dark">Our Client Saying!</h1>
          </div>
          <div className="owl-carousel testimonial-carousel">
            <div className="testimonial-item img-border-radius bg-light rounded p-4">
              <div className="position-relative">
                <i
                  className="fa fa-quote-right fa-2x text-secondary position-absolute"
                  // style="bottom: 30px; right: 0"
                ></i>
                <div className="mb-4 pb-4 border-bottom border-secondary">
                  <p className="mb-0">
                    Lorem Ipsum is simply dummy text of the printing Ipsum has
                    been the industry's standard dummy text ever since the
                    1500s,
                  </p>
                </div>
                <div className="d-flex align-items-center flex-nowrap">
                  <div className="bg-secondary rounded">
                    <img
                      src="img/testimonial-1.jpg"
                      className="img-fluid rounded"
                      // style="width: 100px; height: 100px"
                      alt=""
                    />
                  </div>
                  <div className="ms-4 d-block">
                    <h4 className="text-dark">Client Name</h4>
                    <p className="m-0 pb-3">Profession</p>
                    <div className="d-flex pe-5">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item img-border-radius bg-light rounded p-4">
              <div className="position-relative">
                <i
                  className="fa fa-quote-right fa-2x text-secondary position-absolute"
                  // style="bottom: 30px; right: 0"
                ></i>
                <div className="mb-4 pb-4 border-bottom border-secondary">
                  <p className="mb-0">
                    Lorem Ipsum is simply dummy text of the printing Ipsum has
                    been the industry's standard dummy text ever since the
                    1500s,
                  </p>
                </div>
                <div className="d-flex align-items-center flex-nowrap">
                  <div className="bg-secondary rounded">
                    <img
                      src="img/testimonial-1.jpg"
                      className="img-fluid rounded"
                      // style="width: 100px; height: 100px"
                      alt=""
                    />
                  </div>
                  <div className="ms-4 d-block">
                    <h4 className="text-dark">Client Name</h4>
                    <p className="m-0 pb-3">Profession</p>
                    <div className="d-flex pe-5">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item img-border-radius bg-light rounded p-4">
              <div className="position-relative">
                <i
                  className="fa fa-quote-right fa-2x text-secondary position-absolute"
                  // style="bottom: 30px; right: 0"
                ></i>
                <div className="mb-4 pb-4 border-bottom border-secondary">
                  <p className="mb-0">
                    Lorem Ipsum is simply dummy text of the printing Ipsum has
                    been the industry's standard dummy text ever since the
                    1500s,
                  </p>
                </div>
                <div className="d-flex align-items-center flex-nowrap">
                  <div className="bg-secondary rounded">
                    <img
                      src="img/testimonial-1.jpg"
                      className="img-fluid rounded"
                      // style="width: 100px; height: 100px"
                      alt=""
                    />
                  </div>
                  <div className="ms-4 d-block">
                    <h4 className="text-dark">Client Name</h4>
                    <p className="m-0 pb-3">Profession</p>
                    <div className="d-flex pe-5">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
