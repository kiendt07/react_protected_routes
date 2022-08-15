import { React, useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AuthContext } from "../component/AuthProvider";
import { tabScrollButtonClasses } from "@mui/material";

function LoginPage() {
  const { auth, setAuth } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  // const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    try {
      await setAuth({ ...auth, data });
      console.log(auth, "1");
      console.log(data, "2");
      setError("afterSubmit", { message: "Server Response Error" });
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
      <form onSubmit={() => handleSubmit(onSubmit)()}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            autoComplete="off"
            {...register("username")}
          />
        </div>

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
          <label>
            <select {...register("language")}>
              <option value="VN">VN</option>
              <option value="EN">EN</option>
              <option value="DE">DE</option>
            </select>
          </label>
        </div>
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
