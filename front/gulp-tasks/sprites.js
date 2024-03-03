"use strict";

import {paths} from "../gulpfile.babel";
import gulp from "gulp";
import svg from "gulp-svg-sprite";
import debug from "gulp-debug";
import browsersync from "browser-sync";
import gulpif from "gulp-if";
import yargs from "yargs";

const argv = yargs.argv,
    production = !!argv.production;

gulp.task("sprites", () => {
    return gulp.src(paths.sprites.src)
        .pipe(svg({
            shape: {
                dest: "intermediate-svg"
            },
            mode: {
                stack: {
                    sprite: "../sprite.svg"
                }
            }
        }))
        .pipe(gulpif(production, gulp.dest(paths.sprites.build), gulp.dest(paths.sprites.dist)))
        .pipe(debug({
            "title": "Sprites"
        }))
        .on("end", browsersync.reload);
});