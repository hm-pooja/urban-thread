import { loadProducts } from "../redux/slices/productSlice";
import productReducer from "../redux/slices/productSlice";
import { ProductsState, Product } from "../types/types";

const mockProducts: Product[] = [
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
];

const initialState: ProductsState = {
  products: [],
};

describe("productsSlice", () => {
  it("should return the initial state", () => {
    expect(productReducer(undefined, { type: '' })).toEqual(
      initialState
    );
  });

  it("should handle loadProducts action and update the state with payload", () => {
    const nextState = productReducer(initialState, loadProducts(mockProducts));
    expect(nextState.products).toEqual(mockProducts);
  });

  it("should not mutate the initial state", () => {
    const nextState = productReducer(initialState, loadProducts(mockProducts));
    expect(initialState).toEqual({ products: [] });
    expect(nextState.products).toHaveLength(2);
  });
});
