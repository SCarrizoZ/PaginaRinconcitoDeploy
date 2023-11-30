import { useContext, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { BiUserCircle } from "react-icons/bi"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { loginUser, registerUser } from '../api/ManageUser.api';
import { getUser } from '../utils';
import { ToastContext } from '../context/ToastProvider';

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



export default function TransitionsModal() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(!!getUser());
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });

  const [loginFormData, setloginFormData] = useState({
    login_email: '',
    login_password: '',
  });

  const showToast = useContext(ToastContext);



  const limpiarFormulario = () => {
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false,
    })
    setloginFormData({
      login_email: '',
      login_password: '',
    })
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;
    setloginFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await loginUser({
        identifier: loginFormData.login_email,
        password: loginFormData.login_password,
      });

      setIsLoggedIn(true);
      handleClose();
      limpiarFormulario();
      showToast('Inicio de sesión exitoso', 'success');

    } catch (error) {
      // Manejar errores de inicio de sesión
      console.error(error);
      setIsLoggedIn(false); // Asegurar que se establezca en false en caso de error
      showToast('Error al iniciar sesión', 'error');
    }
  }

  const handleLogout = (e) => {
    localStorage.clear();
    setIsLoggedIn(false);
    showToast('Cierre de sesión exitoso', 'success');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.acceptTerms) {
      // Agregar lógica para manejar el caso en que no se aceptan los términos.
      return;
    }

    // Llamar a la función registerUser con los datos del formulario.
    registerUser({
      username: formData.username,
      email: formData.email,
      password: formData.password,
    })

    // Cerrar el modal.
    handleClose()
    limpiarFormulario()
    showToast('Registro exitoso', 'success');
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const user = getUser();

  const handleTabChange = (e, tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      {isLoggedIn ?
        (
          <Button variant="contained" color='primary' style={{ borderRadius: 10 }} startIcon={<BiUserCircle></BiUserCircle>} onClick={handleLogout}>Bienvenido {user?.username}<br />Cerrar Sesión</Button>
        ) :
        (
          <Button variant="contained" color='primary' style={{ borderRadius: 10 }} startIcon={<BiUserCircle></BiUserCircle>} onClick={handleOpen}>Iniciar Sesión</Button>
        )
      }
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
              <Tabs value={activeTab} onChange={handleTabChange} centered>
                <Tab label="Iniciar Sesión" />
                <Tab label="Registrarse" />
              </Tabs>
            </Box>
            {activeTab === 0 && (
              <>
                <form onSubmit={handleLogin}>
                  <Stack spacing={2} margin={2}>
                    <TextField
                      variant="outlined"
                      label="Email"
                      name="login_email"
                      value={loginFormData.email}
                      onChange={handleLoginChange}
                      required
                    />
                    <TextField
                      variant="outlined"
                      label="Contraseña"
                      name="login_password"
                      type="password"
                      value={loginFormData.password}
                      onChange={handleLoginChange}
                      required
                    />
                    <Button color="primary" variant="contained" type='submit'>Ingresar</Button>
                  </Stack>
                </form>
              </>
            )}
            {activeTab === 1 && (
              <>
                <form onSubmit={handleSubmit}>
                  <Stack spacing={2} margin={2}>
                    {activeTab === 1 && (
                      <>
                        <TextField
                          variant="outlined"
                          label="Nombre"
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                          required
                        />
                        <TextField
                          variant="outlined"
                          label="Email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        <TextField
                          variant="outlined"
                          label="Contraseña"
                          name="password"
                          type="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                        <TextField
                          variant="outlined"
                          label="Confirmar Contraseña"
                          name="confirmPassword"
                          type="password"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          required
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="acceptTerms"
                              checked={formData.acceptTerms}
                              onChange={handleChange}
                              color="primary"
                              required
                            />
                          }
                          label="Acepto Términos y Condiciones"
                        />
                        <Button color="primary" variant="contained" type="submit">
                          Registrarse
                        </Button>
                      </>
                    )}
                  </Stack>
                </form>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
