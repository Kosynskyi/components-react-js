import { Box } from '@mui/material';
import Form from './components/Form';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Form />
    </Box>
  );
}

export default App;
