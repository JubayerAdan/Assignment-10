import React, { useContext, useState } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";
import { Link, Navigate } from "react-router-dom";

const Signup = () => {
  const { user, createUser, googleMethod, githubMethod, facebookMethod } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const regexp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%^&+=]).{8,}$/;
  const handleSignup = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    if (!regexp.test(password)) {
      setError(
        "Password must contain at least 8 characters, including 1 uppercase letter, 1 lowercase letter, and 1 special character."
      );
      return;
    }
    createUser(email, password)
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
        return;
      });
  };
  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Signup now!</h1>
          <p className="py-6 flex">
            <button onClick={googleMethod} className="r-icon-google">
              <img
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                alt=""
              />
            </button>
            <button onClick={githubMethod} className="r-icon-gihub">
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt=""
              />
            </button>
            <button onClick={facebookMethod} className="ms-2 r-icon-gihub">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/1200px-2023_Facebook_icon.svg.png"
                alt=""
              />
            </button>
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignup} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="name"
                className="input input-bordered"
                name="text"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image Url</span>
              </label>
              <input
                type="text"
                placeholder="image"
                className="input input-bordered"
                name="image"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Signup</button>
              <p className="text-red-500">
                <small>{error}</small>
              </p>
            </div>

            <div>
              <h2>
                {" "}
                Already Have An Account?{" "}
                <Link className="text-primary" to="/login">
                  Login
                </Link>
              </h2>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
