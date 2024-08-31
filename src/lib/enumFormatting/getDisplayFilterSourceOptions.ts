import { FilterSourceEnum } from '@/types';

export const getDisplayFilterSourceOption = (value?: FilterSourceEnum): string => {
  switch (value) {
    case FilterSourceEnum.GUARDIAN:
      return 'The Guardian';
    case FilterSourceEnum.NEWS_API:
      return 'News Api';

    default:
      return '';
  }
};
