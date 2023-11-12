import React from "react";


const Footer = () => {
  return (
    <div className="">
    <section className="  h-screen flex justify-center  items-center">
      <div className="   border-2 border-[#a5b4fc] rounded-lg p-6 lg:p-6 pr-2  w-5/6 lg:w-auto font-mono text-center text-l lg:text-xl text-[#414a4c] lg:justify-center items-center">
        <p className="pt-6 flow-root ">Got a question or proposal, or just want to say hello?</p>
        <p className="mt-4">Go ahead,</p>
        <h2 className="underline decoration-solid mt-12 lg:mt-4" >Send me a message!</h2>
        <div class="scale-120 font-mono pt-6 pb-6 mt-[60px] lg:mt-2 text-center text-xl lg:text-2xl text-[#a5b4fc] font-bold ">

          <div className="scale-150 mr-2 ">
            <a href="https://www.linkedin.com/in/bahar-gumuser-83b0801b2/" target="_blank">
              <i class="fa-brands fa-linkedin " ></i>
            </a>
            <a href="https://github.com/bahargumuser" target="_blank">
              <i class="fa-brands fa-square-github ml-2"></i>
            </a>
       
          </div>
        </div>
      </div>
     
    </section>
    </div>
  );
};
export default Footer;
