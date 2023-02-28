/**
 * @desc Dependencias
 */
import { styled, css } from "@mui/system";

/**
 * @desc Material design
 */
import {
  Toolbar as ToolbarMaterial,
  Box,
  Typography,
  Button,
} from "@mui/material";

export const VideosContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AddVideoButton = styled(Button)`
  margin-bottom: 50px;
  margin-top: 20px;
`;
