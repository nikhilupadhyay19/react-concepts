import { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setname] = useState("Nikhil Upadhyay");

  const [users, setUsers] = useState([
    {
      name: "User 1",
      age: "30"
    },
    {
      name: "User 2",
      age: "40"
    },
    {
      name: "User 3",
      age: "27"
    },
    {
      name: "User 4",
      age: "20"
    },
    {
      name: "User 5",
      age: "25"
    },
    {
      name: "User 6",
      age: "45"
    }
  ]);

  const [myInfo, setMyInfo] = useState({
    name: "Nikhil Upadhyay",
    age: 30,
    education: "B.TECH"
  });

  const changeNameHandler = () => {
    name === "Nikhil Upadhyay"
      ? setname("Akhil Upadhyay")
      : setname("Nikhil Upadhyay");
  };

  const removeUsersHandler = () => {
    setUsers([]);
  };

  const updateInfoHandler = () => {
    setMyInfo((myInfo) => {
      return { ...myInfo, name: "Akhil Upadhyay" };
    });
  };

  const removeUserHandler = (id) => {
    // const updatedUsers = users.filter((user) => user.name !== id);
    // setUsers(updatedUsers);
    const usersArray = [...users];
    const userIndex = usersArray.findIndex((user) => user.name === id);
    usersArray.splice(userIndex, 1);
    setUsers(usersArray);
  };

  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <button onClick={changeNameHandler}>Update Name</button>

      {users.map((user) => {
        return (
          <div key={user.name}>
            <p className="todo__list">
              {user.name} {user.age}{" "}
              <button
                className="danger"
                onClick={() => removeUserHandler(user.name)}
              >
                Remove
              </button>
            </p>
          </div>
        );
      })}

      <button onClick={removeUsersHandler}>Clear Users</button>

      <p>
        Hi {myInfo.name}, Age {myInfo.age}, Education {myInfo.education}
      </p>

      <button onClick={updateInfoHandler}>Update Info</button>
    </div>
  );
}
