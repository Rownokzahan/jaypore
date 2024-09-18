import { useState } from "react";
import Accordion from "../../components/accordion/Accordion";
import faqData from "../../data/faqData";

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState("General");

  const handleTabChange = (category) => {
    setActiveTab(category);
  };

  return (
    <>
      <h3 className="uppercase pb-4 my-8 border-b-4 border-dark-deep text-xl font-semibold">
        Frequently Asked Questions
      </h3>

      <div className="flex gap-4 pb-4 overflow-x-scroll md:overflow-auto">
        {faqData.map((data) => (
          <button
            key={data.category}
            className={`py-2 px-4 text-nowrap ${
              activeTab === data.category
                ? "bg-dark-deep text-dark-light"
                : "text-dark-deep"
            }`}
            onClick={() => handleTabChange(data.category)}
          >
            {data.category}
          </button>
        ))}
      </div>

      {faqData.map(
        (data) =>
          activeTab === data.category && (
            <Accordion
              key={data.category}
              items={data.faqs.map((faq) => ({
                title: faq.question,
                content: faq.answer,
              }))}
            />
          )
      )}
    </>
  );
};

export default FAQSection;
