import { SignUp } from "@clerk/clerk-react";

const Register = () => {
  return (
    <div className="flex justify-center items-center h-100 ">
      <SignUp signInUrl="/login" />
    </div>
  );
};

export default Register;
