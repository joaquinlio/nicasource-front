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

export const FormContainer = styled(Box)`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled("form")`
  margin-top: 20px;
`;

export const Submit = styled(Button)`
  margin-top: 20px;
  margin-bot: 15px;
`;
