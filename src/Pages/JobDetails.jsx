import React from "react";
import { useLoaderData } from "react-router";

const JobDetails = () => {
  const jobDetails = useLoaderData();
  // const { id } = useParams();
  console.log(jobDetails);
  return <div>JobDetails JobDetails</div>;
};

export default JobDetails;
