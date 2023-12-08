import axios from "axios";

export const getData = async () => {
  try {
    const res = await axios.get(
      "https://spe-academy.spesolution.com/api/recruitment",
      {
          headers: {
              Authorization: `Bearer o7Ytbt9XQLI3PgtebJfKSXKEf0XHU74Y`
          },
      }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};
