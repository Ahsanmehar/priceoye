import HappyCustomer from "../../Common/HappyCustomer";

function About() {
  return (
    <div className="w-[100%] h-[58vh] px-28 flexbox mt-[90px] mb-[90px]">
      <div className="w-[50%] h-[100%] flex flex-col gap-[25px]">
        <h5 className="text-[15px] font-medium text-myblue">ABOUT US</h5>
        <h1 className="text-[56px] font-semibold">Easy Adventures on Mobile</h1>
        <p className="text-[16px] text-myblack">
          At PriceOye, we make exploring the world easier, right from your
          mobile device. With a focus on simplicity and convenience, we provide
          a seamless experience for discovering new places and planning your
          next adventure.
        </p>
        <div className="flexbox mt-[30px] px-[30px]">
          <HappyCustomer title="Happy Customers" color="#ff9b4a"/>
          <HappyCustomer title="Success Project" />
          <HappyCustomer title="Conversion Rate Increased" />
        </div>
      </div>
      <div className="w-[46%] h-[100%]">
        <img
          src="https://images.unsplash.com/photo-1546795729-f3a5d42087f5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Error-Image"
          className="w-[100%] h-[100%] object-cover rounded-[30px]"
        />
      </div>
    </div>
  );
}

export default About;
