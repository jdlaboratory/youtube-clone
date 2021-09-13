const express = require("express");
const app = express();

require("@babel/core").transform("code", {
    presets: ["@babel/preset-env"],
  });

  