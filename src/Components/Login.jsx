import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const Login = () => {
  //navigate hook to navigate after sucess
  const navigate = useNavigate();
  //   Disptach hook to dispatch the action
  const dispatch = useDispatch();
  // Use State to take Input Box Value
  const [inputFields, setInputFields] = useState({
    userName: "",
    password: "",
  });

  // Its a From handler present on the name it will assign the value to given
  // input fields
  const onChangeFormHandler = (e) => {
    const { name, value } = e.target;
    setInputFields((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  //   dispatch login function
  const dispatchLogin = () => {
    dispatch({ type: "login" });
  };

  //
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    navigate("/dashboard");
    console.log(inputFields);

    // this code for future if we want to integrate through backend
    // try {
    //   console.log(inputFields);
    //   const response = await fetch(`http://localhost:8000/employee`, {
    //     method: "POST",
    //     headers: { "content-type": "application/json" },
    //     body: JSON.stringify(inputFields),
    //   });

    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <section className="main-section">
      <form className="login" onSubmit={onSubmitHandler}>
        <h2>Welcome, User!</h2>
        <p>Please log in</p>
        <input
          type="text"
          placeholder="User Name"
          name="userName"
          required
          onChange={onChangeFormHandler}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
          onChange={onChangeFormHandler}
        />
        <button type="submit" onClick={dispatchLogin}>
          Log In{" "}
        </button>
      </form>
    </section>
  );
};

export default Login;
