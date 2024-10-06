import { Link } from "react-router-dom";
import FAQSection from "./FAQSection";
import ContactUsSection from "./ContactUsSection";
import InfoSideBar from "./InfoSideBar";

const CustomerSupport = () => {
  return (
    <div className="container !mt-2 lg:!mt-6">
      {/* Breadcrumb  */}
      <div className="mb-6">
        <ul className="flex gap-2 divide-dark text-dark">
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          {">"}
          <li className="text-dark-deep">
            <Link to={`customer-support`}>Customer Support</Link>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3">
          <ContactUsSection />
          <FAQSection />
        </div>

        <div className="lg:col-span-2">
          <InfoSideBar />
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
