import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Spinner } from "react-bootstrap";
function UserList() {
  const baseURL = "https://jsonplaceholder.typicode.com/users";

  const [listOfUSer, setListOfUSer] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get(baseURL).then((response) => {
      setListOfUSer(response.data);
      setLoading(false);
      //   console.log(response.data);
    });
  }, []);

  return (
    <div>
      <h1 className="header">
        Users List{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi bi-person-lines-fill"
          viewBox="0 0 16 16"
        >
          <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
        </svg>
      </h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Company</th>
            <th>Web Site</th>
          </tr>
        </thead>
        <tbody>
          {loading && <Spinner animation="grow" />}
          {listOfUSer.map((user) => (
            <tr key={user.id}>
              <td>{user.id} </td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                {user.address.street} {user.address.suite}
              </td>
              <td>{user.company.name}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default UserList;
