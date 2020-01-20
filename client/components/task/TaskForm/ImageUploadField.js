import React from "react";

const ImageUploadField = () => {
  return (
    <div class="custom-file">
      <input type="file" class="custom-file-input" id="validatedCustomFile" />
      <label class="custom-file-label" for="validatedCustomFile">
        Choose file...(Not Actually Implemented... Soon!)
      </label>
      <div class="invalid-feedback">Example invalid custom file feedback</div>
    </div>
  );
};

export default ImageUploadField;
