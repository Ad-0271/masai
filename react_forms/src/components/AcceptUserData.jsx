import { useRef, useState } from "react";
const initState = {
  name: "",
  age: "",
  address: "",
  department: "",
  salary: "",
  married: "",
  profile_photo: "",
};

export const AcceptUserData = () => {
  const [formData, setFormData] = useState(initState);

  const file = useRef();

  const handleChange = (e) => {
    let { name, value, type, checked } = e.target;
    value = type === "checkbox" ? checked : value;

    setFormData({ ...formData, [name]: value });
  };

  const sendData = (e) => {
    e.preventDefault();
    console.log(formData, file.current.files, file.value);
    setFormData(initState);
  };
  return (
    <>
      <form onSubmit={sendData}>
        <div>
          <label>Name</label>
          <input
            value={formData.name}
            type="text"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            value={formData.age}
            name="age"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            value={formData.address}
            name="address"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Department</label>
          <select
            name="department"
            value={formData.department}
            id=""
            onChange={handleChange}
          >
            <option value="" disabled>
              Please select Department
            </option>
            <option value="Front-End">Front-End</option>
            <option value="Back-End">Back-End</option>
            <option value="Database">Database</option>
          </select>
        </div>
        <div>
          <label>Salary</label>
          <input
            type="number"
            value={formData.salary}
            name="salary"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Married</label>
          <input
            type="checkbox"
            checked={formData.married}
            name="married"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Profile Photo</label>
          <input type="file" name="name" ref={file} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
