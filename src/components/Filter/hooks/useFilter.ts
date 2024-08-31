import { SyntheticEvent, useMemo, useState } from 'react';
import { resetFilter, setFilter } from '@/store';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { FilterCategoryEnum, FilterSourceEnum } from '@/types';
import { Dayjs } from 'dayjs';
import { SelectChangeEvent } from '@mui/material/Select';

export default function useFilter() {
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState<FilterSourceEnum>();
  const [category, setCategory] = useState<FilterCategoryEnum>();
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  const { filter } = useAppSelector((state) => state.article);

  const hasFilter = useMemo(
    () => !!filter?.source || !!filter?.category || !!filter?.startDate || !!filter?.endDate,
    [filter?.source, filter?.category, filter?.startDate, filter?.endDate],
  );

  const dispatch = useAppDispatch();

  const handleChangeSource = (event: SelectChangeEvent<FilterSourceEnum>) => {
    setSource(event.target.value as FilterSourceEnum);
  };

  const handleChangeCategory = (event: SelectChangeEvent<FilterCategoryEnum>) => {
    setCategory(event.target.value as FilterCategoryEnum);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleReset = (_event: SyntheticEvent<unknown>, reason?: string) => {
    if (reason !== 'backdropClick') {
      dispatch(resetFilter());
      setSource(undefined);
      setCategory(undefined);
      setStartDate(null);
      setEndDate(null);
      handleClose();
    }
  };

  const handleFilter = (_event: SyntheticEvent<unknown>, reason?: string) => {
    if (reason !== 'backdropClick') {
      dispatch(setFilter({ source, category, startDate, endDate }));

      handleClose();
    }
  };

  return {
    open,
    hasFilter,
    handleClickOpen,
    handleClose,
    handleFilter,
    handleReset,
    source,
    handleChangeSource,
    category,
    handleChangeCategory,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
  };
}
