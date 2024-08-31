import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from '@/theme';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { FilterCategoryEnum, FilterSourceEnum } from '@/types';
import { getDisplayFilterSourceOption, Modal } from '@/lib';
import { startCase } from 'lodash';
import Badge from '@mui/material/Badge';
import { Dayjs } from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import useFilter from './hooks/useFilter';

export default function Filter() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const {
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
  } = useFilter();

  return (
    <>
      <Tooltip title="Filter">
        <IconButton>
          <Badge color="success" variant="dot" invisible={!hasFilter}>
            <FilterAltIcon onClick={handleClickOpen} fontSize={isMobile ? 'small' : 'large'} />
          </Badge>
        </IconButton>
      </Tooltip>

      <Modal
        title="Filter"
        open={open}
        handleClose={handleClose}
        handleSubmit={handleFilter}
        handleReset={hasFilter ? handleReset : undefined}
      >
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column' }}>
          <FormControl sx={{ mb: 1, minWidth: 200 }}>
            <InputLabel htmlFor="filter-source">Source</InputLabel>
            <Select
              native
              value={source}
              onChange={handleChangeSource}
              input={<OutlinedInput label="Source" id="filter-source" />}
            >
              <option aria-label="None" value="" />
              {Object.values(FilterSourceEnum).map((item) => {
                return (
                  <option key={item} value={item}>
                    {getDisplayFilterSourceOption(item)}
                  </option>
                );
              })}
            </Select>
          </FormControl>
          <FormControl sx={{ mb: 1, minWidth: 200 }}>
            <InputLabel htmlFor="filter-category">Category</InputLabel>
            <Select
              native
              value={category}
              onChange={handleChangeCategory}
              input={<OutlinedInput label="Category" id="filter-category" />}
            >
              <option aria-label="None" value="" />
              {Object.values(FilterCategoryEnum).map((item) => {
                return (
                  <option key={item} value={item}>
                    {startCase(item)}
                  </option>
                );
              })}
            </Select>
          </FormControl>
          <FormControl sx={{ mb: 1, minWidth: 200 }}>
            <DatePicker label="Start date" value={startDate} onChange={(newValue) => setStartDate(newValue as Dayjs)} />
          </FormControl>
          <FormControl sx={{ mb: 1, minWidth: 200 }}>
            <DatePicker label="End date" value={endDate} onChange={(newValue) => setEndDate(newValue as Dayjs)} />
          </FormControl>
        </Box>
      </Modal>
    </>
  );
}
