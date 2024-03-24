import { useMemo, useState } from 'react';
import styles from './App.module.scss';
import newsDataFromJson from '~/data/newslist.json';
import { NewsData } from '~/data/data.types';
import { NewsItemCard } from '~/components/NewsItemCard';
import { Paginator } from '~/components/Paginator';

const PAGE_ELEMENT_COUNT = 3;

export function App() {
  const [newsData] = useState<NewsData>(
    () => newsDataFromJson as unknown as NewsData,
  );

  const [page, setPage] = useState(1);

  const handlePaginate = (page: number) => {
    setPage(page);
  };

  const news = useMemo(() => {
    const start = (page - 1) * PAGE_ELEMENT_COUNT;
    const end = start + PAGE_ELEMENT_COUNT;
    return newsData.news.slice(start, end);
  }, [page, newsData]);

  return (
    <div className={styles.App}>
      <Paginator
        count={newsData.news.length}
        isLoading={false}
        currentPage={page}
        pageElementCount={PAGE_ELEMENT_COUNT}
        onPaginate={handlePaginate}
      />
      {news.map((newsItem, index) => (
        <NewsItemCard
          key={newsItem.id}
          newsItem={newsItem}
          num={index + 1 + (page - 1) * PAGE_ELEMENT_COUNT}
        />
      ))}
    </div>
  );
}
