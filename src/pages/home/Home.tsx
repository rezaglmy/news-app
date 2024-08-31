import Container from '@mui/material/Container';
import { Articles } from '../../components/Articles';

export default function Home() {
  return (
    <Container
      maxWidth="xl"
      component="main"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mt: { xs: 10, md: 12 },
        mb: 16,
        gap: 4,
        p: 0,
      }}
    >
      <Articles />
    </Container>
  );
}
