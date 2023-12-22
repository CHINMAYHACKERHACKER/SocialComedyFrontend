import React, { useRef, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockIcon from '@mui/icons-material/Lock';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Avatar } from '@mui/material';
import { useEffect } from "react";
import { styled } from '@mui/material/styles';
import Background2 from "../Image/BACKGROUNDIMAGE2.avif";
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css';
import StatusBar from '../MobileStatusBar/StatusBar';
import Modal from '@mui/material/Modal';
import axios from "axios";
import cookie from 'react-cookies';
import FacebookLogin from 'react-facebook-login';
import { jwtDecode } from "jwt-decode";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';


const customTheme = createTheme({
    palette: {
        primary: {
            main: '#1976D2', // Professional blue color
        },
        secondary: {
            main: '#4CAF50', // Professional green color
        },
        background: {
            default: '#F0F2F5', // Light gray background
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif', // Use a professional font
    },
});
const StyledAvatar = styled(Avatar)({
    width: '150px', // Adjust the width and height as needed
    height: '150px',
    backgroundColor: 'yellow', // You can change the background color as needed
});
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    background: ' linear-gradient(to right,#D536F6,#B70D4C,#2D1179)',
    border: '0px',
    boxShadow: 24,
    p: 5,
    textAlign: "center",
    color: "white",
    borderRadius: "10px",
    fontWeight: "bold",
};

