var gulp = require("gulp");
var imagemin = require("gulp-imagemin");
var size = require("gulp-size");

var imgSrc = "./src/assets/img/**/*",
  imgDst = "./docs/assets/img";
var imgCopy = "./src/assets/img/**/*.svg",
  imgCopyDst = "./docs/assets/img";

module.exports = function() {
  const task1 = gulp
    .src(imgSrc)
    .pipe(imagemin())
    .pipe(size({ title: "IMG" }))
    .pipe(gulp.dest(imgDst));

  const task2 = gulp.src(imgCopy).pipe(gulp.dest(imgCopyDst));

  return Promise.all([task1, task2]);
};
