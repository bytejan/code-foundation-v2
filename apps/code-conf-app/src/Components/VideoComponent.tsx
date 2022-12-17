import React, {useEffect, useRef, VideoHTMLAttributes} from 'react';

type PropsType = VideoHTMLAttributes<HTMLVideoElement> & {
  srcObject: MediaStream,
  name: string | null
}
export const VideoComponent = (props: PropsType) => {
  const refVideo = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!refVideo.current) return
    refVideo.current.srcObject = props.srcObject
  }, [props.srcObject])

  return (
    <>
      <video
        ref={refVideo}
        autoPlay
        playsInline></video>
        <div> { props.name }</div>
    </>
  );
}
