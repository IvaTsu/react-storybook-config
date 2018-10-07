import { configure } from "@storybook/react";

const req = require.context("../src/", true, /.stories.js$/);
const WelcomeStory = require("./welcomeStory.js");

function loadStories() {
  WelcomeStory;
  req.keys().forEach(file => req(file));
}

configure(loadStories, module);
