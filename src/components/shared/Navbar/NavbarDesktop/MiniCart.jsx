import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const CartItem = ({
  href,
  imgSrc,
  imgAlt,
  title,
  brand,
  name,
  price,
  size,
  qty,
}) => (
  <li className="grid grid-cols-3 gap-4 py-3">
    <div>
      <a href={href} target="_blank" rel="noopener noreferrer" title={title}>
        <img src={imgSrc} alt={imgAlt} className="w-full h-full object-cover" />
      </a>
    </div>

    <div className="col-span-2 text-xs relative">
      <ul className="space-y-2">
        <p className="font-bold me-6">{brand}</p>
        <p>{name}</p>

        <p className="font-semibold">{price}</p>
        <p className="space-x-2 text-dark">
          <span>Size: {size}</span>
          <span>Qty: {qty}</span>
        </p>
      </ul>
      <button className="text-lg absolute top-0 right-1">
        <RiDeleteBinLine />
      </button>
    </div>
  </li>
);

const MiniCart = () => {
  const items = [
    {
      href: "/p/men-black-silk-embellished-mandarin-collar-regular-fit-kurta-39605910.html?page=1",
      imgSrc:
        "https://imagescdn.jaypore.com/img/app/product/3/39605910-12246161.jpg?w=200&auto=format",
      imgAlt: "Men Black Silk Mandarin Collar Regular Fit Kurta",
      title: "Men Black Silk Mandarin Collar Regular Fit Kurta",
      brand: "Raw & Rustic by Niti Bothra",
      name: "Men Black Silk Mandarin Collar Regular Fit Kurta",
      price: "₹ 12,990.00",
      size: "XXL",
      qty: 1,
    },
    {
      href: "/p/men-black-silk-embellished-mandarin-collar-regular-fit-kurta-39605910.html?page=1",
      imgSrc:
        "https://imagescdn.jaypore.com/img/app/product/3/39605910-12246161.jpg?w=200&auto=format",
      imgAlt: "Men Black Silk Mandarin Collar Regular Fit Kurta",
      title: "Men Black Silk Mandarin Collar Regular Fit Kurta",
      brand: "Raw & Rustic by Niti Bothra",
      name: "Men Black Silk Mandarin Collar Regular Fit Kurta",
      price: "₹ 12,990.00",
      size: "S",
      qty: 1,
    },
    {
      href: "/p/women-silver-hook-silver-anklets-39599059.html?page=1",
      imgSrc:
        "https://imagescdn.jaypore.com/img/app/product/3/39599059-11970602.jpg?w=200&auto=format",
      imgAlt: "Women Silver Hook Silver Anklets",
      title: "Women Silver Hook Silver Anklets",
      brand: "Jaypore",
      name: "Women Silver Hook Silver Anklets",
      price: "₹ 12,580.00",
      size: "Free Size",
      qty: 2,
    },
    {
      href: "/p/multicolour-ceramic-hand-painted-mug-39575462.html?page=1",
      imgSrc:
        "https://imagescdn.jaypore.com/img/app/product/3/39575462-11314630.jpg?w=200&auto=format",
      imgAlt: "Multicolour Ceramic Hand Painted Mug",
      title: "Multicolour Ceramic Hand Painted Mug",
      brand: "Jaypore",
      name: "Multicolour Ceramic Hand Painted Mug",
      price: "₹ 990.00",
      size: "Free Size",
      qty: 1,
    },
  ];

  const total = items.reduce(
    (sum, item) => sum + parseFloat(item.price.replace(/[₹,]/g, "")),
    0
  );

  return (
    <div className="hidden group-hover:block absolute w-80 p-3  top-8 -right-2 z-50 border border-dark-light bg-background-light">
      <div className="relative">
        <ul className="h-96 overflow-y-auto divide-y divide-dark-light">
          {items.map((item, idx) => (
            <CartItem key={idx} {...item} />
          ))}
        </ul>
        <div className="w-full pt-2 bg-background-light">
          <p className="pt-2 border-t border-dark-light flex justify-center gap-1 font-semibold text-lg">
            <span>Total payable:</span>
            <span>₹ {total}</span>
          </p>
          <Link to={`cart`} className="btn-primary uppercase block mt-4">
            Checkout
          </Link>
        </div>

        <div className="pt-3 w-3 absolute right-0 -top-[31px] z-10 ">
          <div className="w-3 h-3 bg-background-light border border-e-0 border-b-0 border-dark-light rotate-45"></div>
        </div>
      </div>
    </div>
  );
};

export default MiniCart;
