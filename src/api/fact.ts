import { IFactResponse } from "../store/fact/interface";

export const fetchFacts = async () => {
  try {
    const response = await fetch("https://catfact.ninja/fact")
      .then((res) => {
        return res.json();
      })
      .then((data: IFactResponse) => {
        return data.fact;
      });
    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
