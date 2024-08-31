import Box from '@mui/material/Box';
import TuneIcon from '@mui/icons-material/Tune';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from '@/theme';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { FilterCategoryEnum, FilterSourceEnum } from '@/types';
import { getDisplayFilterSourceOption, Modal } from '@/lib';
import MultipleSelect from '@/lib/ui/MultipleSelect/MultipleSelect';
import { startCase } from 'lodash';
import Badge from '@mui/material/Badge';
import useCustomization from './hooks/useCustomization';

export default function Customization() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const {
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
  } = useCustomization();

  return (
    <>
      <Tooltip title="Customize Your Search">
        <IconButton>
          <Badge color="success" variant="dot" invisible={!hasCustomization}>
            <TuneIcon onClick={handleClickOpen} fontSize={isMobile ? 'small' : 'large'} />
          </Badge>
        </IconButton>
      </Tooltip>

      <Modal
        title="Customize Your Search"
        open={open}
        handleClose={handleClose}
        handleSubmit={handleFilter}
        handleReset={hasCustomization ? handleReset : undefined}
      >
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column' }}>
          <MultipleSelect
            id="customized-sources"
            label="Sources"
            value={sources}
            options={Object.values(FilterSourceEnum).map((item) => ({
              label: getDisplayFilterSourceOption(item),
              value: item,
            }))}
            handleChange={handleSourcesChange}
          />
          <MultipleSelect
            id="customized-categories"
            label="Categories"
            value={categories}
            options={Object.values(FilterCategoryEnum)
              .filter((item) => item !== FilterCategoryEnum.ALL)
              .map((item) => ({
                label: startCase(item),
                value: item,
              }))}
            handleChange={handleCategoriesChange}
          />
        </Box>
      </Modal>
    </>
  );
}
