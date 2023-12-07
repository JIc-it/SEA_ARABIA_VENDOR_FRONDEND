import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { passwordRegex } from "../../helpers";
import { useNavigate } from "react-router";
import LoginImageContainer from "./LoginImageContainer";
import CopyWrite from "./CopyWrite";

const ResetLoginPassword = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      newPassword: "",
      currentPassword: "",
      confirmPassword: "",
      submit: null,
    },
    validationSchema: Yup.object({
      newPassword: Yup.string()
        .max(50)
        .matches(
          passwordRegex,
          "Password must contain at least 8 characters, at least one uppercase letter, lowercase letter, special character, and number"
        )
        .required("New Password is required"),
      confirmPassword: Yup.string()
        .max(50)
        .required("Confirm Password is required")
        .matches(
          passwordRegex,
          "Password must contain at least 8 characters, at least one uppercase letter, lowercase letter, special character, and number"
        )
        .oneOf([Yup.ref("newPassword")], "Passwords must match"),
    }),
    onSubmit: async (values, helpers) => {
      navigate(`/`);
      //   try {
      //     setIsLoading(true);
      //     const response = await axios.post(`${baseUrl}/account/reset-passwordnew/`, {
      //       user_id:' auth.userID',
      //       new_password: values.newPassword,
      //     });
      //     toast.success("Password updated successfully. ");
      //   } catch (err) {
      //     console.log(err);
      //     helpers.setStatus({ success: false });
      //     helpers.setErrors({ submit: err.message });
      //     helpers.setSubmitting(false);
      //   }
    },
  });
  return (
    <div
      className="contaier-fluid"
      style={{ overflowX: "hidden", background: "#fff" }}
    >
      <div className="row">
        <LoginImageContainer />

        <div className="col-md-6 p-0 ">
          <Box
            sx={{
              flex: "1 1 auto",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                maxWidth: 550,
                px: 3,
                py: "100px",
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
                <Stack spacing={1} sx={{ mb: 3 }}>
                  <Typography variant="h4">Reset Password</Typography>
                  <Typography
                    color="text.secondary"
                    variant="body2"
                  ></Typography>
                </Stack>
                <form noValidate onSubmit={formik.handleSubmit}>
                  <Stack spacing={1}>
                    <Typography variant="span">New Password</Typography>
                    <TextField
                      size="small"
                      error={
                        !!(
                          formik.touched.newPassword &&
                          formik.errors.newPassword
                        )
                      }
                      fullWidth
                      helperText={
                        formik.touched.newPassword && formik.errors.newPassword
                      }
                      placeholder="New Password"
                      name="newPassword"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      type={"password"}
                      value={formik.values.newPassword}
                      inputProps={{ maxLength: 50 }}
                    />
                    <Typography variant="span">Confirm Password</Typography>
                    <TextField
                      size="small"
                      error={
                        !!(
                          formik.touched.confirmPassword &&
                          formik.errors.confirmPassword
                        )
                      }
                      fullWidth
                      helperText={
                        formik.touched.confirmPassword &&
                        formik.errors.confirmPassword
                      }
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      type="password"
                      value={formik.values.confirmPassword}
                      inputProps={{ maxLength: 50 }}
                      //   onKeyPress={(e) => {
                      //     if (e.getModifierState("CapsLock")) {
                      //       setCapsLockOn(true);
                      //     } else {
                      //       setCapsLockOn(false);
                      //     }
                      //   }}
                    />
                  </Stack>

                  {formik.errors.submit && (
                    <Typography color="error" sx={{ mt: 3 }} variant="body2">
                      {formik.errors.submit}
                    </Typography>
                  )}
                  <Button
                    fullWidth
                    size="small"
                    type="submit"
                    variant="contained"
                    style={{
                      marginTop: "1rem",
                      borderRadius: " var(--roundness-round-inside, 6px)",
                      background: "#006875",
                      boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.04)",
                    }}
                    onClick={() => {
                      formik.handleSubmit();
                    }}
                    disabled={isLoading} // Disable the button while loading
                  >
                    {isLoading ? (
                      <CircularProgress size={24} color="inherit" /> // Show loader when loading
                    ) : (
                      <span style={{ textTransform: "none" }}>Continue</span>
                      // Show "Continue" text when not loading
                    )}
                  </Button>
                  {/* {capsLockOn && (
                    <Typography
                      color="rgb(33, 118, 255)"
                      sx={{ mt: 1, fontSize: "13px" }}
                      variant="body2"
                    >
                      Caps Lock is ON
                    </Typography>
                  )} */}
                </form>
              </div>
            </Box>
            <CopyWrite />
          </Box>

          <div className="copy-write-container">
            <CopyWrite />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetLoginPassword;
