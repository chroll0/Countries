import React, { useState } from "react";

interface CategoryProps {
  onSelectCategory: (category: string) => void;
  currentTheme: string;
}

const categoryData = [
  {
    name: "Filter by region",
    value: "",
  },
  {
    name: "Africa",
    value: "Africa",
  },
  {
    name: "Americas",
    value: "Americas",
  },
  {
    name: "Asia",
    value: "Asia",
  },
  {
    name: "Europe",
    value: "Europe",
  },
  {
    name: "Oceania",
    value: "Oceania",
  },
];

const Category: React.FC<CategoryProps> = ({
  onSelectCategory,
  currentTheme,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const category = event.target.value;
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <div
      className={`${
        currentTheme === "dark" ? "dark-elements" : "light-elements"
      }`}
    >
      <select
        name="Regions"
        className={`w-full py-3 px-6 outline-none cursor-pointer ${
          currentTheme === "dark" ? "dark-elements" : "light-elements"
        }`}
        id="categorySelect"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        {categoryData.map((region) => (
          <option key={region.name} value={region.value}>
            {region.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Category;
