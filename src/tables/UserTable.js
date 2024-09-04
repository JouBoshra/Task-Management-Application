import React from "react";

const UserTable = (props) => (
  <table className="user-table animated-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Tasks</th>
        <th>Completed</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr
            key={user.id}
            className={`animated-row ${user.completed ? "completed-row" : ""}`}
          >
            <td>{user.name}</td>
            <td>
              {user.completed ? (
                <span className="completed-task">Task completed</span>
              ) : (
                user.username
              )}
            </td>
            <td>
              <input
                type="checkbox"
                checked={user.completed}
                onChange={() => props.toggleComplete(user.id)}
              />
            </td>
            <td>
              <button
                className="animated-button"
                onClick={() => {
                  props.editRow(user);
                }}
              >
                Edit
              </button>
              <button
                className="animated-button muted-button"
                onClick={() => props.deleteUser(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr className="animated-row">
          <td colSpan={4}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
