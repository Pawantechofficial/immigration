"use client";
import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";
import Swal from "sweetalert2";
import { MdAttachEmail } from "react-icons/md";
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaLinkedinIn,
  FaPhone,
  FaSnapchat,
} from "react-icons/fa";

const Contact = () => {
  const [state, handleSubmit] = useForm("mzbnerze");
  if (state.succeeded) {
    Swal.fire({
      title: "Thanks!",
      text: "Your message sent successfully!",
      icon: "success",
    });
  }
  return (
    <section
      className="text-white bg-[#18191E] py-20 min-h-screen"
      id="contact"
    >
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Get In Touch
      </h2>
      <div className="grid md:grid-cols-2 my-12 md:my-12 py-4 gap-4 relative">
        {/* <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div> */}
        <div>
          {/* ############# */}
          <div className="lg:flex">
            <div>
              <h5 className="text-xl font-bold text-white my-2">
                <span className="text-blue-600">Let&apos;s</span>
                <span className="text-red-600"> Connect</span>
              </h5>
              <div className="text-[#ADB7BE] mb-4 max-w-md">
                {" "}
                <div className="flex py-2">
                  <MdAttachEmail className="text-white w-6 h-6 ml-2 mr-2" />
                  <Link
                    href="mailto:pawanofficial02@gmail.com"
                    className="text-white"
                  >
                    info@gmail.com
                  </Link>{" "}
                </div>
                <div className="flex py-2">
                  <FaWhatsapp className="text-green-600 w-6 h-6 ml-2 mr-2" />
                  <Link
                    href="https://wa.me/+918572822521"
                    className="text-white"
                  >
                    +91-9812498124
                  </Link>{" "}
                </div>
                <div className="flex py-2">
                  <FaPhone className="text-blue-600 w-6 h-6 ml-2 mr-2 " />
                  <Link href="tel:8882192787" className="text-white">
                    +91-9897969594
                  </Link>
                </div>
              </div>
            </div>
            {/* #########******** */}
            <div className="lg:pl-36">
              <h5 className="text-xl font-bold text-white my-2">
                <span className="text-blue-600">Our Branches</span>
              </h5>
              <div className="text-[#ADB7BE] mb-4 max-w-md">
                {" "}
                <div className="flex py-2">
                  <Link
                    href="https://maps.app.goo.gl/8Vi4v4KG7wfxysnD7"
                    className="text-white"
                  >
                    Sirsa, HR
                  </Link>{" "}
                </div>
                <div className="flex py-2">
                  <Link
                    href="https://maps.app.goo.gl/8Vi4v4KG7wfxysnD7"
                    className="text-white"
                  >
                    Rania, HR
                  </Link>{" "}
                </div>
                <div className="flex py-2">
                  <Link
                    href="https://maps.app.goo.gl/8Vi4v4KG7wfxysnD7"
                    className="text-white"
                  >
                    Ellenabad, HR
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* ################ */}
          <div className="overflow-hidden h-80 pb-1 relative">
            <h5 className="text-sm font-bold pb-2 text-white my-2">
              V.P.O Talwara Khurd, Ellenabad, Sirsa, Haryana 125102
            </h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472.8169738094675!2d74.6326852753008!3d29.49253714450929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3916bd209f309187%3A0x17cbb6c469f27803!2sEllenaTech%20Software%20Solutions!5e0!3m2!1sen!2sin!4v1706963728064!5m2!1sen!2sin"
              allowfullscreen=""
              className="border-0 h-[100%] w-[100%] sm:w-[80%] sm:px-2 absolute"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="socials flex flex-row gap-2 mb-8 justify-center sm:justify-start mt-6">
            <Link href="https://snapchat.com">
              <FaSnapchat className="text-yellow-500 hover:text-white w-11 h-11 ml-2 mr-2 " />
            </Link>
            <Link href="https://www.linkedin.com/in/pawanofficial/">
              <FaLinkedinIn className="text-blue-600 hover:text-white w-11 h-11  ml-2 mr-2" />
            </Link>
            <Link href="https://www.instagram.com/pawanofficial07">
              <FaInstagram className="text-[#d62976] hover:text-white w-11 h-11  ml-2 mr-2" />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=100016918660317">
              <FaFacebook className="text-blue-600 hover:text-white w-11 h-11  ml-2 mr-2" />
            </Link>
          </div>
        </div>
        <div>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="fullname"
                className="text-white block mb-2 text-sm font-medium"
              >
                Full Name
              </label>
              <input
                name="fullName"
                type="text"
                id="fullname"
                rows={1}
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Pawan Rai"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                rows={1}
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="example@gmail.com"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="number"
                className="text-white block text-sm mb-2 font-medium"
              >
                Phone
              </label>
              <input
                name="phone"
                type="phone"
                id="phone"
                rows={1}
                maxlength="10"
                minlength="10"
                required
                pattern="[6-9]{1}[0-9]{9}"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="9897969594"
              />
              <ValidationError
                prefix="Email"
                field="phone"
                errors={state.errors}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={6}
                className="bg-[#18191E] border resize-none border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="bg-blue-600 hover:bg-blue-400 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
