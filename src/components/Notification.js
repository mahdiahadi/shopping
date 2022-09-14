import React from "react";
import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";
const Notification = ({ type, message }) => {
  const dispatch=useDispatch();
  const notification=useSelector((state)=>state.uiSlice.notification)
 const closeHandler=()=>{
  dispatch(uiActions.showNotification({
    open:false
  }))
 }
  return (
    <div>
        {
          notification.open &&(
            <Alert onClose={closeHandler} severity={type}>
            {message}
            </Alert>
          )}
       
    </div>
  );
};

export default Notification;