import React from "react"
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
const theme = createTheme({
    palette: {
      primary: {
        main : '#f50057'
      },
    },
  });
export const Buttons = (props) => {

    return (
        <Button className={props.className} onClick={props.onClick} variant={props.variant} >
            {props.children}
        </Button>
    )


}