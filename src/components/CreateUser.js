import React from "react";
import { createUseStyles } from "react-jss";
import clsx from "clsx";

const useStyles = createUseStyles({
  myButton: {
    color: "white",
    backgroundColor: key => (key ? "aqua" : "blue"),
    display: "inline-flex",
    borderRadius: "4px",
    cursor: "pointer",
    height: "2.25rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    fontSize: "1rem",
    "&:hover": {
      background: "lighten($blue, 10%)"
    }
  },
  active: {
    fontSize: "130px"
  }
});

function CreateUser({ username, email, onChange, onCreate }) {
  const key = false;
  const classes = useStyles(key);
  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button
        className={clsx(classes.myButton, { [classes.active]: key })}
        onClick={onCreate}
      >
        등록
      </button>
    </div>
  );
}

export default React.memo(CreateUser);
