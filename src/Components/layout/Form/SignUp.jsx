import { useNavigate } from "react-router-dom";
import FormButton from "../../Common/FormButton";
import FormRightSection from "../../Common/FormRightSection";

function SignUp() {
  const navigate = useNavigate();
  return (
    <div className="w-[100%] h-[100vh] flex max-l4:flex-col">
      <div className="w-[35%] max-xxxl1:w-[40%] max-xxl2:w-[50%] max-l4:w-[100%] h-[100%] flex flex-col justify-between max-l4:gap-[40px] py-[30px] px-[90px] max-xxxl:px-[70px] max-xxl:px-[50px] max-xl:px-[25px]">
        <div className="w-[190px] max-l:w-[150px] bg-myblue py-[10px] px-[14px] rounded-[10px]">
          <img
            src="https://static.priceoye.pk/images/logo.svg"
            alt="Error-Image"
            className="object-cover pointer"
            onClick={() => navigate("/")}
          />
        </div>

        <form className="flex flex-col gap-[20px]">
          <h1 className="text-[32px] max-l:text-[30px] max-2:text-[25px] font-medium">
            Create an account
          </h1>
          <h5 className="text-[14px] text-myblack font-normal flex gap-[10px]">
            I already have an account
            <span
              className="text-myblack1 createaccount pointer"
              onClick={() => navigate("/signin")}
            >
              Sign in
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
          <div className="flex flex-col gap-[10px]">
            <label htmlFor="customCheckbox1" className="flex gap-[10px]">
              <input
                type="checkbox"
                className="w-[15px] checked:bg-blue-500"
                id="customCheckbox1"
              />
              <span className="text-[14px] text-myblack">
                Save the password
              </span>
            </label>
            <label htmlFor="customCheckbox2" className="flex gap-[10px]">
              <input
                type="checkbox"
                className="w-[15px] checked:bg-blue-500"
                id="customCheckbox2"
              />
              <span className="text-[14px] text-myblack flex gap-[10px]">
                I have read and accept the
                <span className="text-myblack1 createaccount pointer">
                  Privacy Policy
                </span>
              </span>
            </label>
          </div>
          <button className="w-[100%] p-[18px] rounded-[10px] focus:outline-myblack1 bg-myblue text-white">
            Sign Up
          </button>
          <h5 className="orcontinuewith">or continue with</h5>

          <div className="flex gap-[15px]">
            <FormButton name="Google" icon="ri-google-fill" />
            <FormButton name="Facebook" icon="ri-facebook-fill" />
            <FormButton name="Apple" icon="ri-apple-fill" />
          </div>
        </form>

        <div className="flex flex-col gap-[10px] max-l4:hidden">
          <h5 className="text-[14px] text-myblack1 createaccount w-fit pointer">
            Need help?
          </h5>
          <h6 className="text-[13px] text-myblack">
            © 2025 <span className="text-myblack1 font-medium">PriceOye</span> -
            All Rights Reserved.
          </h6>
        </div>
      </div>

      <div className="w-[65%] max-xxxl1:w-[60%] max-xxl2:w-[50%] max-l4:w-[100%] h-[100%] bg-myblue relative">
        <FormRightSection
          heading="One of us?"
          subHeading="Welcome back! If you already have an account, sign in now. We’ve missed your presence and can’t wait to have you back. Reconnect with everything you love in just a click. Let’s continue where you left off—sign in today!"
          buttonText="Sign In"
          buttonAction={() => navigate("/signin")}
        />

        <div className="flex flex-col gap-[10px] hidden max-l4:block max-l4:mt-[30px]">
          <h5 className="text-[14px] text-myblack1 createaccount w-fit pointer max-l4:mb-[10px]">
            Need help?
          </h5>
          <h6 className="text-[13px] text-myblack">
            © 2025 <span className="text-myblack1 font-medium">PriceOye</span> -
            All Rights Reserved.
          </h6>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
