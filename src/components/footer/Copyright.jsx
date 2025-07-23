import { Link } from "react-router-dom";

function Copyright() {
  return (
    <div className="font-medium text-gray-300">
      <p className=" ">
        Privacy Policy | &copy; <span>{new Date().getFullYear()}</span> Gymat
      </p>
    </div>
  );
}

export default Copyright;
