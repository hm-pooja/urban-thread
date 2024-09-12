// src/__mocks__/mockData.ts

import { Product } from "../types/types";

// Mock product data
export const mockProducts: Product[] = [
  {
    id: 1,
    title: "Product 1",
    price: 10,
    description: "Description 1",
    image: "",
    category: "Category 1",
  },
  {
    id: 2,
    title: "Product 2",
    price: 20,
    description: "Description 2",
    image: "",
    category: "Category 2",
  },
  // Add more mock products if needed
];

// Mock category data
export const mockCategories: string[] = [
  "Category 1",
  "Category 2",
  "Category 3",
  // Add more mock categories if needed
];
