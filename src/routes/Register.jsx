import { SignUp } from "@clerk/clerk-react";

const Register = () => {
  return (
    <div className="flex justify-center items-center h-80 ">
      <SignUp signInUrl="/login" />
    </div>
  );
};

export default Register;
