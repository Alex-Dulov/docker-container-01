"use strict";

import gulp from "gulp";

const requireDir = require("require-dir"),
    paths = {
        views: {
            src: [
                "./src/views/**/*.html",
            ],
            dist: "./dist/",
            build: "./build/",
            watch: [
                "./src/blocks/**/*.html",
                "./src/views/**/*.html"
            ]
        },
        styles: {
            src: ["./src/styles/main.{scss,sass}","./src/styles/pages/**/*.{scss,sass}"],
            dist: "./dist/styles/",
            build: "./build/styles/",
            watch: [
                "./src/blocks/**/*.{scss,sass}",
                "./src/styles/**/*.{scss,sass}"
            ]
        },
        scripts: {
            src: "./src/js/index.js",
            dist: "./dist/js/",
            build: "./build/js/",
            watch: [
                "./src/blocks/**/*.js",
                "./src/js/**/*.js"
            ]
        },
        images: {
            src: [
                "./src/img/**/*.{jpg,jpeg,png,gif,tiff,svg}",
                "!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}"
            ],
            dist: "./dist/img/",
            build: "./build/img/",
            watch: "./src/img/**/*.{jpg,jpeg,png,gif,svg,tiff}"
        },
        webp: {
            src: [
                "./src/img/**/*.{jpg,jpeg,png,tiff}",
                "!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}"
            ],
            dist: "./dist/img/",
            build: "./build/img/",
            watch: [
                "./src/img/**/*.{jpg,jpeg,png,tiff}",
                "!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}"
            ]
        },
        sprites: {
            src: "./src/img/svg/*.svg",
            dist: "./dist/img/sprites/",
            build: "./build/img/sprites/",
            watch: "./src/img/svg/*.svg"
        },
        fonts: {
            src: "./src/fonts/**/*.{woff,woff2,ttf}",
            dist: "./dist/fonts/",
            build: "./build/fonts/",
            watch: "./src/fonts/**/*.{woff,woff2,ttf}"
        },
        favicons: {
            src: "./src/img/favicon/*.{jpg,jpeg,png,gif,ico}",
            dist: "./dist/img/favicons/",
            build: "./build/img/favicons/",
        }
    };

requireDir("./gulp-tasks/");

export {paths};

export const development = gulp.series("clean",
    gulp.parallel(["views", "styles", "scripts", "images", "webp", "sprites", "fonts"]),
    gulp.parallel("serve"));

export const prod = gulp.series("clean",
    gulp.series(["views", "styles", "scripts", "images", "webp", "sprites", "fonts", "favicons", "replace-js"]));

export default development;
