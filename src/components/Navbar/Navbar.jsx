import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
import PostAdd from '@material-ui/icons/PostAdd';
import ListAlt from '@material-ui/icons/ListAlt';
import Mail from '@material-ui/icons/Mail';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
// import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import './Navbar.css';
import { loginReducerPropTypes, notificationReducerPropTypes } from '../../propTypes/reducersPropTypes';
import { CerrarSesion } from '../../redux/actions/loginActions';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  appBarCustomStyle: {
    background: '#12A6E0',
  },
}));

const Navbar = ({ loginReducer = '', notificationReducer, CerrarSesion }) => {
  console.log(loginReducer, notificationReducer);
  const { username } = loginReducer;

  const { productosNotf, facturasNotf } = notificationReducer;

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleSignOut = () => CerrarSesion();

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleSignOut}>Cerrar sesión</MenuItem>
    </Menu>
  );

  const opcionesMenu = [
    (/* Lista productos */
      <NavLink to="/productos" className="navLinkElement" activeClassName="navElementActive">
        <Button aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={productosNotf} color="secondary">
            <ShoppingCart />
            <span>Productos</span>
          </Badge>
        </Button>
      </NavLink>
    ),
    (
      /* Lista facturas */
      <NavLink to="/facturas" className="navLinkElement" activeClassName="navElementActive">
        <Button aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={facturasNotf} color="secondary">
            <ListAlt />
            <span>Facturas</span>
          </Badge>
        </Button>
      </NavLink>
    ),
    (
      /* Crear factura */
      <NavLink to="/facturas" className="navLinkElement">
        <Button aria-label="show 4 new mails" color="inherit">
          <PostAdd />
          <span>Crear factura</span>
        </Button>
      </NavLink>
    ),
    (
      /* Promociones */
      <NavLink to="/promociones" className="navLinkElement">
        <Button aria-label="show 4 new mails" color="inherit">
          <Mail />
          <span>Promociones</span>
        </Button>
      </NavLink>
    ),
    (/* Descargar reportes */
      <NavLink to="/reportes" className="navLinkElement">
        <Button aria-label="show 4 new mails" color="inherit">
          <PictureAsPdfIcon />
          <span>Descargar reportes</span>
        </Button>
      </NavLink>
    ),
    (
      /* Username */
      <IconButton
        edge="end"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
      >
        <span>{username}</span>
        <Avatar style={{ marginLeft: 5 }}>AD</Avatar>
      </IconButton>
    ),
  ];

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {opcionesMenu.map((opcion) => <MenuItem key={opcion}>{opcion}</MenuItem>)}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBarCustomStyle}>
        <Toolbar>
          {/* // TODO Agregar por logo de app */}
          <Typography className={classes.title} variant="h6" noWrap>
            Facturación Web
          </Typography>

          <div className={classes.grow} />

          <div className={classes.sectionDesktop}>
            <div className={classes.mainMenuElements}>
              {opcionesMenu}
            </div>
          </div>

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

Navbar.propTypes = {
  loginReducer: loginReducerPropTypes.isRequired,
  notificationReducer: notificationReducerPropTypes.isRequired,
  CerrarSesion: PropTypes.func.isRequired,
};

// eslint-disable-next-line max-len
const mapStateToProps = ({ loginReducer, notificationReducer }) => ({ loginReducer, notificationReducer });
const mapDispatchToProps = { CerrarSesion };

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
