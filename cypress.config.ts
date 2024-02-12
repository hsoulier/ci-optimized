import { defineConfig } from "cypress"

export default defineConfig({
  e2e: {
    env: {NEXT_PUBLIC_ENV: "e2e"},
    baseUrl: "http://localhost:3000",
    testIsolation: true, 
    setupNodeEvents: () => {}
  },
  component: {
    env: {NEXT_PUBLIC_ENV: "component"},
    devServer: {
      framework: "next",
      bundler: "webpack"
    },
  }
})
