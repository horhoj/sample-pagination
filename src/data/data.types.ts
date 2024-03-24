export interface NewsData {
  news: NewsItem[];
}

export interface NewsItem {
  id: number;
  title: string;
  description: string;
  content: string;
  author: string;
  publishedAt: string;
  imageUrl: string;
  category: string;
}
