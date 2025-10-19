import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CategoryList.css";

const categories = [
  { name: "Klassiker", image: "/images/Carpet/klasik1.webp", image2: "/images/Carpet/klasik2.webp" },
  { name: "Fantasie", image: "/images/Carpet/fantezi1.webp", image2: "/images/Carpet/fantezi2.webp" },
  { name: "Kinder", image: "/images/Carpet/kinder1.webp", image2: "/images/Carpet/kinder2.webp" },
  { name: "Küche", image: "/images/Carpet/kuche1.webp", image2: "/images/Carpet/kuche2.webp" },
];

export default function CategoryList() {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleClick = (category) => {
    navigate(`/shop?category=${category}`);
  };

  return (
    <div className="categoryList">
      <h2>Produkte nach Kategorie</h2>
      <div className="categoryGrid">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="categoryCard"
            onClick={() => handleClick(cat.name)}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              className="categoryCardImg"
              src={hoveredIndex === i ? cat.image2 : cat.image}
              alt={cat.name}
            />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}