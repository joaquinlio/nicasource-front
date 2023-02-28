import { Typography, TextField, Button } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "../../axios";
import { Paper, Form } from "./CreateVideoModal.styles";

type Inputs = {
  title: string;
  url: string;
};
export default function CreateVideoModal({
  getVideos,
  closeModal,
  createAlert,
}: any) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (videoData: Inputs) => {
    try {
      const { data } = await axios.post("/video", videoData);

      getVideos();
      closeModal(false);
      createAlert({
        type: "success",
        message: "Video created successfully",
      });
    } catch (error: any) {
      closeModal(false);
      createAlert({
        type: "error",
        message: error.response.data?.error || "Server error",
      });
      throw error;
    }
  };

  return (
    <Paper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h4" component="h4">
          Create Video
        </Typography>

        <TextField label="Title" {...register("title")} />
        <TextField label="Source URL" {...register("url")} />

        <Button variant="contained" type="submit">
          Create
        </Button>
      </Form>
    </Paper>
  );
}
