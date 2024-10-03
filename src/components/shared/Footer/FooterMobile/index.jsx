import { BiCheckCircle } from "react-icons/bi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BsPatchCheck } from "react-icons/bs";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import ExpandableLinks from "./ExpandableLinks";
import SocialIcons from "../../SocialIcons";

// Data for guarantees and features
const guarantees = [
  { Icon: BiCheckCircle, label: "100% Authentic Products" },
  { Icon: RiSecurePaymentLine, label: "Secure Payment" },
  { Icon: BsPatchCheck, label: "Quality Checked" },
  { Icon: MdOutlineCurrencyExchange, label: "10 Days Free Return" },
];

const FooterMobile = () => {
  return (
    <footer>
      {/* Product guarantees and features */}
      <div
        className="container text-success text-center divide-x divide-success"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${guarantees.length}, 1fr)`,
        }}
      >
        {guarantees.map((item, index) => (
          <div key={index} className="px-2">
            <item.Icon className="mx-auto text-2xl mb-1" />
            <p className="text-xs mt-0">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Contact info and expandable links */}
      <div className="text-dark-deep mt-4">
        <div className="container !mt-0 py-5 bg-[#f9eddf]">
          <p className="mb-2">Questions?</p>
          <p className="font-semibold">Mail us at hello@jaypore.com</p>
        </div>

        <ExpandableLinks />

        {/* Copyright notice */}
        <div className="container !mt-0 bg-background-light py-4 text-center">
          <p>© 2023 Jaypore, All rights Reserved.</p>
        </div>

        {/* Social media icons */}
        <div className="container !mt-0 bg-[#f9eddf] flex items-center justify-center gap-4 text-xl p-5">
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
};

export default FooterMobile;
