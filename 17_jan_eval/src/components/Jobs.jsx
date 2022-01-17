import { useEffect, useState } from "react";
import { JobListing } from "./JobListins";

export const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch("http://localhost:2710/jobs");

    const data = await res.json();
    setJobs(data);
  };
  return (
    <div>
      {jobs.map((el) => {
        return <JobListing key={el.id} data={el} />;
      })}
    </div>
  );
};
