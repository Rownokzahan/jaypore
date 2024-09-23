import Accordion from "../../../components/accordion/Accordion";

const ProductDetails = () => {
  return (
    <Accordion
      items={[
        {
          title: "Product Details",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis exercitationem cumque aliquid aut id nostrum nemo delectus porro ea eius a, dolore esse quas accusantium quia quae! Mollitia, officiis a.",
        },
        {
          title: "Product Disclosure",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis exercitationem cumque aliquid aut id nostrum nemo delectus porro ea eius a, dolore esse quas accusantium quia quae! Mollitia, officiis a.",
        },
      ]}
    />
  );
};

export default ProductDetails;