import { Alert, Grid, Modal } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import VideoCard from "../components/Videos/VideoCard";
import axios from "../axios";
import { AddVideoButton, VideosContainer } from "./Videos.styles";
import CreateVideoModal from "../components/Videos/CreateVideoModal";
import { redirect } from "react-router-dom";

interface User {
  name: string;
  photo: string;
}

interface Video {
  id: number;
  title: string;
  url: string;
  creationDate: string;
  published: boolean;
  userId: string;
  User: User;
  likedByuser: boolean;
  creatorIsFollowedByUser: boolean;
}
interface Ialert {
  type: "error" | "warning" | "info" | "success";
  message: string;
}

export default function VideosPage() {
  const [videos, setVideos] = useState<Video[]>();
  const [alert, setAlert] = useState<Ialert | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const getVideos = async () => {
    try {
      const { data } = await axios.get("/videos");
      setVideos(data);
    } catch (error: any) {
      /*  if (error.response.status === 401) {
        return redirect("/login");
      } */
      //debugger;
      setAlert({
        type: "error",
        message: error.response.data?.error || "Server error",
      });
    }
  };

  const createAlert = (alert: Ialert) => {
    setAlert(alert);
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <VideosContainer>
      <AddVideoButton
        variant="contained"
        size="large"
        onClick={() => setOpenModal(true)}
      >
        Add Video
      </AddVideoButton>
      {alert && <Alert severity={alert.type}>{alert.message}</Alert>}

      <Grid container spacing={2}>
        {videos &&
          videos.map((video) => (
            <Grid item xs={12} sm={6} md={4} key={video.id} zeroMinWidth>
              <VideoCard
                videoId={video.id}
                title={video.title}
                creationDate={video.creationDate}
                creatorId={video.userId}
                creatorPhotoUrl={video.User.photo}
                videoSrcUrl={video.url}
                likedByuser={video.likedByuser}
                creatorIsFollowedByUser={video.creatorIsFollowedByUser}
                published={video.published}
                getVideos={getVideos}
              />
            </Grid>
          ))}
      </Grid>

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        disableEnforceFocus
      >
        <CreateVideoModal
          closeModal={setOpenModal}
          getVideos={getVideos}
          createAlert={createAlert}
        />
      </Modal>
    </VideosContainer>
  );
}
