import React from "react";
import { makeStyles } from "@material-ui/styles";
import { MdDone, MdDelete } from "react-icons/md";
import { REMOVE_TODO, UPDATE_TODO } from "queries/todo";
import { useMutation } from "@apollo/client";

const useStyle = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    paddingTop: "12px",
    paddingBottom: "12px"
    // "&:hover": props => {
    //     if(props.remove)
    // }
  },
  checkCircle: {
    width: "32px",
    height: "32px",
    borderRadius: "16px",
    fontSize: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "20px",
    cursor: "pointer",
    border: props => {
      if (props.done) return "1px solid #38d9a9";
      return "1px solid #ced4da";
    },
    color: props => {
      if (props.done) return "#38d9a9";
    }
  },
  text: {
    flex: 1,
    fontSize: "21px",
    color: props => {
      if (props.done === true) return "#ced4da";
      return "#495057";
    }
  },
  remove: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#dee2e6",
    fontSize: "24px",
    cursor: "pointer",
    "&:hover": {
      color: "#ff6b6b"
    }
    //display: "none"
  }
}));

function TodoItem({ id, done, text, todoRefetch }) {
  const [removeTodo] = useMutation(REMOVE_TODO, {
    onCompleted: () => {
      todoRefetch();
    }
  });

  const [updateTodo] = useMutation(UPDATE_TODO, {
    onCompleted: () => {
      todoRefetch();
    }
  });

  const onToggle = () => updateTodo({ variables: { id, done: !done, text } });
  const onRemove = () => removeTodo({ variables: { id } });

  const classes = useStyle({ id, done, text });
  return (
    <div className={classes.root}>
      <div className={classes.checkCircle} onClick={onToggle}>
        {done && <MdDone />}
      </div>
      <div className={classes.text}>{text}</div>
      <div className={classes.remove} onClick={onRemove}>
        <MdDelete />
      </div>
    </div>
  );
}

export default React.memo(TodoItem);
