export function getSquareFromCoordinates(x, y) {
  let xValue = null;
  const proposedX = x.toLowerCase();
  switch (proposedX) {
    case 'left':
      xValue = 0;
      break;
    case 'center':
    case 'middle':
      xValue = 1;
      break;
    case 'right':
      xValue = 2;
      break;
    default:
      throw new Error('Unexpected x value');
  }

  let yValue = null;
  const proposedY = y.toLowerCase();
  switch (proposedY) {
    case 'top':
      yValue = 0;
      break;
    case 'center':
    case 'middle':
      yValue = 1;
      break;
    case 'bottom':
      yValue = 2;
      break;
    default:
      throw new Error('Unexpected y value');
  }
  return xValue + (yValue * 3);
}

export function doOther(x) {
  return x;
}
