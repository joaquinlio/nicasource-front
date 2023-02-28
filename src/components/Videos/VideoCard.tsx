import ThumbUp from "@mui/icons-material/ThumbUp";
import {
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "./VideoCard.styles";

export default function VideoCard({
  title,
  creatorPhotoUrl,
  creationDate,
  videoSrcUrl,
  creatorId,
  videoId,
  likedByuser,
  creatorIsFollowedByUser,
  published,
  getVideos,
}: any) {
  const navigate = useNavigate();
  const videoUrlId = videoSrcUrl.split("watch?v=")[1];

  const onFollow = async () => {
    try {
      const url = creatorIsFollowedByUser ? "/user/unfollow" : "/user/follow";

      await axios.post(url, { id: creatorId });

      getVideos();
    } catch (error: any) {
      throw error;
    }
  };

  const onPublish = async () => {
    try {
      const url = published ? "/video/unpublish" : "/video/publish";

      await axios.post(url, { id: creatorId });

      getVideos();
    } catch (error: any) {
      throw error;
    }
  };

  const onLike = async () => {
    try {
      const url = likedByuser ? "/video/dislike" : "/video/like";

      await axios.post(url, { id: creatorId });

      getVideos();
    } catch (error: any) {
      throw error;
    }
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="194"
        image={`https://img.youtube.com/vi/${videoUrlId}/hqdefault.jpg`}
        onClick={() => navigate(`/videos/${videoId}`)}
      />
      <CardContent>
        <Avatar aria-label="recipe" src={creatorPhotoUrl}>
          U
        </Avatar>
        <Typography variant="body2" color="text.secondary" paragraph={true}>
          {title} {new Date(creationDate).toLocaleDateString()}
        </Typography>
        <Button
          variant="outlined"
          color={creatorIsFollowedByUser ? "error" : "primary"}
          size="small"
          onClick={() => onFollow()}
        >
          {creatorIsFollowedByUser ? "Unfollow" : "Follow"}
        </Button>
        <Button
          variant="outlined"
          color={published ? "error" : "primary"}
          size="small"
          onClick={() => onPublish()}
        >
          {published ? "Published" : "Not published"}
        </Button>
        <IconButton aria-label="like video">
          <ThumbUp
            htmlColor={likedByuser ? "dodgerblue" : "inherit"}
            onClick={() => onLike()}
          />
        </IconButton>
      </CardContent>
    </Card>
  );
}
