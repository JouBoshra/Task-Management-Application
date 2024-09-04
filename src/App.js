import React, { useState } from "react";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUser";
import EditUserForm from "./forms/EditUser";
import "./App.css";

const App = () => {
  const usersData = [
    { id: 1, name: "Tania", username: "floppydiskette", completed: false },
    { id: 2, name: "Craig", username: "siliconeidolon", completed: false },
    { id: 3, name: "Ben", username: "benisphere", completed: false },
  ];

  const initialFormState = {
    id: null,
    name: "",
    username: "",
    completed: false,
  };
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username,
      completed: user.completed,
    });
  };

  const addUser = (user) => {
    user.id = users.length + 1;
    user.completed = false;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const toggleComplete = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, completed: !user.completed } : user
      )
    );
  };

  return (
    <div className="container">
      <h1 className="animated-heading">Task Management Application</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2 className="animated-heading">Edit task</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2 className="animated-heading">Add Task</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2 className="animated-heading">View and Manage Tasks</h2>
          <UserTable
            users={users}
            editRow={editRow}
            deleteUser={deleteUser}
            toggleComplete={toggleComplete}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
