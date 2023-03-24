import React from "react";
import { TextField, Button, Box, Link, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { changeEmail, changePassword, logIn } from "../redux/authSlice";
import { Link as RouterLink } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/styles/LoginPage.css";

function SignIn() {
  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);

  // console.log("->IN", email, password);

  const isLoading = useSelector((state) => state.auth.isLoading);

  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    dispatch(changeEmail(e.currentTarget.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(changePassword(e.currentTarget.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn({ email, password }));

    /* toast.success("Başarıyla giriş yaptınız!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    }); */
  };

  return (
    <div className="loginContainer">
      <div className="loginPage">
        <form onSubmit={handleSubmit}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Giriş Yap
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Email Adresi"
            required
            autoComplete="email"
            autoFocus
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Şifre"
            required
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button
            type="submit"
            variant="contained"
            disabled={isLoading}
            fullWidth
            sx={{ mt: 2 }}
          >
            {isLoading ? "Yükleniyor..." : "Giriş Yap"}
          </Button>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 4,
            }}
          >
            <Link component={RouterLink} to="../forgot-password">
              Sifrenizi mi unuttunuz?
            </Link>
            <Link component={RouterLink} to="../register">
              Bir hesabin yok mu? Kaydol
            </Link>
          </Box>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
