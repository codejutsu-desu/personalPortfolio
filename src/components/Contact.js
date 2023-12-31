import React, { useRef, useState } from "react";
import styled from "styled-components";
import { device } from "../globalHelpers";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

const Section = styled.div`
  height: 90vh;
  position: relative;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: clamp(1rem, 8vw, 3rem);
  font-family: CalibreBoldItalic;
  font-weight: 600;
  min-height: 568px;
  min-width: 280px;
`;
const ContactMeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
const SectionTitle = styled.h3`
  display: flex;
  align-items: center;
  flex: 1;
  color: #f27d42;
`;
const Text = styled.p`
  display: flex;
  align-items: center;
  font-size: clamp(1rem, 4vw, 1.8rem);
  flex: 1;
  margin: 0 1em;
  font-family: MontserratExtraBold;
  color: #55bdca;
  @media ${device.laptop} {
    margin: 0 2em;
  }
`;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1em auto;
  max-width: 700px;
  font-family: CalibreRegular;
`;
const Name = styled.input`
  font-family: inherit;
  font-size: clamp(1rem, 4vw, 1.3rem);
  border-radius: 5px;
  line-height: 22px;
  background-color: #c8eff9;
  border: 2px solid #55bdca;
  transition: all 0.3s;
  padding: 13px;
  margin-bottom: 15px;
  width: 100%;
  box-sizing: border-box;
  outline: 0;
`;
const Email = styled.input`
  font-family: inherit;
  font-size: clamp(1rem, 4vw, 1.3rem);
  border-radius: 5px;
  line-height: 22px;
  background-color: #c8eff9;
  border: 2px solid #55bdca;
  padding: 13px;
  margin-bottom: 15px;
  width: 100%;
  box-sizing: border-box;
`;
const Message = styled.textarea`
  font-family: inherit;
  font-size: clamp(1rem, 4vw, 1.3rem);
  border-radius: 5px;
  line-height: 22px;
  background-color: #c8eff9;
  border: 2px solid #55bdca;
  padding: 13px;
  margin-bottom: 15px;
  width: 100%;
  box-sizing: border-box;
  height: 150px;
  line-height: 150%;
`;
const InputRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const Submit = styled.input`
  background: none;
  padding: 0.225em 1em;
  font-weight: 600;
  font-size: clamp(1rem, 4vw, 1.3rem);
  text-align: center;
  padding: 0.5em;
  color: #55bdca;
  text-decoration: none;
  border: 2px solid;
  border-image: linear-gradient(135deg, #02aab0, #00cdac);
  border-image-slice: 1;
  cursor: pointer;
  background-size: 200% 100%;
  background-image: linear-gradient(to right, transparent 50%, #55bdca 50%);
  transition: background-position 0.5s;
  z-index: 1;
  &:hover {
    color: #fff;
    background-position: -100% 0;
  }
`;
const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Define your Email.js service ID, template ID, and user ID
    const publicKey = "DSKtozpN-txU7j9kV";
    const templateID = "template_wfo4hby";
    const userID = "service_z0g7tbv";

    emailjs.sendForm(userID, templateID, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        toast.success("Successfully sent your messages!", {
          style: {
            borderRadius: "5px",
            padding: "8px 16px",
          },
        });
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
        toast.error(
          "Failed to send the message, please try reaching from email/gitHub/linkedIn"
        );
      }
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <Section id="contact">
      <ContactMeContent>
        <SectionTitle>Contact Me</SectionTitle>
        <Text>
          If you are interested in talking to me, I would love to hear from you.{" "}
          <br></br>
          Please send me a message below and I will respond swiftly!
        </Text>
        <FormContainer
          ref={form}
          name="contact"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <InputRow>
            <Name
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              onChange={handleChange}
              required
            />
            <Email
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </InputRow>
          <Message
            name="message"
            id="message"
            placeholder="Message"
            onChange={handleChange}
            rows="7"
            required
          />
          <Submit type="submit" value="Send Message" />
        </FormContainer>
        <Toaster />
      </ContactMeContent>
    </Section>
  );
};

export default Contact;
