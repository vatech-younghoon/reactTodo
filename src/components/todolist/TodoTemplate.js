import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles(theme => ({
  box: {
    width: 512,
    height: 768,
    position: "relative",
    background: "white",
    borderRadius: 16,
    boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.04)",
    margin: "0 auto",
    marginTop: 96,
    marginBottom: 32,
    flexDirection: "column"
  }
}));

function TodoTemplate({ children }) {
  const classes = useStyle();
  return <div className={classes.box}>{children}</div>;
}

export default TodoTemplate;
