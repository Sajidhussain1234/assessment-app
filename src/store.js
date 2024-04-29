import create from "zustand";

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (isAuth) => set({ isAuthenticated: isAuth }),
  user: null,
  setUser: (userData) => set({ user: userData }),
}));

export default useAuthStore;
