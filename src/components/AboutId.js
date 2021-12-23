import React from "react";
import { useParams } from "react-router-dom";

const AboutId = () => {
  let params = useParams();
  return (
    <>
      <h3>User Details: {params.aboutId}</h3>
    </>
  );
};
export default AboutId;
