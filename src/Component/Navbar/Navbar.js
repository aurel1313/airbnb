import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import React from 'react';
export const Navbar =()=>{
    return(
        <div>
           
             <Menu>
               
                <SubMenu title="Components">
                  <MenuItem>Component 1</MenuItem><br/>
                  <MenuItem>Component 2</MenuItem>
              </SubMenu>
              </Menu> 
           
        </div>
    )
}