import authReducer, { login, logout } from "../redux/slices/authSlice";
import { AuthState } from "../types/types";

const initialState: AuthState = {
  username: localStorage.getItem("username"),
  token: localStorage.getItem("token"),
};

const mockAuthData = {
  username: "testUser",
  token: "testToken123",
};

describe("authSlice", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should return the initial state", () => {
    expect(authReducer(undefined, { type: '' })).toEqual(initialState);
  });

  it("should handle login action and update the state", () => {
    const nextState = authReducer(
      initialState,
      login({ username: mockAuthData.username, token: mockAuthData.token })
    );

    expect(nextState.username).toBe(mockAuthData.username);
    expect(nextState.token).toBe(mockAuthData.token);

    expect(localStorage.getItem("username")).toBe(mockAuthData.username);
    expect(localStorage.getItem("token")).toBe(mockAuthData.token);
  });

  it("should handle logout action and clear the state", () => {
    const loggedInState: AuthState = {
      username: mockAuthData.username,
      token: mockAuthData.token,
    };

    const nextState = authReducer(loggedInState, logout());

    expect(nextState.username).toBeNull();
    expect(nextState.token).toBeNull();

    expect(localStorage.getItem("username")).toBeNull();
    expect(localStorage.getItem("token")).toBeNull();
  });

  it("should not mutate the initial state", () => {
    const nextState = authReducer(
      initialState,
      login({ username: mockAuthData.username, token: mockAuthData.token })
    );

    expect(initialState.username).toBeNull();
    expect(initialState.token).toBeNull();

    expect(nextState.username).toBe(mockAuthData.username);
    expect(nextState.token).toBe(mockAuthData.token);
  });
});
