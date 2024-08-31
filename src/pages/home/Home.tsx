import Container from '@mui/material/Container';
import { Articles } from '../../components/Articles';
import Box from '@mui/material/Box';
import { Search } from '@/components/Search';

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
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Search />
        <Articles />
      </Box>
    </Container>
  );
}
