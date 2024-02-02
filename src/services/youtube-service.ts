import axios from "axios";

const API_KEY = process.env.API_KEY;

export const downloadMp3 = async (id: string) => {
  const options = {
    method: "GET",
    url: "https://youtube-mp36.p.rapidapi.com/dl",
    params: { id },
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return { response: response.data };
  } catch (error: any) {
    return { error: error.response.data };
  }
};
