import React from "react";

const ImageUploadField = () => {
  return (
    <div className="custom-file">
      <input
        type="file"
        className="custom-file-input"
        id="validatedCustomFile"
      />
      <label className="custom-file-label" htmlFor="validatedCustomFile">
        Choose file...(Not Actually Implemented... Soon!)
      </label>
      <div className="invalid-feedback">
        Example invalid custom file feedback
      </div>
    </div>
  );
};

export default ImageUploadField;
