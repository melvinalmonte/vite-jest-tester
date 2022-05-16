module.exports = {
  collectCoverage: true,
  coverageReporters: ["json", "html"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  collectCoverageFrom: [
    "src/**/*.{ts,tsx,js,jsx}",
    "!src/**/*.d.ts",
    "!src/main.tsx",
  ],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  },
};
