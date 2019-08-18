import React from "react";
import Tenor from "./tenor.gif";
export default () => {
  return (
    <div>
      <img
        src={Tenor}
        alt="Loading...."
        style={{ width: "200px", margin: "40px auto", display: "block" }}
      />
    </div>
  );
};
