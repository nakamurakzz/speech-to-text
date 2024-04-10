"use server";
import axios from "axios";

export const GetText = async () => {
  try {
    const response = await axios.get("/api/translate");
    const data = response.data as { i: { d: string }[] };

    let text = "";
    data.i.forEach((item) => {
      text += decodeURIComponent(item.d).replace(/\%08/g, "");
    });

    console.log({ text });

    return text;
  } catch (error) {
    console.error("Error fetching translation:", error);
  }
};
