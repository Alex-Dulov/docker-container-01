"use strict";

import {paths} from "../gulpfile.babel";
import gulp from "gulp";
import debug from "gulp-debug";
import yargs from "yargs";
import gulpif from "gulp-if";

const argv = yargs.argv,
    production = !!argv.production;

gulp.task("fonts", () => {
    return gulp.src(paths.fonts.src)
        .pipe(gulpif(production, gulp.dest(paths.fonts.build), gulp.dest(paths.fonts.dist)))
        .pipe(debug({
            "title": "Fonts"
        }));
});
