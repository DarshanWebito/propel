import {
    AppBar,
    Avatar,
    Button,
    CardContent,
    Divider,
    Grid,
    IconButton,
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
                    <Typography variant="h6" textAlign={"center"}>
                        Dashboard
                    </Typography>
                    <Box
                        height={150}
                        width={150}
                        bgcolor={"#efefef"}
                        borderRadius={5}
                        display="flex"
                        alignItems="center"
                        justifyContent={"center"}
                    >
                        <img
                            src={`https://media.istockphoto.com/id/828088276/vector/qr-code-illustration.jpg?s=2048x2048&w=is&k=20&c=W87vGWUh_Aq6pvQ-nMFyprw5JSrEi_vZXWlHJUkV5jk=`}
                            alt={"no image"}
                            height={100}
                            width={100}
                            style={{ borderRadius: "10px" }}
                        />
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    display="flex"
                    justifyContent={"center"}
                    flexDirection={"column"}
                    alignItems="center"
                    gap={2}

                >
                    <Typography variant="h6" textAlign={"center"}>
                        Hey John!
                    </Typography>
                    <Typography variant="body2" textAlign={"center"}>
                        WelCome to prople! Here is the QR oed to request for reviews from
                        the customer`
                    </Typography>
                    <Divider style={{ width: "60%" }} />
                </Grid>
                <Grid item xs={12}>
                    <Box display="flex" justifyContent={"space-between"} >
                        <Typography>Last 30 dyas</Typography>
                        <GridViewIcon />
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
                        <img
                            src={`https://www.perkins.org/wp-content/uploads/2022/07/Amazon_1.png`}
                            alt={"no image"}
                            height={110}
                            width={180}
                        />

                    </Grid>
                </Grid>
            </Grid>

            <Grid container mt={1} display="flex" justifyContent={"space-evenly"}>
                <Grid item xs={5.5} backgroundColor='#fef6cf' p={1} borderRadius={2}>
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
                <Grid item xs={5.5} backgroundColor='#e9e9e9' p={1} borderRadius={2} >
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

        </React.Fragment>
    );
};

export default Index;
