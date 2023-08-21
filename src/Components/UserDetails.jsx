import React, { useEffect, useState } from "react";
import Error from "./Error";

const UserDetails = () => {
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState("");
  const [lodaing, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const data = await fetch(`https://dummyjson.com/users`);
      const userdata = await data.json();
      console.log(userdata);
      setTotalUsers(userdata?.limit);
      setUsers(userdata?.users);
      setLoading(false);
    } catch (error) {
      console.log("Error", error);
      setError(true);
    }
  };

  if (error) return <Error />;
  return (
    <>
      {lodaing ? (
        <h1>Loading...</h1>
      ) : (
        <section>
          <h2>User Details Table</h2>
          <h3>Total users Limit : {totalUsers}</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Company Address</th>
                <th>Hair Color</th>
                <th>Hair Type</th>
                <th>Card Expire</th>
                <th>Card Type</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user?.id}</td>
                  <td>{user?.username}</td>
                  <td>{user?.email}</td>
                  <td>{user.address?.city}</td>
                  <td>{user.company.address?.address}</td>
                  <td>{user.hair?.color}</td>
                  <td>{user.hair?.type}</td>
                  <td>{user.bank?.cardExpire}</td>
                  <td>{user.bank?.cardType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </>
  );
};

export default UserDetails;
