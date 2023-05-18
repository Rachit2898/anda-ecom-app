module.exports = ({ config }) => {
  if (process.env.APP_ENV === "production") {
    const appConfig = {
      ...config,
      extra: {
        fact: "production",
        eas: {
          projectId: "e24f0c42-a912-4f7d-a87a-7816df46bf87",
        },
      },
    };
    return appConfig;
  } else {
    const appConfig = {
      ...config,
      extra: {
        fact: "staging",
        eas: {
          projectId: "e24f0c42-a912-4f7d-a87a-7816df46bf87",
        },
      },
    };
    return appConfig;
  }
};
