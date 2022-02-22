export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

import packageJson from "../package.json";

export const globalTypes = {
  packageJson: {
    name: "PackageJson",
    description: "Storybook package json",
    defaultValue: packageJson,
  },
  library: {
    name: "Library",
    description: "library",
    defaultValue: {
      name: "Charts",
      description:
        "Recharts makes it easy to integrate charts into your React application.",
      short_description: "Based on Recharts React library.",
      thumbnail_url:
        "https://animaapp.s3.amazonaws.com/widgets/charts-symbol.svg",
      empty_thumb_url:
        "https://animaapp.s3.amazonaws.com/widgets/charts-symbol.svg",
      sample_file_figma_url:
        "https://www.figma.com/community/file/1029805611065950381",
    },
  },
};
