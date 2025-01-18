import { useNavigate } from "react-router-dom";
import FormRightSection from "../../Common/FormRightSection";

function ForgetPassword() {
  const navigate = useNavigate();

  return (
    <h1>
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
            <h1 className="text-[32px] font-medium">Forgot password?</h1>
            <h5 className="text-[15px] text-myblack font-normal">
              Enter the email address you used when you joined and we’ll send
              you instructions to reset your password
            </h5>
            <input
              type="email"
              placeholder="Email address"
              className="w-[100%] p-[18px] rounded-[10px] focus:outline-myblack1 border border-gray-300"
            />
            <button className="w-[100%] p-[18px] rounded-[10px] focus:outline-myblack1 bg-myblue text-white">
              Rest Password
            </button>
          </form>

          <div className="flex flex-col gap-[10px]">
            <h5 className="text-[14px] text-myblack1 createaccount w-fit pointer">
              Need help?
            </h5>
            <h6 className="text-[13px] text-myblack">
              © 2025 <span className="text-myblack1 font-medium ">PriceOye</span>
              - All Rights Reserved.
            </h6>
          </div>
        </div>

        <div className="w-[65%] h-[100%] bg-myblue relative">
          <FormRightSection
            heading="One of us?"
            subHeading="Welcome back! If you already have an account, sign in now. We’ve missed your presence and can’t wait to have you back. Reconnect with everything you love in just a click. Let’s continue where you left off—sign in today!"
            buttonText="Sign In"
            buttonAction={() => navigate("/signin")}
          />
        </div>
      </div>
    </h1>
  );
}

export default ForgetPassword;
