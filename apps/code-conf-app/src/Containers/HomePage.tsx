import React, { useState } from 'react';
import { ChatBottomNav } from '../Components/ChatBottomNav';
import { MediaService } from '../Services/MediaService';
import { CamScreen } from '../Components/CamScreen';
import { ParticipantsBar } from '../Components/ParticipantsBar';

export const HomePage = () => {
  const mediaService = MediaService.getInstance();

  const [micOn, setMicOn] = useState<boolean>(false);
  const [camOn, setCamOn] = useState<boolean>(false);
  const [shareScreen, setShareScreen] = useState<boolean>(false);
  const [chat, setChatActive] = useState<boolean>(false);

  const camOnAction = () =>  {

    mediaService.getCamera().then((stream) => {
      ParticipantExamples.find((participant) => participant.me === true)!.videoStream = stream;

    });
  }

  const micOnAction = () =>  {
    alert('mic on')
  }

  const onShareScreenAction = () =>  {
    mediaService.getScreenShare().catch((e) => {
      console.log(e);
    });
  }

  const onChatAction = () =>  {
    alert('chat')
  }

  const onExitAction = () =>  {
    alert('exit')
  }

  return (
    <>
      {/*<ChatBottomAppBar />*/}
      <ParticipantsBar participants={ParticipantExamples} />
      <CamScreen participants={ParticipantExamples} />
      <ChatBottomNav onCamOnClick={camOnAction}
                     onMinOnClick={micOnAction}
                     onShareScreenClick={onShareScreenAction}
                     onChatClick={onChatAction}
                     onExitClick={onExitAction} />
    </>
  );
}

interface ChatParticipant {
  name: string;
  me: boolean;
  avatar: string | null;
  isMuted: boolean;
  isSpeaking: boolean;
  isVideoOn: boolean;
  videoStream: MediaStream | null;
}

const ParticipantExamples: ChatParticipant[] = [
  {
    name: 'John Doe',
    me: false,
    avatar: null,
    isMuted: true,
    isSpeaking: false,
    isVideoOn: false,
    videoStream: null,
  },
  {
    name: 'Jan-Jaap Arends',
    me: true,
    avatar: null,
    isMuted: false,
    isSpeaking: true,
    isVideoOn: true,
    videoStream: null,
  },
  {
    name: 'Karel de Grote',
    me: false,
    avatar: null,
    isMuted: true,
    isSpeaking: false,
    isVideoOn: false,
    videoStream: null,

  },
  {
    name: 'Galileo Galilei',
    me: false,
    avatar: null,
    isMuted: true,
    isSpeaking: false,
    isVideoOn: false,
    videoStream: null,
  },
  {
    name: 'Deborah Meaden',
    me: false,
    avatar: null,
    isMuted: true,
    isSpeaking: false,
    isVideoOn: false,
    videoStream: null,
  },
  {
    name: 'George Washington',
    me: false,
    avatar: null,
    isMuted: true,
    isSpeaking: false,
    isVideoOn: false,
    videoStream: null,
  },
  {
    name: 'Benjamin Franklin',
    me: false,
    avatar: null,
    isMuted: true,
    isSpeaking: false,
    isVideoOn: false,
    videoStream: null,
  },
];
