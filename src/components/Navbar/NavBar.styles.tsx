/**
 * @desc Dependencias
 */
import { styled } from "@mui/system";

/**
 * @desc Material design
 */
import {
  Toolbar as ToolbarMaterial,
  Box as BoxMaterial,
  Typography,
} from "@mui/material";

export const Toolbar = styled(ToolbarMaterial)`
  display: "flex";
  justifycontent: "space-between";
`;

export const Box = styled(BoxMaterial)`
  display: "flex";
  alignitems: "center";
`;

export const Title = styled(Typography)`
  textdecoration: "none";
`;
