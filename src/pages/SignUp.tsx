import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
//import { AppLink } from '../components/AppLink'
import {
  Alert,
  AlertTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FormContainer, Form, Submit } from "./SignUp.styles";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "../axios";
import { useState } from "react";

type Inputs = {
  id: number;
  name: string;
  email: string;
  password: string;
  photo: string;
  role: string;
};

interface Ialert {
  type: "error" | "warning" | "info" | "success";
  message: string;
}
export default function SignUpPage() {
  const [alert, setAlert] = useState<Ialert | null>(null);
  const { register, handleSubmit } = useForm<Inputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (userData: Inputs) => {
    try {
      const { data } = await axios.post("/user", userData);

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
          Sign Up
        </Typography>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                {...register("name")}
                autoComplete="name"
                required
                fullWidth
                label="Full Name"
                autoFocus
                value="Admin"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("email")}
                required
                fullWidth
                label="Email Address"
                autoComplete="email"
                value="admin2@example.com"
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
            <Grid item xs={12}>
              <TextField
                {...register("photo")}
                required
                fullWidth
                label="Photo URL"
                type="url"
                autoComplete="photo"
                value="https://example.com/example.jpg"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="role">Role</InputLabel>
                <Select
                  {...register("role")}
                  labelId="role"
                  label="Role"
                  defaultValue="student"
                >
                  <MenuItem value="student">Student</MenuItem>
                  <MenuItem value="teacher">Teacher</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Submit type="submit" fullWidth variant="contained">
            Sign Up
          </Submit>

          {alert && <Alert severity={alert.type}>{alert.message}</Alert>}
          <Grid container justifyContent="flex-end">
            <Grid item>
              {/* <AppLink to='/login'>Already have an account? Login</AppLink> */}
            </Grid>
          </Grid>
        </Form>
      </FormContainer>
    </Container>
  );
}
