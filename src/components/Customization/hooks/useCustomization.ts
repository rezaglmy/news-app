import { SyntheticEvent, useMemo, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { SelectChangeEvent } from '@mui/material/Select';

export default function useCustomization() {
  const [open, setOpen] = useState(false);

  const [customizedSources, setCustomizedSources] = useLocalStorage<string[]>('customized-sources', []);
  const [customizedCategories, setCustomizedCategories] = useLocalStorage<string[]>('customized-categories', []);

  const [sources, setSources] = useState<string[]>(customizedSources);
  const [categories, setCategories] = useState<string[]>(customizedCategories);

  const hasCustomization = useMemo(
    () => customizedSources.length || customizedCategories.length,
    [customizedSources.length, customizedCategories.length],
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleReset = (_event: SyntheticEvent<unknown>, reason?: string) => {
    if (reason !== 'backdropClick') {
      setCategories([]);
      setSources([]);
      setCustomizedCategories([]);
      setCustomizedSources([]);
      handleClose();
    }
  };

  const handleSourcesChange = (event: SelectChangeEvent<typeof customizedSources>) => {
    const {
      target: { value: value },
    } = event;
    setSources(typeof value === 'string' ? value.split(',') : value);
  };

  const handleCategoriesChange = (event: SelectChangeEvent<typeof customizedCategories>) => {
    const {
      target: { value: value },
    } = event;
    setCategories(typeof value === 'string' ? value.split(',') : value);
  };

  const handleFilter = (_event: SyntheticEvent<unknown>, reason?: string) => {
    if (reason !== 'backdropClick') {
      setCustomizedSources(sources);
      setCustomizedCategories(categories);
      handleClose();
    }
  };

  return {
    open,
    hasCustomization,
    handleClickOpen,
    handleClose,
    handleFilter,
    handleReset,
    sources,
    handleSourcesChange,
    categories,
    handleCategoriesChange,
  };
}
