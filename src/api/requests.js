import { formatMediaArray } from "../helpers/arrayHelpers";
import { currentRoute, isPhotoGrapherRoute } from "../router";
import { endpoints } from "./endpoints";

/**
 * @returns {Array} - Array of photographer objects
 * @description - Fetches photographers from API
 **/
export const getPhotographers = async () => {
  try {
    const response = await fetch(endpoints.PHOTOGRAPHERS);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

/**
 * @param {Number} id - Photographer id
 * @returns {Object} - Photographer object
 * @description - Fetches photographer from API
 **/
export const getPhotographer = async (id) => {
  try {
    const response = await fetch(`${endpoints.PHOTOGRAPHER}${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

/**
 * @param {Number} id - Photographer id
 * @returns {Array} - Array of media objects
 * @description - Fetches media from API
 **/
export const getPhotographerMedia = async (id) => {
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
    console.error(error);
  }
};

/**
 * @param {Number} id - Photographer id
 * @returns {String} - Video url
 * @description - Fetches video from API
 **/
export const getPhotographerVideoUrl = async (id) => {
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
    console.error(error);
  }
};

/**
 * @param {Number} id - Photographer id
 * @param {Boolean} isFirstFetch - Determines if video url should be fetched
 * @returns {Array} - Array of media objects
 * @description - Fetches media from API and formats it
 **/
export const getPhotographersMedia = async (id, isFirstFetch) => {
  try {
    if (isPhotoGrapherRoute(currentRoute())) {
      const media = await getPhotographerMedia(id);
      const videoUrl = isFirstFetch && (await getPhotographerVideoUrl(id));

      return formatMediaArray(media, videoUrl);
    }
  } catch (error) {
    console.error(error);
  }
};

/**
 * @param {Number} id - Photographer id
 * @returns {String} - Avatar url
 * @description - Fetches avatar from API
 **/
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
    console.error(error);
    return null; // Return null or handle the error as needed
  }
};

/**
 * @param {Number} id - Photographer id
 * @param {Object} formData - Form data
 * @param {Function} resetForm - Reset form function
 * @returns {Object} - Response object
 * @description - Sends contact form data to API
 **/
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
    console.error(error);
  } finally {
    resetForm();
  }
};

/**
 * @param {Number} mediaId - Media id
 * @param {String} sessionId - Session id
 * @returns {Object} - Response object
 * @description - Updates media likes
 **/
export const updateMediaLikes = async (mediaId, sessionId) => {
  try {
    const formattedEndpoint = endpoints.MEDIA_LIKES.replace(
      "mediaId",
      mediaId
    ).replace("sessionId", sessionId);
    const response = await fetch(formattedEndpoint, {
      method: "PUT",
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
