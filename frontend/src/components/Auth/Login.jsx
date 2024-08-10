import React, { useContext, useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { Link, Navigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main";
import image from '../../assets/Images/login.png';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const { isAuthorized, setIsAuthorized } = useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault();
    // Added validation check
    if (!email || !password || !role) {
      toast.error("Please fill in all fields.");
      return;
    }
    try {
      const { data } = await axios.post(
        "https://workwave-30du.onrender.com/api/v1/user/login",
        { email, password, role },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setEmail("");
      setPassword("");
      setRole("");
      setIsAuthorized(true);
    } catch (error) {
      // Enhanced error handling
      toast.error(error.response.data.message || "An error occurred");
    }
  };

  // Changed from direct button click to form submission
  if (isAuthorized) {
    return <Navigate to={'/'}/>;
  }

  return (
    <section className="authPage">
      <div className="container">
        <div className="header">
          <h3>Login to your account</h3>
        </div>
        {/* Added onSubmit handler to the form */}
        <form onSubmit={handleLogin}>
          <div className="inputTag">
            <label htmlFor="role">Login As</label>
            <div>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                aria-required="true" // Added aria-required for accessibility
              >
                <option value="">Select Role</option>
                <option value="Employer">Employer</option>
                <option value="Job Seeker">Job Seeker</option>
              </select>
              <FaRegUser />
            </div>
          </div>
          <div className="inputTag">
            <label htmlFor="email">Email Address</label>
            <div>
              <input
                id="email"
                type="email"
                placeholder="Enter your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-required="true" // Added aria-required for accessibility
              />
              <MdOutlineMailOutline />
            </div>
          </div>
          <div className="inputTag">
            <label htmlFor="password">Password</label>
            <div>
              <input
                id="password"
                type="password"
                placeholder="Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-required="true" // Added aria-required for accessibility
              />
              <RiLock2Fill />
            </div>
          </div>
          <button type="submit">
            Login
          </button>
          <Link to="/register">Register Now</Link>
        </form>
      </div>
      <div className="banner">
        <img src={image} alt="login" />
      </div>
    </section>
  );
};

export default Login;
