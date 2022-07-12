import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5001/getUsers").then((res) => {
      setListOfUsers(res.data);
    });
  }, []);

  const createUser = () => {
    axios
      .post("http://localhost:5001/createUser", {
        name: name,
        age: age,
        username: username,
      })
      .then((res) => {
        // alert("USER CREATED");
        setListOfUsers([
          ...listOfUsers,
          {
            name: name,
            age: age,
            username: username,
          },
        ]);
      });
  };

  return (
    <div className="App">
      <div className="userDisplay">
        {listOfUsers.map((user) => {
          return (
            <div>
              <h1>Name : {user.name}</h1>
              <h1>Age : {user.age}</h1>
              <h1>Username : {user.username}</h1>
            </div>
          );
        })}
      </div>
      <div>
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="Number"
          placeholder="Age..."
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button type="button" onClick={createUser}>
          Create User
        </button>
      </div>
    </div>
  );
}

export default App;
