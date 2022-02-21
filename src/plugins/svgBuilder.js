/*
 * @Description: 在 webpack 中 svg-sprite-loader 插件可以很好的自定义自己的 Icon 组件，但是需要使用到 require.context 等相关 API，在 vite 中则有所不用
 * @Author: zhangjie
 * @Date: 2022-02-15 14:43:42
 * @LastEditors: zhangjie
 * @LastEditTime: 2022-02-15 14:43:42
 * @FilePath: \website\src\plugins\svgBuilder.js
 */
import { readFileSync, readdirSync } from 'fs';

let idPerfix = '';
const svgTitle = /<svg([^>+].*?)>/;
const clearHeightWidth = /(width|height)="([^>+].*?)"/g;

const hasViewBox = /(viewBox="[^>+].*?")/g;

const clearReturn = /(\r)|(\n)/g;

function findSvgFile(dir) {
  const svgRes = [];
  const dirents = readdirSync(dir, {
    withFileTypes: true,
  });
  for (const dirent of dirents) {
    if (dirent.isDirectory()) {
      svgRes.push(...findSvgFile(dir + dirent.name + '/'));
    } else {
      const svg = readFileSync(dir + dirent.name)
        .toString()
        .replace(clearReturn, '')
        .replace(svgTitle, ($1, $2) => {
          // console.log(++i)
          // console.log(dirent.name)
          let width = 0;
          let height = 0;
          let content = $2.replace(clearHeightWidth, (s1, s2, s3) => {
            if (s2 === 'width') {
              width = s3;
            } else if (s2 === 'height') {
              height = s3;
            }
            return '';
          });
          if (!hasViewBox.test($2)) {
            content += `viewBox="0 0 ${width} ${height}"`;
          }
          return `<symbol id="${idPerfix}-${dirent.name.replace('.svg', '')}" ${content}>`;
        })
        .replace('</svg>', '</symbol>');
      svgRes.push(svg);
    }
  }
  return svgRes;
}

export const svgBuilder = (path, perfix = 'icon') => {
  if (path === '') return;
  idPerfix = perfix;
  const res = findSvgFile(path);
  // console.log(res.length)
  // const res = []
  return {
    name: 'svg-transform',
    transformIndexHtml(html) {
      return html.replace(
        '<body>',
        `
          <body>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0; height: 0">
              ${res.join('')}
            </svg>
        `,
      );
    },
  };
};
