/*
 * @Author: wanglongzhen 1962955586@qq.com
 * @Date: 2023-05-09 15:14:32
 * @LastEditors: wanglongzhen 1962955586@qq.com
 * @LastEditTime: 2023-05-09 15:15:39
 * @FilePath: \utils\utils\color.js
 * @Description: 
 */

/**
 * @description: 颜色十六进制转rgba
 * @param {*} str 颜色十六进制
 * @param {*} transparency 透明度
 * @return {*} str
 */
export function set16ToRgb(str, transparency) {
    let reg = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/
    if (!reg.test(str)) {
        return
    }
    let newStr = str.toLowerCase().replace(/\#/g, '')
    let len = newStr.length
    if (len == 3) {
        let t = ''
        for (let i = 0; i < len; i++) {
            t += newStr.slice(i, i + 1).concat(newStr.slice(i, i + 1))
        }
        newStr = t
    }
    let arr = [] //将字符串分隔，两个两个的分隔
    for (let i = 0; i < 6; i = i + 2) {
        let s = newStr.slice(i, i + 2)
        arr.push(parseInt('0x' + s))
    }
    return 'rgb(' + arr.join(',') + ',' + transparency / 100 + ')'
}

/**
 * @description: 根据字符串生成 颜色十六进制 字符串
 * @param {*} name
 * @return {*} str
 */
export const extractColorByName = (name) => {
    var temp = []
    temp.push('#')
    for (let index = 0; index < name.length; index++) {
        temp.push(parseInt(name[index].charCodeAt(0), 10).toString(16))
    }
    return temp.slice(0, 5).join('').slice(0, 4)
}
