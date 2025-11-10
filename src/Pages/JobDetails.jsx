import React from "react";
import { useLoaderData, useParams } from "react-router";

const JobDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  console.log(data, id);
  return <div>JobDetails JobDetails</div>;
};

export default JobDetails;
