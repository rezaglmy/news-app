import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';

type Props = {
  id: string;
  label: string;
  value: string[];
  options: { label: string; value: string }[];
  handleChange: (event: SelectChangeEvent<string[]>) => void;
};

export default function MultipleSelect({ id, label, value, options, handleChange }: Props) {
  return (
    <FormControl sx={{ mb: 2, width: 300 }}>
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <Select
        labelId={`${id}-label`}
        id={id}
        multiple
        value={value}
        onChange={handleChange}
        input={<OutlinedInput id={`${id}-chip`} label={label} />}
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={options.find((item) => item.value === value)?.label} />
            ))}
          </Box>
        )}
      >
        {options.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
