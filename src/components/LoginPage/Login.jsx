import { useCallback, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Alert,
  Box,
  Button,
  FormHelperText,
  Link,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import LoginImageContainer from "./LoginImageContainer";
import CopyWrite from "./CopyWrite";
import { loginRequest } from '../../axioshandle/authHandle'
import { passwordRegex } from "../../helpers";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [capsLockOn, setCapsLockOn] = useState(false);


  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      password: Yup.string()
        .max(50)
        .required("Password is required")
        .matches(
          passwordRegex,
          "Password must contain at least 5 characters, at least one uppercase letter, lowercase letter, special character, and number"
        ),
    }),
    onSubmit: async (values, helpers) => {
      try {
        const data = {
          email: values.email,
          password: values.password,
        };
        const { access, refresh, role } = await loginRequest(data);
        if (access) {
          localStorage.setItem("access_token", access);
          localStorage.setItem("refresh_token", refresh);
          localStorage.setItem("role", role);
          navigate(`/lead-managment`);
          console.log("sucess");
        } else {
          toast.error("Login error");
        }
      } catch (err) {
        console.log(err);
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });


  return (
    <div
      className="contaier-fluid"
      style={{ overflowX: "hidden" }}
    >
      <div className="row">
        <LoginImageContainer />

        <div className="col-md-6 p-0 ">
          <Box
            sx={{
              backgroundColor: "background.paper",
              overflow: "hidden",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Box
              sx={{
                maxWidth: 550,
                px: 3,
                paddingBottom: "100px",
                paddingTop: "10rem",
                width: "100%",
              }}
            >
              <div
                style={{
                  borderRadius: "12px",
                  borderTop: " 1px solid var(--stroke-light-base, #EAEBF0)",
                  borderRight: "1px solid var(--stroke-light-base, #EAEBF0)",
                  borderBottom: "1px solid var(--stroke-light-base, #EAEBF0)",
                  borderLeft: "1px solid var(--stroke-light-base, #EAEBF0)",
                  background: " var(--background-light-base-main, #FFF)",
                  boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.04)",
                  padding: "2rem",
                }}
              >
                <Stack sx={{ mb: 3 }}>
                  <Typography variant="h6">Sign In with your Email</Typography>
                </Stack>

                <form
                  noValidate
                  onSubmit={formik.handleSubmit}
                  autocomplete="off"
                >
                  <Stack spacing={2}>
                    <Typography variant="span">Email Address</Typography>
                    <TextField
                      autocomplete="off"
                      size="small"
                      error={!!(formik.touched.email && formik.errors.email)}
                      fullWidth
                      helperText={formik.touched.email && formik.errors.email}
                      name="email"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      type="email"
                      value={formik.values.email}
                      placeholder="Email"
                      inputProps={{
                        autocomplete: "email",
                        form: {
                          autocomplete: "off",
                        },
                      }}
                    />
                    <Typography variant="span">Password</Typography>
                    <TextField
                      autocomplete="off"
                      size="small"
                      // error={
                      //   !!(formik.touched.password && formik.errors.password)
                      // }
                      fullWidth
                      // helperText={
                      //   formik.touched.password && formik.errors.password
                      // }
                      placeholder="Password"
                      name="password"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      type={"password"}
                      value={formik.values.password}
                      inputProps={{ maxLength: 50 }}
                    />
                  </Stack>

                  {formik.errors.submit && (
                    <Typography color="error" sx={{ mt: 3 }} variant="body2">
                      {/* {formik.errors.submit} */}
                      Login Failed.
                    </Typography>
                  )}
                  <Button
                    fullWidth
                    size="large"
                    sx={{ mt: 3 }}
                    type="submit"
                    variant="contained"
                    style={{
                      borderRadius: "var(--roundness-round-inside, 6px)",
                      background: "#006875",

                      boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.04)",
                      textTransform: "none",
                    }}
                  >
                    Sign In
                    {/* <a href="/lead-managment">Sign In</a> */}
                  </Button>
                  <br />
                  {/* {capsLockOn && (
                    <Typography
                      color="rgb(33, 118, 255)"
                      sx={{ mt: 1, fontSize: "13px" }}
                      variant="body2"
                    >
                      Caps Lock is ON
                    </Typography>
                  )} */}
                  {/* <span style={{ fontSize: "12px", color: "red" }}>
                    {loginDetails &&
                      loginDetails.status != 200 &&
                      loginDetails.data &&
                      loginDetails.data.detail}
                  </span> */}

                  <Typography
                    color="text.secondary"
                    variant="body2"
                    sx={{ paddingTop: "5px", textAlign: "end" }}
                  >
                    <Link
                      // component={NextLink}
                      href="/email-varification"
                      underline="hover"
                      variant="subtitle2"
                      style={{ color: "#187AF7" }}
                    >
                      Forgot password?
                    </Link>
                  </Typography>
                </form>
              </div>
            </Box>
          </Box>

          <div className="copy-write-container">
            <CopyWrite />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
