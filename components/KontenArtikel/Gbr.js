import React from "react";
import PropTypes from "prop-types";

export default function Gbr({
  Gambarx,
}) {
  return (
    <>
        <div className="w-auto align-middle rounded-t-lg">
          <img
            src = {Gambarx}
            alt = ""
          />
        </div>
    </>
  );
}

Gbr.defaultProps = {
    Gambarx: "",
  };
  
Gbr.propTypes = {
    Gambarx: PropTypes.string,
  };