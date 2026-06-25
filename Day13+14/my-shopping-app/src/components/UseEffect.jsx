import React, { useEffect, useState } from "react";
import SearchBox from "./Searchbox";

const MyFirstUseStateComponent = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await res.json();
      setUsers(data);
    };

    getUser();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <SearchBox search={search} setSearch={setSearch} />

      <h1>User Data</h1>

      {filteredUsers.map((user) => (
        <div key={user.id}>
          <h3>{user.id}</h3>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default MyFirstUseStateComponent;