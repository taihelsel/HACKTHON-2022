import React, { useState } from "react";

export default function UploadButton(uploadImage) {
  const [isPending, setIsPending] = useState(false);
  const handleButtonClick = () => {
    setIsPending(true);
    /*
        show image selction prompt
        pick image
        pending = false
        send image data via 'uploadImage' function
    */
  };
  return (
    <button onClick={handleButtonClick} type="button">
      {isPending ? "Uploading" : "Upload Image"}
    </button>
  );
}
