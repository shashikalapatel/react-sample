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
      <header id="header" class="header fixed-top d-flex align-items-center">
        <div class="d-flex align-items-center justify-content-between">
          <a href="index.html" class="logo d-flex align-items-center">
            <img src="assets/img/logo.png" alt="" />
            <span class="d-none d-lg-block">FancyStore Shop</span>
          </a>
          {/* <i class="bi bi-list toggle-sidebar-btn"></i> */}
        </div>

        <div class="search-bar">
          <form
            class="search-form d-flex align-items-center"
            method="POST"
            action="#"
          >
            <input
              type="text"
              name="query"
              placeholder="Search"
              title="Enter search keyword"
            />
            <button type="submit" title="Search">
              <i class="bi bi-search"></i>
            </button>
          </form>
        </div>

        <nav class="header-nav ms-auto">
          <ul class="d-flex align-items-center">
            <li class="nav-item d-block d-lg-none">
              <a class="nav-link nav-icon search-bar-toggle " href="#">
                <i class="bi bi-search"></i>
              </a>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                <i class="bi bi-bell"></i>
                <span class="badge bg-primary badge-number">4</span>
              </a>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                <i class="bi bi-chat-left-text"></i>
                <span class="badge bg-success badge-number">3</span>
              </a>
            </li>

            <li class="nav-item dropdown pe-3">
              <a
                class="nav-link nav-profile d-flex align-items-center pe-0"
                href="#"
                data-bs-toggle="dropdown"
              >
                <img
                  src="assets/img/profile-img.jpg"
                  alt="Profile"
                  class="rounded-circle"
                />
                <span class="d-none d-md-block dropdown-toggle ps-2">
                  K. Anderson
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <img
        src="assets/img/online-ordering-website1.jpg"
        alt=""
        style={{ margin: "60px 0 0 0", width: "100%", height: "539px" }}
      />
      <section class="section dashboard" style={{ padding: "40px" }}>
        <div class="row">
          <div class="col-12">
            <div class="card top-selling overflow-auto">
              <div class="filter">
                <a class="icon" href="#" data-bs-toggle="dropdown">
                  <i class="bi bi-three-dots"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li class="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>

                  <li>
                    <a class="dropdown-item" href="#">
                      Today
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      This Month
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      This Year
                    </a>
                  </li>
                </ul>
              </div>

              <div class="card-body pb-0">
                <h5 class="card-title">
                  Products to Selling <span></span>
                </h5>

                <table class="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Preview</th>
                      <th scope="col">Product</th>
                      <th scope="col">Price</th>
                      <th scope="col">Qty</th>
                      <th scope="col">Discount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <a href="#">
                          <img src="assets/img/product-1.jpg" alt="" />
                        </a>
                      </th>
                      <td>
                        <a href="#" class="text-primary fw-bold">
                          Ut inventore ipsa voluptas nulla
                        </a>
                      </td>
                      <td>$64</td>
                      <td class="fw-bold">124</td>
                      <td>$5,828</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <a href="#">
                          <img src="assets/img/product-2.jpg" alt="" />
                        </a>
                      </th>
                      <td>
                        <a href="#" class="text-primary fw-bold">
                          Exercitationem similique doloremque
                        </a>
                      </td>
                      <td>$46</td>
                      <td class="fw-bold">98</td>
                      <td>$4,508</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <a href="#">
                          <img src="assets/img/product-3.jpg" alt="" />
                        </a>
                      </th>
                      <td>
                        <a href="#" class="text-primary fw-bold">
                          Doloribus nisi exercitationem
                        </a>
                      </td>
                      <td>$59</td>
                      <td class="fw-bold">74</td>
                      <td>$4,366</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <a href="#">
                          <img src="assets/img/product-4.jpg" alt="" />
                        </a>
                      </th>
                      <td>
                        <a href="#" class="text-primary fw-bold">
                          Officiis quaerat sint rerum error
                        </a>
                      </td>
                      <td>$32</td>
                      <td class="fw-bold">63</td>
                      <td>$2,016</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <a href="#">
                          <img src="assets/img/product-5.jpg" alt="" />
                        </a>
                      </th>
                      <td>
                        <a href="#" class="text-primary fw-bold">
                          Sit unde debitis delectus repellendus
                        </a>
                      </td>
                      <td>$79</td>
                      <td class="fw-bold">41</td>
                      <td>$3,239</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section contact" style={{ padding: "40px" }}>
        <div class="row gy-4">
          <div class="col-xl-6">
            <div class="row">
              <div class="col-lg-6">
                <div class="info-box card">
                  <i class="bi bi-geo-alt"></i>
                  <h3>Address</h3>
                  <p>
                    A108 Adam Street,
                    <br />
                    New York, NY 535022
                  </p>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="info-box card">
                  <i class="bi bi-telephone"></i>
                  <h3>Call Us</h3>
                  <p>
                    +1 5589 55488 55
                    <br />
                    +1 6678 254445 41
                  </p>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="info-box card">
                  <i class="bi bi-envelope"></i>
                  <h3>Email Us</h3>
                  <p>
                    info@example.com
                    <br />
                    contact@example.com
                  </p>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="info-box card">
                  <i class="bi bi-clock"></i>
                  <h3>Open Hours</h3>
                  <p>
                    Monday - Friday
                    <br />
                    9:00AM - 05:00PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-6">
            <div class="card p-4">
              <form
                action="forms/contact.php"
                method="post"
                class="php-email-form"
              >
                <div class="row gy-4">
                  <div class="col-md-6">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="Your Name"
                      required=""
                    />
                  </div>

                  <div class="col-md-6 ">
                    <input
                      type="number"
                      class="form-control"
                      name="mobile"
                      placeholder="Your Whatsapp Number"
                      required=""
                    />
                  </div>

                  <div class="col-md-12">
                    <input
                      type="text"
                      class="form-control"
                      name="subject"
                      placeholder="Subject"
                      required=""
                    />
                  </div>

                  <div class="col-md-12">
                    <textarea
                      class="form-control"
                      name="message"
                      rows="6"
                      placeholder="Message"
                      required=""
                    ></textarea>
                  </div>

                  <div class="col-md-12 text-center">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">
                      Your message has been sent. Thank you!
                    </div>

                    <button type="submit">Post Your Order</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
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
      </div>
      <footer id="footer" class="footer">
        <div class="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Kajalfancy store</span>
          </strong>
          . All Rights Reserved
        </div>
      </footer>
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
