import React from "react";
import PropTypes from "prop-types";

export default function Paragraf({
  Kalimat,
  Kalimat1,
  Kalimat2,
  Kalimat3,
  Kalimat4,
  Kalimat5,
  Link,
}) {
  return (
    <>
        <p  className="mb-4 text-lg leading-relaxed text-blueGray-800">
            {Kalimat} <a href = {Link} className="text-blue-500 hover:text-blueGray-700">{Link}</a> {Kalimat1}{Kalimat2}{Kalimat3}{Kalimat4}{Kalimat5}
        </p>
    </>
  );
}

Paragraf.defaultProps = {
    Kalimat: "",
    Kalimat1: "",
    Kalimat2: "",
    Kalimat3: "",
    Kalimat4: "",
    Kalimat5: "",
    Link: "",
  };
  
Paragraf.propTypes = {
    Kalimat: PropTypes.string,
    Kalimat1: PropTypes.string,
    Kalimat2: PropTypes.string,
    Kalimat3: PropTypes.string,
    Kalimat4: PropTypes.string,
    Kalimat5: PropTypes.string,
    Link: PropTypes.string,
  };