"use strict";

import gulp from "gulp";
import replace from "gulp-replace";

gulp.task("replace-js", () => {
    return gulp.src(["./build/js/*.js"])
        .pipe(replace("img/sprites/sprite.svg", "local/templates/rarus.light/front/build/img/sprite.svg"))
        .pipe(gulp.dest("build/js/"));
});