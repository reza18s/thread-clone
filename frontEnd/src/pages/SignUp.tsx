import { Link } from "react-router-dom";
// import GenderCheckbox from "../components/GenderCheckbox";
import { useState } from "react";
// import useSignup from "../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  // const { loading, signup } = useSignup();

  // const handleCheckboxChange = (gender: "male" | "female") => {
  //   setInputs({ ...inputs, gender });
  // };

  // const handleSubmitForm = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   signup(inputs);
  // };

  return (
    <div className="mx-auto flex min-w-96 flex-col items-center justify-center">
      <div className="w-full rounded-lg bg-gray-400 bg-opacity-0 bg-clip-padding p-6 shadow-md backdrop-blur-lg">
        <h1 className="text-center text-3xl font-semibold text-gray-300">
          Sign Up <span className="text-blue-500"> ChatApp</span>
        </h1>

        {/* <form onSubmit={handleSubmitForm}> */}
        <div>
          <label className="label p-2">
            <span className="label-text text-base">Full Name</span>
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="input input-bordered h-10 w-full"
            value={inputs.fullName}
            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
          />
        </div>

        <div>
          <label className="label p-2">
            <span className="label-text text-base">Username</span>
          </label>
          <input
            type="text"
            placeholder="johndoe"
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

        <div>
          <label className="label">
            <span className="label-text text-base">Confirm Password</span>
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="input input-bordered h-10 w-full"
            value={inputs.confirmPassword}
            onChange={(e) =>
              setInputs({ ...inputs, confirmPassword: e.target.value })
            }
          />
        </div>

        {/* <GenderCheckbox
          selectedGender={inputs.gender}
          onCheckboxChange={handleCheckboxChange}
        /> */}

        <Link
          to={"/login"}
          className="mt-2 inline-block text-sm text-white hover:text-blue-600 hover:underline"
        >
          Already have an account?
        </Link>

        <div>
          {/* <button
            className="btn btn-block btn-sm mt-2 border border-slate-700"
            disabled={loading}
          > */}
          {/* {loading ? "Loading..." : "Sign Up"} */}
          {/* </button> */}
        </div>
        {/* </form> */}
      </div>
    </div>
  );
};
export default SignUp;
