import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import styles from './ArticleItem.module.scss';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Article } from '@/types/models/Article.type';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Skeleton from '@mui/material/Skeleton';
import Chip from '@mui/material/Chip';

export default function ArticleItem({ data }: { data?: Article }) {
  return (
    <Grid size={{ xs: 12, md: 6 }}>
      {data ? (
        <Link href={`${data?.url}`} target="_blank" rel="noopener" underline="none">
          <Card
            variant="outlined"
            tabIndex={0}
            className={styles.ArticleItemContainer}
            sx={{ height: '100%', borderRadius: '16px' }}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              image={data.imageUrl ?? '/images/no-image.jpg'}
              sx={{
                height: { sm: 'auto', md: '50%' },
                aspectRatio: { sm: '16 / 9', md: '' },
              }}
            />
            <CardContent className={styles.ArticleItemCardContent}>
              <Typography gutterBottom variant="h6" component="div">
                {data.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom className={styles.ArticleItemTypography}>
                {data.description}
              </Typography>
            </CardContent>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 2,
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 1,
                  alignItems: 'center',
                  maxWidth: { xs: '230px', md: '380px' },
                }}
              >
                {data.author && (
                  <Chip
                    avatar={
                      <Avatar alt={data.author} sx={{ width: 24, height: 24 }}>
                        {data.author[0].toUpperCase()}
                      </Avatar>
                    }
                    label={data.author}
                  />
                )}
              </Box>
              <Typography variant="caption">{data.publishedAt}</Typography>
            </Box>
          </Card>
        </Link>
      ) : (
        <Card
          variant="outlined"
          tabIndex={0}
          className={styles.ArticleItemContainer}
          sx={{ height: '100%', borderRadius: '16px' }}
        >
          <Skeleton
            variant="rectangular"
            sx={{ height: { xs: 'auto', md: '50%' }, aspectRatio: { xs: '16 / 9', md: '' } }}
          />
          <CardContent className={styles.ArticleItemCardContent}>
            <Box sx={{ pt: 0.5 }}>
              <Skeleton width="60%" />
            </Box>
            <Box sx={{ pt: 2 }}>
              <Skeleton />
              <Skeleton />
              <Skeleton width="80%" />
            </Box>
          </CardContent>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 2,
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 1,
                alignItems: 'center',
                maxWidth: '380px',
              }}
            >
              <Skeleton variant="circular" width={24} height={24} />
            </Box>
            <Skeleton width="70%" />
            <Skeleton width="20%" />
          </Box>
        </Card>
      )}
    </Grid>
  );
}
