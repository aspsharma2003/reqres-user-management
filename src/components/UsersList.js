import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://reqres.in/api/users?page=${page}`).then((res) => {
      setUsers(res.data.data);
    });
  }, [page]);

  const handleDelete = async (id) => {
    await axios.delete(`https://reqres.in/api/users/${id}`);
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="users-container">
      <h2>Users List</h2>
      <button onClick={() => { localStorage.removeItem("token"); navigate("/login"); }}>Logout</button>
      <div className="users-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.avatar} alt="User Avatar" />
            <h3>{user.first_name} {user.last_name}</h3>
            <p>{user.email}</p>
            <Link to={`/edit/${user.id}`} className="edit-btn">Edit</Link>
            <button onClick={() => handleDelete(user.id)} className="delete-btn">Delete</button>
          </div>
        ))}
      </div>
      <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>Previous</button>
      <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
    </div>
  );
};

export default UsersList;
