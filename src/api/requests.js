import { endpoints } from "./endpoints";

export const getPhotographers = async () => {
  try {
    const response = await fetch(endpoints.PHOTOGRAPHERS);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPhotographer = async (id) => {
  try {
    const response = await fetch(`${endpoints.PHOTOGRAPHER}${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPhotographersPhotos = async (id) => {
  try {
    const formattedEndpoint = endpoints.PHOTOGRAPHERS_PHOTOS.replace(
      "photographerId",
      id
    );
    const response = await fetch(formattedEndpoint);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
