var gulp = require("gulp");

var mSrc = "./src/meta/*",
  mDst = "./docs/";

module.exports = function() {
  return gulp.src(mSrc).pipe(gulp.dest(mDst));
};
