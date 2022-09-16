export function setPadding({ size }) {
  if (!size) {
    return "10px";
  }

  if (size === "large") {
    return "30px";
  }

  return "15px";
}

export function setFontWeight({ strong, bold }) {
  if (strong) {
    return 500;
  }

  if (bold) {
    return 700;
  }

  return 400;
}

export function setResponsiveStyles(content) {
  if (!content) {
    return;
  }

  const nonRetinaScreen = `
    @media screen 
      and (min-device-width: 1200px) 
      and (max-device-width: 1600px) 
      and (-webkit-min-device-pixel-ratio: 1) { 
        ${content};
    }
  `;

  const retinaScreen = `
    @media screen 
      and (min-device-width: 1200px) 
      and (max-device-width: 1600px) 
      and (-webkit-min-device-pixel-ratio: 2)
      and (min-resolution: 192dpi) { 
        ${content};
    }
  `;

  return `
    ${nonRetinaScreen};
    ${retinaScreen};
  `;
}
