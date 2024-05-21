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
import { Button, Card, Container, Row, Col, Carousel } from "react-bootstrap";

const Home = () => {
  const [newName, setNewName] = useState("");
  const [newMarks, setNewMarks] = useState(0);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    getUsers();
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
    <div>
      <a
        href={`https://wa.me/${9302795777}?text=${encodeURIComponent("hello")}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Send WhatsApp Message
      </a>
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
      <Carousel interval={null}>
        <Carousel.Item>
          <img
            className="d-block"
            src="/favicon.ico"
            alt="First slide"
            style={{ height: "400px", width: "100%" }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="/favicon.ico"
            alt="Second slide"
            style={{ height: "400px", width: "100%" }}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="/favicon.ico"
            alt="Third slide"
            style={{ height: "400px", width: "100%" }}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
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
                  <Button variant="primary" onClick={() => deleteUser(user.id)}>
                    Delete User
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
