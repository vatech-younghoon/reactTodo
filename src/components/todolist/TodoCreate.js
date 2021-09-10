import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { MdAdd } from "react-icons/md";

const useStyle = makeStyles(theme => ({
  circle__button: {
    zIndex: 5,
    cursor: "pointer",
    width: "80px",
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "60px",
    left: "50%",
    bottom: "0px",
    color: "white",
    borderRadius: "50%",
    border: "none",
    outline: "none",
    transition: "0.125s all ease-in",
    background: props => {
      if (props.open) return "#ff6b6b";
      return "#38d9a9";
    },
    "&:hover ": {
      background: props => {
        if (props.open) return "#ff8787";
        return "#63e6be";
      }
    },
    "&:active": {
      background: props => {
        if (props.open) return "#fa5252";
        return "#20c997";
      }
    },
    transform: props => {
      if (props.open) return "translate(-50%, 50%) rotate(45deg)";
      return "translate(-50%, 50%)";
    }
  },
  insertFormPositioner: {
    width: "100%",
    bottom: 0,
    left: 0,
    position: "absolute"
  },
  insertForm: {
    background: "#f8f9fa",
    paddingLeft: "32px",
    paddingTop: "32px",
    paddingRight: "32px",
    paddingBottom: "72px",
    borderBottomLeftRadius: "16px",
    borderBottomRightRadius: "16px",
    borderTop: "1px solid #e9ecef"
  },
  input: {
    padding: "12px",
    borderRadius: "4px",
    border: "1px solid #dee2e6",
    width: "100%",
    outline: "none",
    fontSize: "18px",
    boxSizing: "border-box"
  }
}));

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);
  const classes = useStyle({ open });
  return (
    <>
      {open && (
        <div className={classes.insertFormPositioner}>
          <div className={classes.insertForm}>
            <input
              className={classes.input}
              autoFocus
              placeholder="할 일을 입력 후, Enter를 누르세요"
            />
          </div>
        </div>
      )}
      <div className={classes.circle__button} onClick={onToggle} open={open}>
        <MdAdd />
      </div>
    </>
  );
}

export default TodoCreate;
