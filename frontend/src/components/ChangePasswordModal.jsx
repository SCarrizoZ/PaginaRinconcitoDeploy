import { useContext, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { changePassword } from '../api/ManageUser.api';
import { ToastContext } from '../context/ToastProvider';
import { useWishlist } from '../context/WislistContext';
import { Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ChangePasswordModal({ open, handleClose }) {

  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const showToast = useContext(ToastContext);
  const { setIsLoggedInWishlist, setWishlist } = useWishlist();

  const limpiarFormulario = () => {
    setFormData({
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };


  const handleLogout = (e) => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setWishlist([]);
    setIsLoggedInWishlist(false);
    showToast('Inicie sesión nuevamente', 'info');
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      showToast('Las contraseñas no coinciden', 'error');
      return;
    }
    try {
      await changePassword({
        oldPassword: formData.oldPassword,
        newPassword: formData.newPassword,
        confirmPassword: formData.confirmPassword,
      })
      handleClose();
      limpiarFormulario();
      showToast('Cambio de contraseña exitoso', 'success');
    } catch (error) {
      console.error(error);
      showToast('Error al cambiar la contraseña', 'error');
    }
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Box sx={style}>
        <Fade in={open}>
          <form onSubmit={handleChangePassword}>
            <Stack spacing={2} margin={2}>
              <Typography variant="h6" gutterBottom>
                Cambiar Contraseña
              </Typography>
              <TextField
                variant="outlined"
                label="Contraseña Actual"
                name="oldPassword"
                type="password"
                value={formData.oldPassword}
                onChange={handleChange}
                required
              />
              <TextField
                variant="outlined"
                label="Nueva Contraseña"
                name="newPassword"
                type="password"
                value={formData.newPassword}
                inputProps={{ minLength: 7, maxLength: 20 }}
                onChange={handleChange}
                required
              />
              <TextField
                variant="outlined"
                label="Confirmar Contraseña"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                inputProps={{ minLength: 7, maxLength: 20 }}
                onChange={handleChange}
                required
              />
              <Button color="primary" variant="contained" type='submit'>
                Ingresar
              </Button>
            </Stack>
          </form>
        </Fade>
      </Box>
    </Modal>
  );
}
