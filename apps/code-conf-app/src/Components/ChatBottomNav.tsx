import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import ChatIcon from '@mui/icons-material/Chat';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
export const ChatBottomNav = (props: any) => {
  return (
    <Box sx={{ pb: 7 }}>
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation showLabels>
          <BottomNavigationAction onClick={props.onMinOnClick} label="Microphone" icon={<MicIcon />} />
          <BottomNavigationAction onClick={props.onCamOnClick} label="Video" icon={<VideoCallIcon />} />
          <BottomNavigationAction onClick={props.onShareScreenClick} label="Share screen" icon={<ScreenShareIcon />} />
          <BottomNavigationAction onClick={props.onChatClick} label="Chat" icon={<ChatIcon />} />
          <BottomNavigationAction onClick={props.onExitClick} label="Exit" icon={<ExitToAppIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
