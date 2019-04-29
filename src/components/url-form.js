import React from 'react';

function URLForm() {
  return (
    <form id="url-form" className="hide">
      <label>Enter the URL to your deployed back end, making sure to remove the trailing forward slash</label>
      <input type="text" id="back-end-url" />
    </form>
  );
}

export default URLForm;
