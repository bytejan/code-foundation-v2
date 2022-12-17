import React from 'react';
import {Stack} from '@mui/material';
import Card from '@mui/material/Card';
import { VideoComponent } from "./VideoComponent";
export const CamScreen = (props: any) => {

  return (
    <Stack direction="row" spacing={2}>
      {props.participants.map((participant: any) => (
        <Card sx={{maxWidth: 345}}>
          { participant.videoStream !== null &&
            <VideoComponent srcObject={participant.videoStream} name={participant.name} />
          }
          <div>no video</div>
        </Card>
      ))}
    </Stack>
  );
}
