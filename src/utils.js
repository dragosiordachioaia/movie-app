export function getImagePath(imageID, config) {
  if (!config) {
    return null;
  }

  return `${config.base_url}${config.poster_sizes[4]}${imageID}`;
}
