import { withInfo } from "@storybook/addon-info";

const withInfoStyle = {
  header: {
    h1: {
      marginRight: "2rem",
      fontSize: "1.5rem",
      display: "inline"
    },
    body: {
      padding: 0
    },
    h2: {
      display: "inline"
    }
  },
  infoBody: {
    backgroundColor: "#EEE"
  }
};

export const wInfo = text =>
  withInfo({ text, inline: true, source: false, styles: withInfoStyle });
