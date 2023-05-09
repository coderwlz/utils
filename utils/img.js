/*
 * @Author: wanglongzhen 1962955586@qq.com
 * @Date: 2023-05-09 14:59:42
 * @LastEditors: wanglongzhen 1962955586@qq.com
 * @LastEditTime: 2023-05-09 15:09:23
 * @FilePath: \utils\utils\img.js
 * @Description: 
 */
export function blobToString(blob) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = function () {
            const res = reader.result
                .split("") // 将读取结果分割为数组
                .map((v) => v.charCodeAt()) // 转为 Unicode 编码
                .map((v) => v.toString(16).toUpperCase()) // 转为十六进制，再转大写
                .map((v) => v.padStart(2, "0")) // 个位数补0
                .join(" "); // 转为字符串
            resolve(res);
        };
        reader.readAsBinaryString(blob); // 将文件读取为二进制字符串
    });
}
// 判断是否为图片
export async function isImage(file) {
    return (await isGif(file)) || (await isPng(file)) || (await isJpg(file));
}
// 判断是否为 jpg 格式
export async function isJpg(file) {
    const res = await blobToString(file.slice(0, 3));
    return res === "FF D8 FF";
}
// 判断是否为 png 格式
export async function isPng(file) {
    const res = await blobToString(file.slice(0, 4));
    return res === "89 50 4E 47";
}
// 判断是否为 gif 格式
export async function isGif(file) {
    const res = await blobToString(file.slice(0, 4));
    return res === "47 49 46 38";
}
