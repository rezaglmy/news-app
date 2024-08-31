import { Article, FilterCategoryEnum, FilterSourceEnum } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Dayjs } from 'dayjs';

type FilterType = {
  source?: FilterSourceEnum;
  category?: FilterCategoryEnum;
  startDate?: Dayjs | null;
  endDate?: Dayjs | null;
};

type ArticleState = {
  articles: Article[];
  searchText: string;
  filter?: FilterType;
};

const initialState: ArticleState = { searchText: '', articles: [] };

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    setArticles: (state, action: PayloadAction<{ articles: Article[] }>) => {
      const { articles } = action.payload;

      state.articles = articles;
    },
    setFilter: (
      state,
      action: PayloadAction<{
        source?: FilterSourceEnum;
        category?: FilterCategoryEnum;
        startDate: Dayjs | null;
        endDate: Dayjs | null;
      }>,
    ) => {
      const { source, category, startDate, endDate } = action.payload;

      if (source) state.filter = { ...state.filter, source };
      if (category) state.filter = { ...state.filter, category };
      if (startDate) state.filter = { ...state.filter, startDate };
      if (endDate) state.filter = { ...state.filter, endDate };
    },
    resetFilter: (state) => {
      state.filter = undefined;
    },
    resetArticleState: (state) => {
      state.searchText = '';
      state.articles = [];
      state.filter = undefined;
    },
  },
});

export const { setSearchText, setArticles, setFilter, resetFilter, resetArticleState } = articleSlice.actions;

export default articleSlice.reducer;
