/**
 * @desc Dependencias
 */
import { styled, css } from "@mui/system";

/**
 * @desc Material design
 */
import { Paper as PaperMaterial } from "@mui/material";

export const Form = styled("form")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const Paper = styled(PaperMaterial)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 400px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
