import { Button } from "@mui/material";
import React from "react";
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  root: {
    ":hover": {
      backgroundColor: "transparent !important"
    },
  },
});


const ButtonComponent = (props) => {
  const classes = useStyles();
  const { variant, size, sx, title, onClick } = props;
  return (
    <Button
      className={classes.root}
      variant={variant}
      fullWidth
      size={size}
      sx={sx}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default ButtonComponent;
