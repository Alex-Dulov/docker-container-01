"use strict";

import gulp from "gulp";
import replace from "gulp-replace";

gulp.task("replace-html", () => {
    return gulp.src(["./build/**/*.html"])
        .pipe(replace(/"(\/local\/templates\/rarus\.light\/front\/build\/)*(\.{0,2}\/{0,1})*js\//g,
            "\"/local/templates/rarus.light/front/build/js/"))
        .pipe(replace(/"(\/local\/templates\/rarus\.light\/front\/build\/)*(\.{0,2}\/{0,1})*styles\//g,
            "\"/local/templates/rarus.light/front/build/styles/"))
        .pipe(replace(/"(\/local\/templates\/rarus\.light\/front\/build\/)*(\.{0,2}\/{0,1})*img\//g,
            "\"/local/templates/rarus.light/front/build/img/"))
        .pipe(replace(/\s(\/local\/templates\/rarus\.light\/front\/build\/)*(\.{0,2}\/{0,1})*img\//g,
            " /local/templates/rarus.light/front/build/img/"))
        .pipe(gulp.dest("./build"));
});
