/*
 * @Author: wanglongzhen 1962955586@qq.com
 * @Date: 2023-05-09 15:10:34
 * @LastEditors: wanglongzhen 1962955586@qq.com
 * @LastEditTime: 2023-05-09 15:10:40
 * @FilePath: \utils\utils\date.js
 * @Description: 
 */


/**
 * @description: 标准时间格式化
 * @param {*} time
 * @return {*} str
 */
export function formatDate(time) {
    if (time == null || time == '') return ''
    let date = new Date(time)
    let year = date.getFullYear()
    let month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
    let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
}