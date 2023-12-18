import { useEffect, useContext, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { BiUserCircle } from "react-icons/bi";
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
import { useWishlist } from '../context/WislistContext';
import UserMenu from './UserMenu';

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

const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g


export default function TransitionsModal({ onClick = () => { } }) {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(!!getUser());
  const [isSelectPassword, setIsSelectPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });
  const handleBurgerClose = onClick

  const [loginFormData, setloginFormData] = useState({
    login_email: '',
    login_password: '',
  });

  const showToast = useContext(ToastContext);
  const { setIsLoggedInWishlist, setWishlist } = useWishlist();

  const limpiarFormulario = () => {
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false,
    });
    setloginFormData({
      login_email: '',
      login_password: '',
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
    //Contraseña con caracteres especiales y numeros y letras y minimo 7 caracteres y maximo 20 caracteres
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,20}$/;

    if (regex.test(formData.password)) {
      setIsSelectPassword(true)
    } else {
      setIsSelectPassword(false)
    }


  };

  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;
    setloginFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  useEffect(() => {
    setIsLoggedIn(!!getUser());
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await loginUser({
        identifier: loginFormData.login_email,
        password: loginFormData.login_password,
      });

      setIsLoggedIn(true);
      setIsLoggedInWishlist(true);
      handleClose();
      limpiarFormulario();
      showToast('Inicio de sesión exitoso', 'success');

    } catch (error) {
      console.error(error);
      setIsLoggedIn(false);
      setIsLoggedInWishlist(false);
      showToast('Error al iniciar sesión', 'error');
    }
  };

  const handleLogout = (e) => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setWishlist([]);
    setIsLoggedIn(false);
    setIsLoggedInWishlist(false);
    showToast('Cierre de sesión exitoso', 'success');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.acceptTerms) {
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      showToast('Las contraseñas no coinciden', 'error');
      return;
    }

    //Validar email con regex

    if (!regexEmail.test(formData.email)) {
      showToast('Email invalido', 'error');
      return;
    }

    try {
      await registerUser({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      })
      handleClose();
      limpiarFormulario();
      showToast('Registro exitoso', 'success');

    } catch (error) {
      console.error(error);
      showToast('Error al registrarse', 'error');
    }

  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const user = getUser();

  const handleTabChange = (e, tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      {isLoggedIn ? (
        <UserMenu user={user} handleLogout={handleLogout} />
      ) : (
        <Button variant="contained" color='primary' style={{ borderRadius: 10, textTransform: 'capitalize', fontWeight: 'bold' }} startIcon={<BiUserCircle />}
          onClick={() => {
            handleBurgerClose()
            handleOpen()
          }}>
          Iniciar Sesión
        </Button>
      )}

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
        <Fade in={open}>
          <Box sx={style}>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
              <Tabs value={activeTab} onChange={handleTabChange} centered>
                <Tab label="Iniciar Sesión" />
                <Tab label="Registrarse" />
              </Tabs>
            </Box>
            {activeTab === 0 && (
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
                  <Button color="primary" variant="contained" type='submit'>
                    Ingresar
                  </Button>
                </Stack>
              </form>
            )}
            {activeTab === 1 && (
              <form onSubmit={handleSubmit}>
                <Stack spacing={2} margin={2}>
                  <TextField
                    variant="outlined"
                    label="Nombre"
                    name="username"
                    inputProps={{ minLength: 5, maxLength: 20 }}
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                  <TextField
                    variant="outlined"
                    label="Email"
                    name="email"
                    type="email"
                    inputProps={{ maxLength: 50 }}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <TextField
                    {...(isSelectPassword ? { error: false } : { error: true })}
                    variant="outlined"
                    label="Contraseña"
                    name="password"
                    type="password"
                    inputProps={{ minLength: 7, maxLength: 20 }}
                    value={formData.password}
                    helperText={isSelectPassword ? "" : "La contraseña debe tener al menos 7 caracteres, una letra y un número"}
                    onChange={handleChange}
                    required
                  />
                  <TextField
                    variant="outlined"
                    label="Confirmar Contraseña"
                    name="confirmPassword"
                    type="password"
                    inputProps={{ minLength: 7, maxLength: 20 }}
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
                </Stack>
              </form>
            )}
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
