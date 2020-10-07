import React from 'react';
// spinner size is controlled in the theme-overrides.js file

// components
import { Spin } from 'antd';

function LoadingComponent() {
  return (
    <div data-testid="spinnerCont" className="loader">
      {/* takes an optional "tip" prop as text to display under the spinner: (tip= 'loading...') 
      size options: "small", "default", "large" */}
      {/* <Spin data-testid="antSpinner" size="large" /> */}
      <img
        src="/images/shark-spinner.gif"
        data-testid="antSpinner"
        alt="spinnerShark"
      />
    </div>
  );
}

export default LoadingComponent;
