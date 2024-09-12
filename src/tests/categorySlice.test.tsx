import categoryReducer, { loadCategories } from "../redux/slices/categorySlice";
import { CategoryState } from "../types/types";

const mockCategories: string[] = ["Electronics", "Furniture", "Clothing"];

const initialState: CategoryState = {
  items: [],
};

describe("categorySlice", () => {
  it("should return the initial state", () => {
    expect(categoryReducer(undefined, { type: '' })).toEqual(
      initialState
    );
  });

  it("should handle loadCategories action and update the state with payload", () => {
    const nextState = categoryReducer(
      initialState,
      loadCategories(mockCategories)
    );
    expect(nextState.items).toEqual(mockCategories);
  });

  it("should not mutate the initial state", () => {
   
    const nextState = categoryReducer(
      initialState,
      loadCategories(mockCategories)
    );
    expect(initialState).toEqual({ items: [] });
    expect(nextState.items).toHaveLength(3);
  });
});
