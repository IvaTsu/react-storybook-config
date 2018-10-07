import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs/react";
import { wInfo } from "../.storybook/utils";
import Button from "./Button";

storiesOf("Button", module).addWithJSX(
  "with background",
  wInfo("description of the Button component")(() => (
    <Button bg={text("bg", "red")} title="Button" />
  ))
);
