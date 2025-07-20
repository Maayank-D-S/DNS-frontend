import React from "react";

const priceData = [
  { type: "Ultimate", size: "350 sq. yds", price: "₹ 2.89 Cr+*" },
  { type: "Supreme", size: "450 sq. yds", price: "₹ 3.69 Cr+*" },
  { type: "Presidential", size: "600 sq. yds", price: "₹ 5.29 Cr+*" },
];

const PriceList = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {priceData.map((item, index) => (
        <div key={index} className="flex justify-between items-center py-6 border-b">
          <span className="text-lg md:text-xl text-gray-800">
            {item.type} {item.size}
          </span>
          <span className="text-lg md:text-xl font-medium text-gray-900">
            {item.price}
          </span>
        </div>
      ))}
    </section>
  );
};

export default PriceList;
