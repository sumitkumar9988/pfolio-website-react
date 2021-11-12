let api;
if (process.env.REACT_APP_NODE_ENV === "production") {
  api = "https://api.sumitk.site/api/v1";
} else {
  api = "http://localhost:3000/api/v1";
}

export default api;