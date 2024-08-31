import { Dayjs } from 'dayjs';

export type GetNewsApiQuery = {
  searchText?: string;
  category?: string;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  customizedCategories?: string[];
  customizedSources?: string[];
};
