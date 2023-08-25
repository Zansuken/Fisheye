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

export const getPhotographersImages = async (id) => {
  try {
    const formattedEndpoint = endpoints.PHOTOGRAPHERS_IMAGES.replace(
      "photographerId",
      id
    );
    const response = await fetch(formattedEndpoint);

    if (!response.ok) {
      throw new Error("Failed to fetch media");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPhotographersVideos = async (id) => {
  try {
    const formattedEndpoint = endpoints.PHOTOGRAPHERS_VIDEOS.replace(
      "photographerId",
      id
    );
    const response = await fetch(formattedEndpoint);

    if (!response.ok) {
      throw new Error("Failed to fetch media");
    }

    return response.url;
  } catch (error) {
    console.log(error);
  }
};

export const getPhotographersAvatar = async (id) => {
  try {
    const formattedEndpoint = endpoints.PHOTOGRAPHER_AVATAR.replace(
      "photographerId",
      id
    );
    const response = await fetch(formattedEndpoint);
    const data = await response.json().then((data) => data);
    if (!response.ok) {
      throw new Error("Failed to fetch avatar image");
    }

    return data.url;
  } catch (error) {
    console.log(error);
    return null; // Return null or handle the error as needed
  }
};

export const sendContactForm = async (id, formData, resetForm) => {
  try {
    const formattedEndpoint = endpoints.CONTACT.replace("photographerId", id);
    const response = await fetch(formattedEndpoint, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  } finally {
    resetForm();
  }
};
