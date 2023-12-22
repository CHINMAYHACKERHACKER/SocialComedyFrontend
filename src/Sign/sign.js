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
import { Avatar, TextField } from '@mui/material';
import { useEffect } from "react";
import { styled } from '@mui/material/styles';
import Background2 from "../Image/BACKGROUNDIMAGE2.avif";
import axios from "axios";
import 'react-responsive-modal/styles.css';
import Modal from '@mui/material/Modal';
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css';
import StatusBar from '../MobileStatusBar/StatusBar';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

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

function Sign() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Image, setImage] = useState("");
    const [DataBoolean, setDataBoolean] = useState(false);
    const [isWinking, setIsWinking] = useState(false);
    const [open, setOpen] = useState(false);
    const [SignBoolean, setSignBoolean] = useState(false);
    const [EmailBoolean, setEmailBoolean] = useState(false);
    const onCloseModal = () => setOpen(false);
    const HandleCloseModal = () => setSignBoolean(false);
    const HandleClosemodal = () => setEmailBoolean(false);



    const classes = StyledAvatar;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Email == "" && Password == "" || Email == "" || Password == "") {
            setDataBoolean(true);
            setOpen(true);
        }
        else {
            // Create a FormData object
            const formData = new FormData();

            // Append email and password to the FormData object
            formData.append("Email", Email);
            formData.append("Password", Password);

            // Append each image to the FormData object
            for (let i = 0; i < Image.length; i++) {
                formData.append("file", Image[i]);
            }
            try {
                // Send the FormData to the backend using axios
                const response = await axios.post("http://localhost:3001/api/sign", formData);
                if (response.data == "Registration Sucessfull") {
                    setSignBoolean(true);
                }
                else if (response.data == "Email Already Exists") {
                    setEmailBoolean(true);
                }
                // Handle the response from the backend here
                console.log("Response from server:", response.data);
                console.log("server:", response);
            } catch (error) {
                console.log("Error", error);
                // Handle any errors here
                console.error("Error:", error);
            }
        }
    }

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
                SignBoolean ? (
                    <>
                        <Modal
                            open={SignBoolean}
                            onClose={HandleCloseModal}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            sx={{ boxShadow: 10 }}
                        >
                            <Box sx={style}>
                                <Typography>Registeration Sucessfull Pls Login</Typography>
                            </Box>
                        </Modal>
                    </>
                ) : null
            }
            {
                EmailBoolean ? (
                    <>
                        <Modal
                            open={EmailBoolean}
                            onClose={HandleClosemodal}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            sx={{ boxShadow: 10 }}
                        >
                            <Box sx={style}>
                                <Typography>Email Already Exists</Typography>
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
                                <div class="card-header"> <h4 class="card-title" style={{ fontWeight: "bold", fontSize: "27px", fontFamily: "Arial Black" }}>Sign Up for an Account</h4></div>
                                <p>Share, Watch, and Enjoy</p>
                                {/* <Avatar className={classes.avatar} sx={{ width: 100, height: 100, backgroundColor: "white" }}>
                                <span style={{ fontSize: "70px" }}>{isWinking ? '👦' : ' 👧'}</span>
                            </Avatar> */}
                                {/* <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
                                Sign Up
                            </Typography> */}
                                <Box sx={{ mt: 1 }}>
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
                                    </div><br />
                                    {/* <Typography style={{ color: "#757374", fontFamily: "Verdana",marginLeft:"25%"}}>Upload Your Image</Typography> */}
                                    {/* <Box sx={{ border: 0, height: 60, boxShadow: 0, borderRadius: 3, cursor: 'pointer', backgroundColor: "white", color: "black", fontFamily: "Verdana" }}>
                                        <input type='file' style={{ marginTop: "3%", marginLeft: "17%", opacity: "0.9", color: "green" }} aria-label='Upload Your Image' onChange={(e) => setImage(e.target.files)} />
                                        <BackupIcon sx={{ marginTop: -7, marginLeft: 2 }} />
                                    </Box> */}
                                    <BrowserView>
                                        <Box sx={{ border: 1, height: 50, boxShadow: 1, borderRadius: 3, cursor: 'pointer', backgroundColor: "black", color: "white", fontFamily: "Verdana" }} onClick={handleSubmit}>
                                            <Typography sx={{ marginLeft: 19, marginTop: 1.7 }}>Sign Up</Typography>
                                        </Box>
                                    </BrowserView>
                                    <MobileView>
                                        <Box sx={{ border: 1, height: 50, boxShadow: 1, borderRadius: 3, cursor: 'pointer', backgroundColor: "black", color: "white", fontFamily: "Verdana" }} onClick={handleSubmit}>
                                            <Typography sx={{ marginLeft: 12, marginTop: 1.7 }}>Sign Up</Typography>
                                        </Box>
                                    </MobileView>
                                    <Grid container>
                                        <Grid item>
                                            <Link href="/" variant="body2" style={{ color: "#AD2091", textDecoration: "none", fontFamily: "Verdana" }}>
                                                {" Have an account? Sign In"}
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </>
    );
}

export default Sign;
