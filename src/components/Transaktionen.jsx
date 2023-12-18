import React from "react";
import Elemente from "./Elemente";
import "./fonts/fonts.css";
import "./Transaktionen.css";

const elemente = [
  {
    // categoryIcon,
    name: "Fernseher",
    category: "Technik",
    date: "16.12.2023",
    amount: "-250.55€",
  },
  {
    // categoryIcon,
    name: "iPhone 15 Pro",
    category: "Technik",
    date: "16.12.2023",
    amount: "-1199.00€",
  },
  {
    // categoryIcon,
    name: "Einkauf",
    category: "Lebensmittel",
    date: "15.12.2023",
    amount: "-80.35€",
  },
  {
    // categoryIcon,
    name: "Gehalt",
    category: "Gehalt",
    date: "14.12.2023",
    amount: "3500.00€",
  },

  {
    // categoryIcon,
    name: "Pizza",
    category: "Essen",
    date: "12.12.2023",
    amount: "-25.55€",
  },
  {
    // categoryIcon,
    name: "Einkauf",
    category: "Lebensmittel",
    date: "10.12.2023",
    amount: "-80.35€",
  },
  {
    // categoryIcon,
    name: "Freddy",
    category: "Sonstiges",
    date: "07.12.2023",
    amount: "-90.00€",
  },
  {
    // categoryIcon,
    name: "Einkauf",
    category: "Lebensmittel",
    date: "01.12.2023",
    amount: "-80.35€",
  },
];

const Transaktionen = () => {
  return (
    <div className="box">
      {elemente.map((item, index) => {
        return (
          <Elemente
            // categoryIcon={item.categoryIcon}
            name={item.name}
            category={item.category}
            date={item.date}
            amount={item.amount}
            key={index}
          ></Elemente>
        );
      })}
    </div>
  );
};

export default Transaktionen;
