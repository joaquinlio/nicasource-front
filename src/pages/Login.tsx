import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
//import { AppLink } from '../components/AppLink'
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Form, FormContainer, Submit } from "./Login.styles";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "../axios";

type Inputs = {
  email: string;
  password: string;
};

interface Ialert {
  type: "error" | "warning" | "info" | "success";
  message: string;
}

export default function LoginPage() {
  const [alert, setAlert] = useState<Ialert | null>(null);
  const { register, handleSubmit } = useForm<Inputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (userData: Inputs) => {
    try {
      const { data } = await axios.post("/login", userData);

      localStorage.setItem(
        "token",
        JSON.stringify({
          value: data.accessToken,
          expiresOn: Date.now() + 3600 * 1000,
        })
      );
      navigate("/");
    } catch (error: any) {
      setAlert({
        type: "error",
        message: error.response.data.error,
      });
      throw error;
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <FormContainer>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                {...register("email")}
                required
                fullWidth
                label="Email Address"
                autoComplete="email"
                value="admin@example.com"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("password")}
                required
                fullWidth
                label="Password"
                type="password"
                autoComplete="new-password"
                value="Admin1$!"
              />
            </Grid>
          </Grid>
          <Submit type="submit" fullWidth variant="contained">
            Login
          </Submit>
          {alert && <Alert severity={alert.type}>{alert.message}</Alert>}
          <Grid container justifyContent="flex-end">
            <Grid item>
              {/* <AppLink to='/register'>
                Don't have an account yet? Register
              </AppLink> */}
            </Grid>
          </Grid>
        </Form>
      </FormContainer>
    </Container>
  );
}
