export function getImagePath(imageID, config) {
  if (!config) {
    return null;
  }

  return `${config.secure_base_url}${config.poster_sizes[4]}${imageID}`;
}

export function roundToStep(amount, step) {
  step = 1 / step;
  let returnValue = Math.round(amount * step) / step;
  if (Math.floor(returnValue) === returnValue) {
    return Math.floor(returnValue);
  }
  return returnValue.toFixed(1);
}
