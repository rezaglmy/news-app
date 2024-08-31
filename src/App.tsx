import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Container from '@mui/material/Container';
import { Home } from './pages';
import { AppBar } from './components';

export default function App() {
  return (
    <Container sx={{ p: { sm: 0 } }}>
      <AppBar />
      <Home />
    </Container>
  );
}
