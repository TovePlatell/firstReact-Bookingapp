export const setUser = (value) => {
    localStorage.setItem("jwt", value)
}

export const getUser = () => {
  try {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      return jwt;
    }
  } catch (err) {}
  return [];
};