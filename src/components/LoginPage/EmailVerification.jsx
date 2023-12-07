import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, Link, Stack, TextField, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
// import CopyWrite from "../components/CopyWrite";
import { useNavigate } from "react-router";
import LoginImageContainer from "./LoginImageContainer";
import CopyWrite from "./CopyWrite";
import { forgotPassword } from "../../axioshandle/authHandle";

const EmailVerification = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      emailVerification: "",
      submit: null,
    },
    validationSchema: Yup.object({
      emailVerification: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        // const data = {
        //   email: values.email,
        // };
        navigate(`/verification`);
        // const { access, refresh, role } = await forgotPassword(data);
      } 
      

      catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
        setIsLoading(false);
      }
    },
  });
  return (
    <div className="contaier-fluid" style={{ overflowX: "hidden" }}>
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
              <div>
                <Stack spacing={1} sx={{ mb: 3 }}>
                  <Typography variant="h4">Forgot Password</Typography>
                </Stack>
                <form noValidate onSubmit={formik.handleSubmit}>
                  <Stack spacing={1}>
                    <Typography variant="span">Email Address</Typography>
                    <TextField
                      size="small"
                      error={
                        !!(
                          formik.touched.emailVerification &&
                          formik.errors.emailVerification
                        )
                      }
                      fullWidth
                      helperText={
                        formik.touched.emailVerification &&
                        formik.errors.emailVerification
                      }
                      placeholder="Email Address"
                      name="emailVerification"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      type="email"
                      value={formik.values.emailVerification}
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
                    sx={{ mt: 3 }}
                    type="submit"
                    variant="contained"
                    style={{
                      borderRadius: " var(--roundness-round-inside, 6px)",
                      background: "#006875",

                      boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.04)",
                      textTransform: "none",
                    }}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <CircularProgress size={24} color="inherit" />
                    ) : (
                      <span style={{ textTransform: "none" }}>
                        Send Verification Code
                      </span>
                    )}
                  </Button>
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

export default EmailVerification;
