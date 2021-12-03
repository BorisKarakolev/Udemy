import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID U8K9rdWnIj3-jYpetA86qeoV7PFH7EYhYAYnM72cH3A",
  },
});
