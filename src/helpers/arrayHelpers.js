/**
 * @param {Array} mediaToSort - Array of media objects
 * @param {String} videoUrl - Url of video to be used for all video media
 * @returns {Array} - Array of media objects with updated type and url
 * @description - Takes an array of media objects and a video url and returns an array of media objects with updated type and url
 **/
export const formatMediaArray = (mediaToSort, videoUrl) =>
  mediaToSort?.map((media) => {
    const updatedMedia = media;

    if (media.video) {
      updatedMedia.type = "video";
      if (videoUrl) {
        updatedMedia.url = videoUrl;
      }
    } else {
      updatedMedia.type = "image";
    }
    return updatedMedia;
  });
