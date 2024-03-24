import styles from './NewsItemCard.module.scss';
import { NewsItem } from '~/data/data.types';

interface NewsItemCardProps {
  newsItem: NewsItem;
  num: number;
}

export function NewsItemCard({ newsItem, num }: NewsItemCardProps) {
  return (
    <div className={styles.NewsItemCard}>
      <div className={styles.title}>
        {num}.{newsItem.title}
      </div>
      <div>{newsItem.content}</div>
      <div>{newsItem.author}</div>
      <div>{newsItem.imageUrl}</div>
    </div>
  );
}
