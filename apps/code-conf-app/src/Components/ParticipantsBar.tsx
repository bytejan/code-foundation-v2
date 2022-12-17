import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { Stack } from "@mui/material";

export const ParticipantsBar = (props: any) => {

  return (
    <Box sx={{ pb: 7 }}>
      <Stack direction="row" spacing={2}>
      {props.participants.map((participant: any) => (
          <Card sx={{maxWidth: 345}}>
            <CardHeader
              title={participant.name}
              subheader="September 14, 2016"
            />
          </Card>
        ))}
        </Stack>
    </Box>
  );
}
