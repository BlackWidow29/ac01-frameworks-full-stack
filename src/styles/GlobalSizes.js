import { setResponsiveStyles } from "../utils/styleUtils";

export const GlobalSizes = `
  .w-100 {
    width: 100%;
  }

  .w-90 {
    width: 90%;
  }

  .w-75 {
    width: 75%;
  }

  .w-50 {
    width: 50%;
  }

  .h-100 {
    height: 100%;
  }

  .h-90 {
    height: 90%;
  }

  .h-75 {
    height: 75%;
  }

  .h-50 {
    height: 50%;
  }
`;

export const GlobalLaptopSizes = `
  ${setResponsiveStyles(`
    .w-sm-100 {
      width: 100%;
    }

    .w-sm-90 {
      width: 90%;
    }

    .w-sm-75 {
      width: 75%;
    }

    .w-sm-50 {
      width: 50%;
    }

    .h-sm-100 {
      height: 100%;
    }

    .h-sm-90 {
      height: 90%;
    }

    .h-sm-75 {
      height: 75%;
    }

    .h-sm-50 {
      height: 50%;
    }
  `)}
`;