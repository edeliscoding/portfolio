import "./contact.css";
import Website from "../../img/website.png";
import Email from "../../img/email.png";
import Linkedin from "../../img/linkedin.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3t7105a",
        "template_iwx5ocp",
        formRef.current,
        "user_jJMbbUQVhdtGDwryBeQVS"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">I can be reached via the following: </h1>
          <div className="c-info">
            <div className="c-info-item">
              <a href="https://github.com/edeliscoding">
                <img src={Website} alt="" className="c-icon" />
                https://github.com/edeliscoding
              </a>
            </div>
            <div className="c-info-item">
              <a href="mailto:edelbrix@yahoo.com">
                <img className="c-icon" src={Email} alt="" />
                edelbrix@yahoo.com
              </a>
            </div>
            <div className="c-info-item">
              <a href="https://www.linkedin.com/in/edelreich/">
                <img className="c-icon" src={Linkedin} alt="" />
                https://www.linkedin.com/in/edelreich/
              </a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Don't hesitate to reach out.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
