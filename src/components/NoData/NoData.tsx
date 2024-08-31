import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import styles from './NoData.module.scss';

export default function NoData() {
  return (
    <Box className={styles.container}>
      <Box component="img" alt="404" src="/images/no-data.svg" />
      <Typography variant="h4" className={styles.title}>
        No result found!
      </Typography>
      <Typography variant="body1">Please change you filter or customization!</Typography>
    </Box>
  );
}
