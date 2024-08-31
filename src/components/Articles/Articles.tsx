import Grid from '@mui/material/Grid2';
import { ArticleItem } from '../ArticleItem';
import useArticles from './hooks/useArticles';
import Box from '@mui/material/Box';
import { Search } from '../Search';
import { Article } from '@/types';

export default function Articles() {
  const { articles, isLoading } = useArticles();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Search />

      <Grid container spacing={2} columns={12}>
        {(isLoading ? Array.from(new Array(4)) : articles).map((item, index) => (
          <ArticleItem key={index} data={!isLoading ? (item as Article) : undefined} />
        ))}
      </Grid>
    </Box>
  );
}
