import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledButton = styled(Button)`
  background-color: white;

  &:hover {
    background-color: '#76E82A';
  }
`;

export const ErrorNotification = styled(Typography)`
  color: red;
`;
