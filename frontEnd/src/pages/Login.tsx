import { useState } from "react";
import { Link } from "react-router-dom";
// import useLogin from "../hooks/useLogin";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  // const { loading, login } = useLogin();

  // const handleSubmitForm = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   login(inputs.username, inputs.password);
  // };

  return (
    <div className="mx-auto flex min-w-96 flex-col items-center justify-center">
      <div className="w-full rounded-lg bg-gray-400 bg-opacity-0 bg-clip-padding p-6 shadow-md backdrop-blur-lg backdrop-filter">
        <h1 className="text-center text-3xl font-semibold text-white">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        {/* <form onSubmit={handleSubmitForm}> */}
        <div>
          <label className="label p-2">
            <span className="label-text text-base">Username</span>
          </label>
          <input
            type="text"
            placeholder="Enter username"
            className="input input-bordered h-10 w-full"
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text text-base">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            className="input input-bordered h-10 w-full"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
        </div>
        <Link
          to="/signup"
          className="mt-2 inline-block text-sm text-white hover:text-blue-600 hover:underline"
        >
          {"Don't"} have an account?
        </Link>

        <div>
          {/* <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? "Loading..." : "Login"}
            </button> */}
        </div>
        {/* </form> */}
      </div>
    </div>
  );
};
export default Login;
