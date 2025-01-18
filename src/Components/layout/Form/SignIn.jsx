import { useNavigate } from "react-router-dom";
import FormButton from "../../Common/FormButton";
import FormRightSection from "../../Common/FormRightSection";

function SignIn() {
  const navigate = useNavigate();
  return (
    <div className="w-[100%] h-[100vh] flex">
      <div className="w-[35%] h-[100%] bg-pink-20 flex flex-col justify-between py-[30px] px-[90px]">
        <div className="w-[190px] bg-myblue py-[10px] px-[14px] rounded-[10px]">
          <img
            src="https://static.priceoye.pk/images/logo.svg"
            alt="Error-Image"
            className="object-cover pointer"
            onClick={() => navigate('/')}
          />
        </div>

        <form className="flex flex-col gap-[20px]">
          <h1 className="text-[32px] font-medium">Welcome back</h1>
          <h5 className="text-[14px] text-myblack font-normal flex gap-[10px]">
            Don't have an account?
            <span
              className="text-myblack1 createaccount pointer"
              onClick={() => navigate("/signup")}
            >
              Create an account
            </span>
          </h5>
          <input
            type="email"
            placeholder="Email"
            className="w-[100%] p-[18px] rounded-[10px] focus:outline-myblack1 border border-gray-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-[100%] p-[18px] rounded-[10px] focus:outline-myblack1 border border-gray-300"
          />
          <div className="flexbox">
            <label htmlFor="customCheckbox" className="flex gap-[10px]">
              <input
                type="checkbox"
                className="w-[15px] checked:bg-blue-500"
                id="customCheckbox"
              />
              <span className="text-[14px] text-myblack">
                Remember for 30 days
              </span>
            </label>
            <h5 className="text-[14px] text-myblack1 pointer forgetpassword">
              Forgot password?
            </h5>
          </div>
          <button className="w-[100%] p-[18px] rounded-[10px] focus:outline-myblack1 bg-myblue text-white">
            Sign In
          </button>
          <h5 className="orcontinuewith">or continue with</h5>

          <div className="flexbox">
            <FormButton name="Google" icon="ri-google-fill" />
            <FormButton name="Facebook" icon="ri-facebook-fill" />
            <FormButton name="Apple" icon="ri-apple-fill" />
          </div>
        </form>

        <div className="flex flex-col gap-[10px]">
          <h5 className="text-[14px] text-myblack1 createaccount w-fit pointer">
            Need help?
          </h5>
          <h6 className="text-[13px] text-myblack">
            © 2025 <span className="text-myblack1 font-medium">PriceOye</span> -
            All Rights Reserved.
          </h6>
        </div>
      </div>
      <div className="w-[65%] h-[100%] bg-myblue relative">
        <FormRightSection
          heading="New Here?"
          subHeading="Sign up today and open the door to new opportunities. Discover exciting features tailored just for you."
          buttonText="Sign Up"
          buttonAction={() => navigate("/signup")}
        />
      </div>
    </div>
  );
}

export default SignIn;
