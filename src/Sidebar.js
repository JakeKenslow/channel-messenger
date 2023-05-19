import React from 'react';
import "./Sidebar.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import { Avatar } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <h3>test1</h3>
        <ExpandMoreIcon />
      </div>

      <div className='sidebar__channels'>
        <div className='sidebar__channelsHeader'>
          <div className='sidebar__header'>
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>
          <AddIcon className='sidebar__addChannel' />
        </div>

        <div className='sidebar__channelsList'>
          <SidebarChannel />
        </div>
      </div>

      <div className='sidebar__profile'>
        <Avatar src='https://yt3.ggpht.com/yti/AHyvSCBniSJYGTv1WHdRdfG3lYFc-_9zBGNqr_XeCI25=s88-c-k-c0x00ffffff-no-rj-mo'/>
        <div className="sidebar__profileInfo">
          <h3>Jake Kenslow</h3>
          <p>j.s.kenslow@gmail.com</p>
        </div>

        <div className="sidebar__profileIcons">
          <SettingsIcon />
        </div>
      </div>
    </div>
  )
}

export default Sidebar