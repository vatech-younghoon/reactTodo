import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles(theme => ({
  box: {
    width: "512px",
    height: "768px",
    position: "relative",
    background: "white",
    borderRadius: "16px",
    boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.04)",
    margin: "0 auto",
    marginTop: "96px",
    marginBottom: "32px",
    display: "flex",
    flexDirection: "column"
  }
}));

function TodoTemplate({ children }) {
  const classes = useStyle();
  return <div className={classes.box}>{children}</div>;
}

export default TodoTemplate;
