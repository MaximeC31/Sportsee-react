export const getFetcher = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error("Une erreur est survenue", e.message);
  }
};
