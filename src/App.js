// import logo from './logo.svg';
// import './App.css';
import { useState, useEffect } from "react";
import "./App.css";
import { firebase, db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function App() {
  const [newName, setNewName] = useState("");
  const [newMarks, setNewMarks] = useState(0);

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  const cardData = [
    { title: "Card 1", text: "This is card 1" },
    { title: "Card 2", text: "This is card 2" },
    { title: "Card 3", text: "This is card 3" },
    // Add more card data here
  ];

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

  const getUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
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
      <div className="user-cards">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <h1>Name: {user.name}</h1>
            <h1>Marks: {user.marks}</h1>
            <button onClick={() => updateUser(user.id, user.marks)}>
              Increase Marks
            </button>
            <button onClick={() => deleteUser(user.id)}>Delete User</button>
          </div>
        ))}
      </div>
      {/* <div className="d-flex flex-wrap">
        {cardData.map((data, index) => (
          <Card key={index} style={{ width: "18rem", margin: "1rem" }}>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>{data.text}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </div> */}
    </div>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
