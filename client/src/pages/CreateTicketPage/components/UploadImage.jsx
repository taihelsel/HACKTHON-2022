/* eslint-disable jsx-a11y/media-has-caption */
import { useRef, useState } from "react";
import PropTypes from "prop-types";

function WebCam({ handleFail }) {
  const video = useRef(null);
  const canvas = useRef(null);

  const startCameraClick = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    }).catch((err) => {
      handleFail(true);
    });
    video.current.srcObject = stream;
  };
  const takePhotoClick = async () => {
    const currentCanvas = canvas.current;
    currentCanvas.getContext("2d").drawImage(video, 0, 0, currentCanvas.width, currentCanvas.height);
    const imgDataURL = currentCanvas.toDataURL("image/jpeg");
  };
  return (
    <>
      <button type="button" id="open-camera-btn" onClick={startCameraClick}>Start Camera</button>
      <video id="video" width="320" height="240" autoPlay ref={video} />
      <button type="button" id="take-photo-btn" onClick={takePhotoClick}>Click Photo</button>
      <canvas id="canvas" width="320" height="240" ref={canvas} />
    </>
  );
}
WebCam.propTypes = {
  handleFail: PropTypes.func.isRequired,
};
function AccessFilesPrompt({ handleSetImage }) {
  return (
    <input
      type="file"
      accept="image/png,image/jpg,image/jpeg,image/webp,capture=camera"
      onChange={(e) => { console.log("change", e); }}
      onInput={(e) => { console.log("input", e); }}
    />
  );
}
AccessFilesPrompt.propTypes = {
  handleSetImage: PropTypes.func.isRequired,
};
export default function UploadImage() {
  return (
    <AccessFilesPrompt />
  );
}
