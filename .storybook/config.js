import { configure, setAddon, addDecorator } from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";
import { withKnobs } from "@storybook/addon-knobs/react";

const req = require.context("../src/", true, /.stories.js$/);
const WelcomeStory = require("./welcomeStory.js");

setAddon(JSXAddon);
addDecorator(withKnobs);

function loadStories() {
  WelcomeStory;
  req.keys().forEach(file => req(file));
}

configure(loadStories, module);