function Login() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [DataBoolean, setDataBoolean] = useState(false);
    const [EmailNotFoundBoolean, setEmailNotFoundBoolean] = useState(false);
    const [InvalidPasswordBoolean, setInvalidPasswordBoolean] = useState(false);
    const [open, setOpen] = useState(false);
    const onCloseModal = () => setOpen(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (Email == "" || Password == "") {
            setDataBoolean(true);
            setOpen(true);
        }
        else {
            axios.post("http://localhost:3001/api/login", {
                Email: Email,
                Password: Password
            }).then((res) => {
                cookie.save('Token', res.data, { path: '/', secure: true });
                axios.post("http://localhost:3001/api/verify", {
                    Name: "123"  // Request data
                }, {
                    headers: {
                        'Authorization': `Bearer ${res.data}`,  // Request headers
                    }
                }).then(response => {
                    // Handle the response here
                    console.log(response.data);
                }).catch(error => {
                    // Handle errors here
                    if (error.response.status === 400) {
                        console.log("Pls Try Again To Login");
                    }
                });
            }).catch(error => {
                // Handle the error here
                if (error.response.status === 400) {
                    // console.log("Email Not Found");
                    setEmailNotFoundBoolean(true);
                    setOpen(true);
                }
                else if (error.response.status === 401) {
                    // console.log("Invalid Password");
                    setInvalidPasswordBoolean(true);
                    setOpen(true);
                }
                else {
                    console.log("No Error");
                }
            })
        }
    }

    const classes = StyledAvatar;
    const [isWinking, setIsWinking] = useState(false);

    // Use useEffect to toggle the wink every 2 seconds
    useEffect(() => {
        const winkInterval = setInterval(() => {
            setIsWinking((prevIsWinking) => !prevIsWinking);
        }, 2000);

        // Cleanup the interval when the component unmounts
        return () => clearInterval(winkInterval);
    }, []);

    const containerStyle = {
        maxWidth: '600px', // Slightly reduced container width
        margin: '0 auto',
        backgroundColor: '#FFF9FB',
        padding: '30px', // Increased padding for a spacious feel
        borderRadius: '10px',
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)', // Slightly increased shadow
    };

    // const inputStyle = {
    //     backgroundColor: '#F5F5F5', // Light gray input background
    //     marginBottom: '16px',
    // };

    const swiperContainerStyle = {
        width: '100%',
        paddingTop: '150px', // Reduced top padding for balance
        paddingBottom: '30px',
    };

    const swiperSlideStyle = {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '300px',
        height: '300px',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease', // Added subtle hover effect
        cursor: 'pointer', // Cursor changes on hover
        '&:hover': {
            transform: 'scale(1.05)', // Slightly scale up on hover
        },
    };

    const swiperSlideImageStyle = {
        display: 'block',
        width: '300px',
        height: '300px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
    };

    const inputStyle = {
        outline: 'none',
        boxShadow: 'none',
        width: "80%",
        height: "60px",
        backgroundColor: "#E7F0F9"
    };
    const inputStylee = {
        outline: 'none',
        boxShadow: 'none',
        width: "80%",
        height: "60px",
        backgroundColor: "#E7F0F9"
    };

    const responseFacebook = (response) => {
        console.log("ResponseJson", response);
    }

    return (
        <>
            {
                DataBoolean ? (
                    <>
                        <Modal
                            open={open}
                            onClose={onCloseModal}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            sx={{ boxShadow: 10 }}
                        >
                            <Box sx={style}>
                                <Typography>All Fields Are Required</Typography>
                            </Box>
                        </Modal>
                    </>
                ) : null
            }
            {
                EmailNotFoundBoolean ? (
                    <>
                        <Modal
                            open={open}
                            onClose={onCloseModal}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            sx={{ boxShadow: 10 }}
                        >
                            <Box sx={style}>
                                <Typography>Email not found. Double-check or sign up</Typography>
                            </Box>
                        </Modal>
                    </>
                ) : null
            }
            {
                InvalidPasswordBoolean ? (
                    <>
                        <Modal
                            open={open}
                            onClose={onCloseModal}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            sx={{ boxShadow: 10 }}
                        >
                            <Box sx={style}>
                                <Typography>Password Incorrect</Typography>
                            </Box>
                        </Modal>
                    </>
                ) : null
            }
            <ThemeProvider theme={customTheme}>
                <Grid container component="main" sx={{ minHeight: '100vh' }}>
                    <CssBaseline />
                    <Grid item xs={12} sm={6} md={6} style={{ backgroundImage: `url(${Background2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <BrowserView>
                            <div style={{ marginTop: "-15%", marginLeft: "10%" }}>
                                <DeviceFrameset device="iPhone X" color="gold" zoom={0.7}>
                                    <StatusBar />
                                </DeviceFrameset>
                            </div>
                        </BrowserView>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} component={Paper} elevation={6} square><br />
                        <Box sx={containerStyle}>
                            <Box
                                sx={{
                                    my: 8,
                                    mx: 4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <div class="card-header"> <h4 class="card-title" style={{ fontWeight: "bold", fontSize: "27px", fontFamily: "Arial Black" }}>Sign In to your Account</h4></div>
                                <p>Welcome back! please enter your detail</p>
                                {/* <Avatar className={classes.avatar} sx={{ width: 100, height: 100, backgroundColor: "white" }}>
                                <span style={{ fontSize: "70px" }}>{isWinking ? '👦' : ' 👧'}</span>
                            </Avatar> */}
                                {/* <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
                                Sign Up
                            </Typography> */}
                                <Box component="form" noValidate sx={{ mt: 1 }}>
                                    <div className="input-group input-group-lg">
                                        <span className="input-group-text" id="inputGroup-sizing-lg"><EmailIcon /></span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-lg"
                                            style={inputStyle} // Apply the inline style here
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div><br />
                                    <div className="input-group input-group-lg">
                                        <span className="input-group-text" id="inputGroup-sizing-lg"><LockIcon /></span>
                                        <input
                                            type="password"
                                            className="form-control"
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-lg"
                                            style={inputStylee} // Apply the inline style here
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    {/* <FormControlLabel
                                        control={<Checkbox value="remember" />}
                                        label="Remember me"
                                        style={{ color: "#757374", fontFamily: "Verdana" }}
                                    /> */}
                                    <BrowserView>
                                        <Box sx={{ border: 1, height: 50, boxShadow: 1, borderRadius: 3, cursor: 'pointer', backgroundColor: "black", marginTop: 3, color: "white", fontFamily: "Verdana" }} onClick={handleSubmit}>
                                            <Typography sx={{ marginLeft: 19, marginTop: 1.7 }}>Sign In</Typography>
                                        </Box>
                                    </BrowserView>
                                    <MobileView>
                                        <Box sx={{ border: 1, height: 50, boxShadow: 1, borderRadius: 3, cursor: 'pointer', backgroundColor: "black", marginTop: 3, color: "white", fontFamily: "Verdana" }} onClick={handleSubmit}>
                                            <Typography sx={{ marginLeft: 12, marginTop: 1.7 }}>Sign In</Typography>
                                        </Box>
                                    </MobileView>
                                    <BrowserView>
                                        <Grid container>
                                            <Grid item xs>
                                                <Link href="#" variant="body6" style={{ color: "#AD2091", textDecoration: "none", fontFamily: "Verdana", fontSize: "13px" }}>
                                                    Forgot password?
                                                </Link>
                                            </Grid>
                                            <Grid item>
                                                <Link href="/sign" variant="body6" style={{ color: "#AD2091", textDecoration: "none", fontFamily: "Verdana", fontSize: "13px" }}>
                                                    {"Not Have an account? Sign Up"}
                                                </Link>
                                            </Grid>
                                        </Grid>
                                    </BrowserView>
                                    <MobileView>
                                        <Grid item xs>
                                            <Link href="#" variant="body6" style={{ color: "#AD2091", textDecoration: "none", fontFamily: "Verdana", fontSize: "13px" }}>
                                                Forgot password?
                                            </Link>
                                        </Grid>
                                        <Grid item>
                                            <Link href="/sign" variant="body6" style={{ color: "#AD2091", textDecoration: "none", fontFamily: "Verdana", fontSize: "13px" }}>
                                                {"Not Have an account? Sign Up"}
                                            </Link>
                                        </Grid>
                                    </MobileView>
                                </Box>
                                <p style={{ fontWeight: "bold", fontFamily: "Arial Black", textAlign: "center", marginLeft: "-5%", marginTop: "5%" }}>or</p>
                            </Box>
                            <BrowserView>
                                <div class="container" style={{ marginTop: "-10%", alignContent: "center", alignSelf: "center" }}>
                                    <div class="row">
                                        <div class="col-sm">
                                            <FacebookLogin
                                                appId="665719312331748"
                                                autoLoad={true}
                                                fields="name,email,picture"
                                                callback={responseFacebook}
                                                icon="fa-facebook"
                                                size='small'
                                            />
                                        </div>
                                        <div class="col-sm">
                                            <Box sx={{ boxShadow: 2, width: 233, height: 44, marginTop: "-2%" }}>
                                                <GoogleOAuthProvider clientId="957334371660-it6fobonomlg5emab9mi2e1nr1j0jbnr.apps.googleusercontent.com">
                                                    <GoogleLogin
                                                        onSuccess={credentialResponse => {
                                                            // console.log(credentialResponse);
                                                            console.log("DecodedGoogle", jwtDecode(credentialResponse.credential));
                                                        }}
                                                        onError={() => {
                                                            console.log('Login Failed');
                                                        }}
                                                        size='large'
                                                    />
                                                </GoogleOAuthProvider>
                                            </Box>
                                        </div>
                                    </div>
                                </div>
                            </BrowserView>
                            <MobileView>
                                <div style={{ marginLeft: "13%", marginTop: "-17%" }}>
                                <Box sx={{ boxShadow: 5, width: 233, height: 44}}>
                                    <GoogleOAuthProvider clientId="957334371660-it6fobonomlg5emab9mi2e1nr1j0jbnr.apps.googleusercontent.com">
                                        <GoogleLogin
                                            onSuccess={credentialResponse => {
                                                // console.log(credentialResponse);
                                                console.log("DecodedGoogle", jwtDecode(credentialResponse.credential));
                                            }}
                                            onError={() => {
                                                console.log('Login Failed');
                                            }}
                                            size='large'
                                        />
                                    </GoogleOAuthProvider>
                                    </Box>
                                </div>
                            </MobileView>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </>
    );
}
export default Login;
