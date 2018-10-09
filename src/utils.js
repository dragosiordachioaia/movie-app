export function getImagePath(imageID, config) {
  if (!config) {
    return null;
  }

  return `${config.base_url}${config.poster_sizes[4]}${imageID}`;
}

export function roundToStep(amount, step) {
  step = 1 / step;
  return (Math.round(amount * step) / step).toFixed(2);
}
