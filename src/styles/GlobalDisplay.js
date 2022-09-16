import { setResponsiveStyles } from "../utils/styleUtils";

const GlobalDisplay = `
  .d-sm-hide {
    ${setResponsiveStyles(`
      display: none;
    `)}
  }
`

export default GlobalDisplay;