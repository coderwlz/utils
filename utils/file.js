/*
 * @Author: wanglongzhen 1962955586@qq.com
 * @Date: 2023-05-09 15:02:34
 * @LastEditors: wanglongzhen 1962955586@qq.com
 * @LastEditTime: 2023-05-09 15:09:34
 * @FilePath: \utils\utils\file.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

/**
 * @description: 文件字节大小格式化
 * @param {*} size
 * @return {*}
 */
export function sizeTostr(size) {
    if (!size) {
        size = 0
    }
    let data = ''
    if (size < 1 * 1024) {
        //如果小于1KB转化成B
        // data = size.toFixed(2) + ' B'
        data = Math.trunc(size * 100) / 100 + ' Bytes'
    } else if (size < 1 * 1024 * 1024) {
        //如果小于1MB转化成KB
        // data = Math.trunc(size / 1024).toFixed(2) + ' KB'
        data = Math.trunc((size / 1024) * 100) / 100 + ' KB'
    } else if (size < 1 * 1024 * 1024 * 1024) {
        //如果小于1GB转化成MB
        data = Math.trunc((size / (1024 * 1024)) * 100) / 100 + ' MB'
        // data = (size / (1024 * 1024)).toFixed(2) + ' MB'
    } else {
        //其他转化成GB
        // data = (size / (1024 * 1024 * 1024)).toFixed(2) + ' GB'
        data = Math.trunc((size / (1024 * 1024 * 1024)) * 100) / 100 + ' GB'
    }
    var sizestr = data + ''
    var len = sizestr.indexOf('.')
    var dec = sizestr.substr(len + 1, 2)
    if (dec == '00') {
        //当小数点后为00时 去掉小数部分
        return sizestr.substring(0, len) + sizestr.substr(len + 4, 2)
    }
    return sizestr
}


/**
 * @description: 获取文件后缀
 * @param {*} name
 * @return {*}
 */
export const getFileSuffix = (name) => {
    const dot = name.lastIndexOf('.')
    return name.substr(dot + 1)
}


/**
 * @description: 获取文件名称 除后缀
 * @param {*} name
 * @return {*}
 */
export const getFileNameSuffix = (name) => {
    const dot = name.lastIndexOf('.')
    return name.substr(0, dot)
}

