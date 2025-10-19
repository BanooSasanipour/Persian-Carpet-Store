// import React from "react";
// import { Link } from "react-router-dom";

// import "./Home.css";
// import CategoryList from "../components/CategoryList";
// import FeaturedProducts from "../components/FeaturedProducts";
// import { IoSearch } from "react-icons/io5";



// export default function Home() {
//   return (
//     <cantainer className="container">
//       <div className="homePage">
//       <div className="heroSection">
//         <h1>Willkommen im Persian Carpet Store.</h1>
//         <p>Bereit für die Pracht persischer Teppiche zu sehen?</p>
//         <div className="searchArea">
//           <IoSearch className="searchAreaIcon"/>
//           <input className="searchAreaInput" type="text" placeholder="Suche nach Produkten..." />
//         </div>
//         <Link to="/shop">
//           <button className="shopButton">Jetzt einkaufen</button>
//         </Link>
//       </div>
//       </div>
//       <CategoryList className="categoryList" />
//       <FeaturedProducts className="featureProducts" />
    
      
//     </cantainer>
    
//   );
// }

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

import "./Home.css";
import CategoryList from "../components/CategoryList";
import FeaturedProducts from "../components/FeaturedProducts";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="container">
      <div className="homePage">
        <div className="heroSection">
          <h1>Willkommen im Persian Carpet Store.</h1>
          <p>Bereit für die Pracht persischer Teppiche zu sehen?</p>
          <div className="searchArea">
            <IoSearch className="searchAreaIcon" onClick={handleSearch} />
            <input
              className="searchAreaInput"
              type="text"
              placeholder="Suche nach Produkten..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
          </div>
          <Link to="/shop">
            <button className="shopButton">Jetzt einkaufen</button>
          </Link>
        </div>
      </div>
      <CategoryList className="categoryList" />
      <FeaturedProducts className="featureProducts" />
    </div>
  );
}