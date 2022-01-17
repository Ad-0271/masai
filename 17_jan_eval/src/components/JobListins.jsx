export const JobListing = ({ data }) => {
  return (
    <div
      style={{ border: "1px solid black", width: "500px", margin: "20px auto" }}
    >
      <div>Company Name: {data.company_name}</div>
      <div>Job Title: {data.job_title}</div>
      <div>Job Description: {data.job_description}</div>
      <div>Location: {data.location}</div>
      <div>Salary range: {data.salary_range}</div>
      <div>Job type: {data.job_type}</div>
      <button>Apply for this job</button>
    </div>
  );
};
