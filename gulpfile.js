const { src, dest, series, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const mincss = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const soucemaps = require("gulp-sourcemaps");
const terser = require("gulp-terser");
const babel = require("gulp-babel");
const concat = require("gulp-concat");

const cssPath = {
  src: "./src/scss/**/*.scss",
  dest: "./dest/css",
};

const jsPath = {
  modules: "./src/js/modules/**/*.js",
  concat: "./src/js/",
  src: "./src/js/*.js",
  dest: "./dest/js",
};

function mimifyCss() {
  return src(cssPath.src)
    .pipe(soucemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer("last 2 versions"))
    .pipe(mincss())
    .pipe(soucemaps.write())
    .pipe(dest(cssPath.dest));
}

function concatJsFiles() {
  return src(jsPath.modules).pipe(concat("script.js")).pipe(dest(jsPath.concat));
}

function mimifyJs() {
  return src(jsPath.src)
    .pipe(soucemaps.init())
    .pipe(babel({ presets: [["@babel/env", { modules: false }]] }))
    .pipe(terser())
    .pipe(soucemaps.write())
    .pipe(dest(jsPath.dest));
}

function watchTask() {
  watch(cssPath.src, mimifyCss);
  watch(jsPath.modules, concatJsFiles);
  watch(jsPath.src, mimifyJs);
}

exports.default = series(mimifyCss, concatJsFiles, mimifyJs, watchTask);
