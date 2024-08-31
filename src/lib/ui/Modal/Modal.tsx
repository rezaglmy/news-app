import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { PropsWithChildren, SyntheticEvent } from 'react';
import Box from '@mui/material/Box';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

type Props = PropsWithChildren & {
  title: string;
  open: boolean;
  handleClose: () => void;
  handleSubmit: (event: SyntheticEvent<unknown>, reason?: string) => void;
  handleReset?: (event: SyntheticEvent<unknown>, reason?: string) => void;
};

export default function Modal({ title, open, handleClose, handleSubmit, handleReset, children }: Props) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={(theme) => ({
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>{children}</DialogContent>
      <DialogActions sx={{ px: '24px', pb: '16px', display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          {!!handleReset && (
            <Button variant="outlined" startIcon={<RestartAltIcon />} color="error" onClick={handleReset}>
              Reset
            </Button>
          )}
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit}>
            Ok
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
}
