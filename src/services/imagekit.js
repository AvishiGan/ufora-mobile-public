import ImageKit from "imagekit-javascript";
import {
  urlEndpoint,
  publicKey,
  //   authenticationEndpoint,
} from "./config/imagekit";

const imagekit = new ImageKit({
  publicKey,
  urlEndpoint,
  //   authenticationEndpoint,
});

/**
 * To create a URL from the image source (full image URL) and transformation array
 */
module.exports.getImagekitUrlFromSrc = function (imageSrc, transformationArr) {
  var ikOptions = {
    src: imageSrc,
    transformation: transformationArr,
  };
  var imageURL = imagekit.url(ikOptions);

  return imageURL;
};

/**
 * To create a URL from the image path (relative to the URL endpoint) and transformation array
 */
module.exports.getImagekitUrlFromPath = function (
  imagePath,
  transformationArr,
  transformationPostion
) {
  var ikOptions = {
    urlEndpoint,
    path: imagePath,
    transformation: transformationArr,
  };
  if (transformationPostion)
    ikOptions.transformationPostion = transformationPostion;

  var imageURL = imagekit.url(ikOptions);

  return imageURL;
};

export default imagekit;
