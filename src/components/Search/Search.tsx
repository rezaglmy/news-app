import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import useSearch from './hooks/useSearch';

export default function Search() {
  const { handleChangeSearch } = useSearch();

  return (
    <FormControl sx={{ width: '100%', py: { md: 2 }, display: 'flex', alignItems: 'center' }} variant="outlined">
      <OutlinedInput
        size="small"
        id="search"
        placeholder="Search…"
        fullWidth
        sx={{ flexGrow: 1, width: { xs: '100%', md: '500px' }, height: '50px' }}
        startAdornment={
          <InputAdornment position="start" sx={{ color: 'text.primary' }}>
            <SearchRoundedIcon fontSize="small" />
          </InputAdornment>
        }
        inputProps={{
          'aria-label': 'search',
        }}
        onChange={handleChangeSearch}
      />
    </FormControl>
  );
}
