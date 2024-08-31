import { useAppDispatch } from '@/hooks';
import { setSearchText } from '@/store';
import { debounce } from 'lodash';

export default function useSearch() {
  const dispatch = useAppDispatch();
  const debouncedSearch = debounce((value: string) => {
    dispatch(setSearchText(value));
  }, 1000);

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  const handleRemoveSearch = () => {
    dispatch(setSearchText(''));
  };

  return {
    handleChangeSearch,
    handleRemoveSearch,
  };
}
