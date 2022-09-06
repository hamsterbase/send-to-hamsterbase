import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div>
      <div>
        Entrypoint: <input></input>
      </div>
      <div>
        AccessToken: <input></input>
      </div>
      <button type="button">Save</button>
    </div>
  </React.StrictMode>
);
