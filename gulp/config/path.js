import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        images: `${buildFolder}/img/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/`,
    },
    src: {
        js: `${srcFolder}/js/app.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,webp,avif}`,
        svg: `${srcFolder}/img/**/*.svg`,
        css: `${srcFolder}/css/style.css`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        nowrap: `${srcFolder}/html/reviews/0*.html`,
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,webp,avif,svg,ico}`,
        css: `${srcFolder}/css/**/*.css`,
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    fth: '',
}