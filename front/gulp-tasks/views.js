"use strict";

import {paths} from "../gulpfile.babel";
import gulp from "gulp";
import include from "gulp-file-include";
import gulpif from "gulp-if";
import replace from "gulp-replace";
import browsersync from "browser-sync";
import yargs from "yargs";

const argv = yargs.argv,
    production = !!argv.production;

gulp.task("view", () => {
    return gulp.src(paths.views.src)
        .pipe(include({
            prefix: "@@",
            basepath: "@file"
        }))
        .pipe(gulpif(production, replace(".css", ".min.css")))
        .pipe(gulpif(production, replace(/([a-z0-9-!])\.js/g, (match) => {
            return match.substr(0, 1) + ".min" + match.substr(1, 3);
        })))
        .pipe(gulpif(production, gulp.dest(paths.views.build), gulp.dest(paths.views.dist)))
        .pipe(browsersync.stream());
});

gulp.task("views", gulp.series("view", "replace-html"));