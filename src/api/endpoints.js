export const BASE_URL = "http://localhost:8080";

export const endpoints = {
  PHOTOGRAPHERS: `${BASE_URL}/photographers`,
  PHOTOGRAPHER: `${BASE_URL}/photographers/`,
  PHOTOGRAPHERS_IMAGES: `${BASE_URL}/photographers/photographerId/images`,
  PHOTOGRAPHERS_VIDEOS: `${BASE_URL}/photographers/photographerId/videos`,
  PHOTOGRAPHER_AVATAR: `${BASE_URL}/photographers/photographerId/avatar`,
  CONTACT: `${BASE_URL}/contact/photographerId`,
};
