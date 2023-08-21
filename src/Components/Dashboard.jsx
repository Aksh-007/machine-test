import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  // Disptach hook
  const dispatch = useDispatch();
  // disptach logout function
  const dispatchLogout = () => {
    dispatch({ type: "logout" });
    navigate("/");
  };
  return (
    <section>
      <h1>Dashboard</h1>
      <button onClick={dispatchLogout}>Logout</button>
    </section>
  );
};

export default Dashboard;
