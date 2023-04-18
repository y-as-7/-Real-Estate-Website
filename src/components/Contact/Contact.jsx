import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import {BsFillChatDotsFill} from 'react-icons/bs'
const Contact = () => {
  return (
    <section id="contact"
     className="c-wrapper">
      <div  className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="c-left">
          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better
          </span>
          <div className="felxColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
                <div className="flexCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <MdCall size={25} />
                        </div>
                        <div className="flexColStart detail">
                            <span className="primaryText">Call</span>
                            <span className="secondaryText">010 210 312 31 </span>
                        </div>
                    </div>
                    <div className="flexCenter button">Call</div>
                </div>
                {/* second mode  */}
                <div className="flexCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <BsFillChatDotsFill size={25} />
                        </div>
                        <div className="flexColStart detail">
                            <span className="primaryText">Chat</span>
                            <span className="secondaryText">010 210 312 31 </span>
                        </div>
                    </div>
                    <div className="flexCenter button">Chat now</div>
                </div>
                {/*  */}
            </div>
            {/* second row */}
            <div className="flexStart row">
                <div className="flexCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <MdCall size={25} />
                        </div>
                        <div className="flexColStart detail">
                            <span className="primaryText">Vedio Call</span>
                            <span className="secondaryText">010 210 312 31 </span>
                        </div>
                    </div>
                    <div className="flexCenter button">video now</div>
                </div>
                {/* second mode  */}
                <div className="flexCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <BsFillChatDotsFill size={25} />
                        </div>
                        <div className="flexColStart detail">
                            <span className="primaryText">Message</span>
                            <span className="secondaryText">010 210 312 31 </span>
                        </div>
                    </div>
                    <div className="flexCenter button">Message now</div>
                </div>
                {/*  */}
            </div>

          </div>
        </div>
        {/* right side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
