import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import styles from './AppBar.module.scss';
import { Filter } from '../Filter';
import { Customization } from '../Customization';

export default function AppBar() {
  return (
    <MuiAppBar className={styles.AppBar}>
      <Container>
        <Toolbar variant="dense" className={styles.ToolBar}>
          <Typography variant="h5">News</Typography>
          <Box>
            <Filter />
            <Customization />
          </Box>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}
