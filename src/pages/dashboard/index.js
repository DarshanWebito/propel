import {
    AppBar,
    Avatar,
    Button,
    CardContent,
    Divider,
    Grid,
    IconButton,
    InputAdornment,
    Toolbar,
    Typography,

} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import GridViewIcon from "@mui/icons-material/GridView";
import StarIcon from '@mui/icons-material/Star';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import logo1 from '../../logo.png';
import img from '../../Chart.png';
import Image from "next/image";
import TextFieldComponent from "@/Component/TextFieldComponent";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import InputAdornment from "@mui/material/InputAdornment";
import ButtonComponent from "@/Component/ButtonComponent";


const Index = () => {
    return (
        <React.Fragment>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: "#44455f" }}>
                    <Toolbar>
                        <DragHandleIcon
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </DragHandleIcon>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, textAlign: "center" }}
                        >
                            PROPEL
                        </Typography>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </Toolbar>
                </AppBar>
            </Box>

            <Grid container spacing={4} p={2}>
                <Grid
                    item
                    xs={12}
                    display="flex"
                    justifyContent={"center"}
                    flexDirection={"column"}
                    alignItems="center"
                    gap={5}
                >

                    <Typography variant="h6" className="dash">
                        <Image src={logo1} alt="login" />
                        <br />
                        Dashboard
                    </Typography>
                    <Typography variant="h5" className="title">
                        Welcome to Propel!
                    </Typography>
                    <Divider style={{ width: "90%", marginTop: "-10px" }} />

                    <Box display="flex" justifyContent={"space-between"} >
                        <Typography className="title_1">Last 30 dyas</Typography>
                    </Box>

                </Grid>
            </Grid>


            <Grid container spacing={1} mt={1} p={2}>
                <Grid item xs={12} sx={{ boxShadow: 3 }} display='flex' borderRadius={2} p={1}>
                    <Grid xs={6}>
                        <Box display='flex' gap={2} alignItems={"center"}>
                            <StarIcon />
                            <Box display={'flex'} flexDirection='column'>
                                <Typography variant="h6">Reviews</Typography>
                                <Typography variant="caption">All your reviews</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Typography variant="h4">100</Typography>
                            <Box bgcolor={'#3dee65'} borderRadius={1} textAlign='center' width="60px" gap={0.5} display="flex" justifyContent={"center"}>
                                <ArrowOutwardIcon fontSize="1rem" />
                                <Typography variant="caption">3.5%</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid xs={6}>
                        <Image
                            src={img}
                            alt={"no image"}
                            height={100}
                            width={170}
                        />

                    </Grid>
                </Grid>
            </Grid>

            <Grid container mt={1} display="flex" justifyContent={"space-evenly"}>
                <Grid item xs={5.5} backgroundColor='#fef6cf' p={1} borderRadius={2} padding={2}>
                    <Box display='flex' gap={2} alignItems={"center"}>
                        <StarIcon />
                        <Box display={'flex'} flexDirection='column'>
                            <Typography variant="h6">Ratings</Typography>
                            <Typography variant="caption">Avrage ratings</Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography variant="h4">4.8</Typography>
                        <Box bgcolor={'#3dee65'} borderRadius={1} textAlign='center' width="60px" gap={0.5} display="flex" justifyContent={"center"}>
                            <ArrowOutwardIcon fontSize="1rem" />
                            <Typography variant="caption">3.50%</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={5.5} backgroundColor='#e9e9e9' p={1} borderRadius={2} padding={2}>
                    <Box display='flex' gap={2} alignItems={"center"} >
                        <StarIcon />
                        <Box display={'flex'} flexDirection='column'>
                            <Typography variant="h6">Request</Typography>
                            <Typography variant="caption">Pending request</Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography variant="h4">50</Typography>
                        <Box bgcolor={'#dc2a2b'} borderRadius={1} textAlign='center' width="60px" gap={0.5} display="flex" justifyContent={"center"}>
                            <ArrowOutwardIcon fontSize="1rem" />
                            <Typography variant="caption">3.50%</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Box display={"flex"} alignItems={"center"} height={"60vh"}>
                <Grid container spacing={2} p={2}>
                    <Grid item sx={12} md={12}>
                        <TextFieldComponent
                            id="fullWidth"
                            variant="outlined"
                            placeholder="Name:"
                            name="name"
                            // value={input.name}
                            // onChange={(e) => onChange(e)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment
                                        position="start"
                                        sx={{ display: "flex", alignItems: "center" }}
                                    >
                                        {/* <AccountBoxIcon
                                            sx={{ marginRight: "10px", color: "#c9ba7d" }}
                                        /> */}
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                backgroundColor: "#f1f1f1",
                                borderRadius: "100px",
                                border: "none",
                                "& fieldset": { border: "none" },
                            }}
                        />
                        {/* {error.name && (
                            <Typography
                                variant="caption"
                                sx={{ color: "red", marginLeft: "20px" }}
                            >
                                {error.name}
                            </Typography>
                        )} */}
                    </Grid>
                    <Grid item sx={12} md={12}>
                        <TextFieldComponent
                            id="fullWidth"
                            variant="outlined"
                            placeholder="Email:"
                            name="email"
                            // value={input.email}
                            // onChange={(e) => onChange(e)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment
                                        position="start"
                                        sx={{ display: "flex", alignItems: "center" }}
                                    >
                                        {/* <EmailIcon sx={{ marginRight: "10px", color: "#c9ba7d" }} /> */}
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                backgroundColor: "#f1f1f1",
                                borderRadius: "100px",
                                border: "none",
                                "& fieldset": { border: "none" },
                            }}
                        />
                        {/* {error.email && (
                            <Typography
                                variant="caption"
                                sx={{ color: "red", marginLeft: "20px" }}
                            >
                                {error.email}
                            </Typography>
                        )} */}
                    </Grid>

                    <Grid item sx={12} md={12}>
                        <TextFieldComponent
                            id="fullWidth"
                            variant="outlined"
                            placeholder="Phone"
                            name="phone"
                            // value={input.phone}
                            // onChange={(e) => onChange(e)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment
                                        position="start"
                                        sx={{ display: "flex", alignItems: "center" }}
                                    >
                                        {/* <LocalPhoneIcon
                                            sx={{ marginRight: "10px", color: "#c9ba7d" }}
                                        /> */}
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                backgroundColor: "#f1f1f1",
                                borderRadius: "100px",
                                border: "none",
                                "& fieldset": { border: "none" },
                            }}
                        />
                        {/* {error.phone && (
                            <Typography
                                variant="caption"
                                sx={{ color: "red", marginLeft: "20px" }}
                            >
                                {error.phone}
                            </Typography>
                        )} */}
                    </Grid>

                    <Grid item sx={12} md={12}>
                        <TextFieldComponent
                            id="fullWidth"
                            variant="outlined"
                            name="address"
                            placeholder="Address:"
                            // value={input.address}
                            // onChange={(e) => onChange(e)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment
                                        position="start"
                                        sx={{ display: "flex", alignItems: "center" }}
                                    >
                                        {/* <MapsHomeWorkIcon
                                            sx={{ marginRight: "10px", color: "#c9ba7d" }}
                                        /> */}
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                backgroundColor: "#f1f1f1",
                                borderRadius: "100px",
                                border: "none",
                                "& fieldset": { border: "none" },
                            }}
                        />
                        {/* {error.address && (
                            <Typography variant="caption"
                                sx={{ color: "red", marginLeft: "20px" }}
                            >
                                {error.address}
                            </Typography>
                        )} */}
                    </Grid>
                    <Grid
                        item
                        sx={6} md={12}
                        gap={2}
                        display="flex"
                        marginTop={"15px"}

                    >
                        <ButtonComponent
                            variant="contained"
                            fullWidth
                            size="small"
                            // onClick={() => handalSubmit()}
                            sx={{
                                backgroundColor: "#1D252D",
                                color: "white",
                                borderRadius: "42px",
                                padding: "15px",
                            }}
                            title="Request via Text "
                        />

                        <ButtonComponent
                            variant="contained"
                            fullWidth
                            size="small"
                            // onClick={() => handalSubmit()}
                            sx={{
                                backgroundColor: "#1D252D",
                                color: "white",
                                borderRadius: "42px",
                                padding: "15px",
                            }}
                            title="Request via QR "
                        />
                    </Grid>
                </Grid>
            </Box>

            <Typography display='flex' justifyContent={"center"} color="#F13030">
                Error in sending message!
            </Typography>
        </React.Fragment>
    );
};

export default Index;
