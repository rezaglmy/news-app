import Grid from '@mui/material/Grid2';
import { ArticleItem } from '../ArticleItem';
import useArticles from './hooks/useArticles';
import { Article } from '@/types';
import { NoData } from '../NoData';

export default function Articles() {
  const { articles, isLoading } = useArticles();

  if (isLoading === false && !articles?.length) {
    return <NoData />;
  }

  return (
    <Grid container spacing={2} columns={12}>
      {(isLoading ? Array.from(new Array(4)) : articles).map((item, index) => (
        <ArticleItem key={index} data={!isLoading ? (item as Article) : undefined} />
      ))}
    </Grid>
  );
}
