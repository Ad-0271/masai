import { useContext, useState } from "react";
import { PostJobContext } from "../contexts/PostJobContext";

const initstate = {
  company_name: "",
  job_title: "",
  salary_range: "",
  job_description: "",
  location: "",
  job_type: "",
};
export const PostJob = () => {
  const [formData, setForm] = useState(initstate);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...formData, [name]: value });
  };

  const sendData = useContext(PostJobContext);

  const handleSubmit = () => {
    sendData(formData);

    setForm(initstate);
  };

  return (
    <div>
      <div>
        <label htmlFor="">Company Name</label>
        <input
          type="text"
          name="company_name"
          value={formData.company_name}
          placeholder="Enter company name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Job Title</label>
        <input
          type="text"
          name="job_title"
          value={formData.job_title}
          placeholder="Enter job title"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Salary Range</label>
        <input
          type="text"
          name="salary_range"
          value={formData.salary_range}
          placeholder="Enter salary range"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Job Description</label>
        <input
          type="text"
          name="job_description"
          value={formData.job_description}
          placeholder="Enter job description"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          placeholder="Enter location"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Job Type</label>
        <select onChange={handleChange} name="job_type">
          <option value="">Please select</option>
          <option value="remote_work">Remote</option>
          <option value="office_work">Office</option>
        </select>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
