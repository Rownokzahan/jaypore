import { BiCheckCircle } from "react-icons/bi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BsPatchCheck } from "react-icons/bs";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import ExpandableLinks from "./ExpandableLinks";
import SocialIcons from "../../SocialIcons";

const FooterMobile = () => {
  return (
    <>
      {/* Product guarantees and features */}
      <div className="flex items-center justify-center divide-x divide-[#4caf50] text-[#4caf50] text-center p-3">
        <div className="px-2 py-1">
          <BiCheckCircle className="mx-auto text-2xl" />
          <span className="text-xs mt-0">100% Authentic Products</span>
        </div>
        <div className="px-2 py-1">
          <RiSecurePaymentLine className="mx-auto text-2xl" />
          <span className="text-xs mt-0">Secure Payment</span>
        </div>
        <div className="px-2 py-1">
          <BsPatchCheck className="mx-auto text-2xl" />
          <span className="text-xs mt-0">Quality Checked</span>
        </div>
        <div className="px-2 py-1">
          <MdOutlineCurrencyExchange className="mx-auto text-2xl" />
          <span className="text-xs">10 Days Free Return</span>
        </div>
      </div>

      {/* Contact info and expandable links */}
      <div className="bg-[#f9eddf] text-dark-deep">
        <div className="px-5 py-8 space-y-4">
          <p>Questions?</p>
          <p className="font-semibold">Mail us at hello@jaypore.com</p>
        </div>

        <ExpandableLinks />

        {/* Copyright notice */}
        <div className="bg-background-light p-4 text-center">
          <p>© 2023 Jaypore, All rights Reserved.</p>
        </div>

        {/* Social media icons */}
        <div className="flex items-center justify-center gap-4 text-xl p-5">
          <SocialIcons />
        </div>
      </div>
    </>
  );
};

export default FooterMobile;
