// include gulp
var gulp = require("gulp");

// Individual tasks
gulp.task("clean", require("./gulp-tasks/clean"));
gulp.task("img", require("./gulp-tasks/img"));
gulp.task("html", require("./gulp-tasks/html"));
gulp.task("javascript", require("./gulp-tasks/javascript"));
gulp.task("moving", require("./gulp-tasks/moving"));
gulp.task("sass", require("./gulp-tasks/sass"));
gulp.task("svg", require("./gulp-tasks/svg"));
gulp.task("watch", require("./gulp-tasks/watch"));

// Globs
gulp.task(
  "build",
  gulp.series(["clean", "html", "sass", "javascript", "moving", "svg", "img"])
);
gulp.task(
  "devl",
  gulp.series([
    "clean",
    "html",
    "sass",
    "javascript",
    "moving",
    "svg",
    "img",
    "watch"
  ])
);

// Default task
gulp.task("default", gulp.series("devl"));
