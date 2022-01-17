import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Link to="/post">
        <div>Post a Job</div>
      </Link>
      <Link to="/jobs">
        <div>Apply for a Job</div>
      </Link>
      <div>Sign-up</div>
      <div>Sign-in</div>
    </div>
  );
};
