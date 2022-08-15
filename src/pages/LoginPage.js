import { React, useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AuthContext } from "../component/AuthProvider";
import { tabScrollButtonClasses } from "@mui/material";
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const { auth, setAuth } = useContext(AuthContext);
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  // const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    const EMAIL = 'phi@gmail.com'
    const PASSWORD = '123456'

    try {
      // if email & password is correct
      // change auth state to isLoggedIn = true
      // navigate to Homepage
      if (data.email === EMAIL && data.password === PASSWORD) {
        setAuth({
          email: data.email,
          isLoggedIn: true
        })

        // if redirect_job
        navigate("/");
      } else {
        // Do nothing
        setError("afterSubmit", { message: "Wrong email/password" });
      }

      // await setAuth({ ...auth, data });
      // console.log(auth, "1");
      // console.log(data, "2");
      // setError("afterSubmit", { message: "Server Response Error" });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchLogin = async () => {
    try {
      const res = await axios.get("https://reqres.in/api/login", { onSubmit });
      console.log(res);
    } catch (error) {
      console.log({ error });
    }
  };
  fetchLogin();

  return (
    <div>
      <h1>LoginPageTitle</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(onSubmit)()
      }}>
        {/* <div>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            autoComplete="off"
            {...register("username")}
          />
        </div> */}

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            autoComplete="off"
            {...register(
              "email"
              //  { required: true }
            )}
          />
          {/* {errors.email && <p>Email is required</p>} */}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            autoComplete="off"
            {...register("password")}
          />
        </div>

        {/* <div>
          <label>
            <select {...register("language")}>
              <option value="VN">VN</option>
              <option value="EN">EN</option>
              <option value="DE">DE</option>
            </select>
          </label>
        </div> */}
        <input type="submit" />
      </form>
    </div>
  );
}

export default LoginPage;

//  // const defaultValues = {
//   email: "morita@gmail.com",
//   password: "123",
//   remember: true,
// };
// tạo object defaultValues
// const methods = useForm({ defaultValues });
//cho func useForm nhận object defaultValues
//destructure methods

// const {
//   reset,
//   setError,
//   handleSubmit,
//   control,
//   formState: { error, isSubmitting },
// } = methods;
