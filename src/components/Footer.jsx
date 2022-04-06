import React from "react";

const Footer = () => {
    
    const date=new Date();

  return (
    <>
      <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            POWERED BY TRAVEL WEB-SITE  {date.getFullYear()}
          </a>
        </div>
      </nav>
    </>
  );
};

export default Footer;
