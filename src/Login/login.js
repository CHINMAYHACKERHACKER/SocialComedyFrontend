import React, { useRef, useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockIcon from '@mui/icons-material/Lock';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import Image1 from "../Image/84894079.webp";
import Image2 from "../Image/characters-from-friends-the-office-and-it-s-always-sunny-in-philadelphia.avif";
import Image3 from "../Image/how-to-watch-the-office-us_lead-900x506.webp";
import { Avatar } from '@mui/material';
import { useEffect } from "react";
import { styled } from '@mui/material/styles';
import Background from "../Image/BACKGROUND.jpg";
import Background1 from "../Image/BACKGROUNDIMAGE1.jpg";
import Background2 from "../Image/BACKGROUNDIMAGE2.avif";
import BackupIcon from '@mui/icons-material/Backup';
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css';
import StatusBar from '../MobileStatusBar/StatusBar';

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

function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

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

    return (
        <ThemeProvider theme={customTheme}>
            <Grid container component="main" sx={{ minHeight: '100vh' }}>
                <CssBaseline />
                <Grid item xs={12} sm={6} md={6} style={{ backgroundImage: `url(${Background2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    {/* <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination, Autoplay]}
                        className="mySwiper"
                        style={swiperContainerStyle}
                        autoplay={{ delay: 2000, speed: 1000 }}
                    >
                        <SwiperSlide style={swiperSlideStyle}>
                            <img src={Image1} alt="Nature 1" style={swiperSlideImageStyle} />
                        </SwiperSlide>
                        <SwiperSlide style={swiperSlideStyle}>
                            <img src={Image2} alt="Nature 2" style={swiperSlideImageStyle} />
                        </SwiperSlide>
                        <SwiperSlide style={swiperSlideStyle}>
                            <img src={Image3} alt="Nature 3" style={swiperSlideImageStyle} />
                        </SwiperSlide>
                    </Swiper> */}
                    <div style={{ marginTop: "-19%", marginLeft: "10%" }}>
                        <DeviceFrameset device="iPhone X" color="gold" zoom={0.7}>
                            <StatusBar />
                        </DeviceFrameset>
                    </div>
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
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                <div className="input-group input-group-lg">
                                    <span className="input-group-text" id="inputGroup-sizing-lg"><EmailIcon /></span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        aria-label="Sizing example input"
                                        aria-describedby="inputGroup-sizing-lg"
                                        style={inputStyle} // Apply the inline style here
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
                                    />
                                </div>
                                <FormControlLabel
                                    control={<Checkbox value="remember" />}
                                    label="Remember me"
                                    style={{ color: "#757374", fontFamily: "Verdana" }}
                                />
                                <Box sx={{ border: 1, height: 50, boxShadow: 1, borderRadius: 3, cursor: 'pointer', backgroundColor: "black", color: "white", fontFamily: "Verdana" }}>
                                    <Typography sx={{ marginLeft: 17, marginTop: 1.7 }}>Sign In</Typography>
                                </Box>
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
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default Login;
