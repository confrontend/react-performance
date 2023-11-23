import React, { useState, useMemo } from "react";

const products = [
  { id: 1, name: "Laptop", category: "Electronics" },
  { id: 2, name: "Shirt", category: "Clothing" },
  { id: 3, name: "Coffee Mug", category: "Kitchen" },
  // ... more products
];

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Memoize the filtered list
  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - {product.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
