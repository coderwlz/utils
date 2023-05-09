/*
 * @Author: wanglongzhen 1962955586@qq.com
 * @Date: 2023-05-09 14:15:53
 * @LastEditors: wanglongzhen 1962955586@qq.com
 * @LastEditTime: 2023-05-09 15:07:24
 * @FilePath: \utils\utils\regexp.js
 * @Description:  
 */

/**
 * @description: 检查邮箱是否合法
 * @param {*} email
 * @return {*} Boolean
 */
export const isEMail = (email) => {
    return /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/.test(email)
}

/**
 * @description: 检查字符串是否有 全角
 * @param {*} str
 * @return {*} Boolean
 */
export function flagCode(str) {
    //True 没有全角，False有全角
    for (var i = 0; i < str.length; i++) {
        let strCode
        strCode = str.charCodeAt(i)
        if (strCode > 65248 || strCode == 12288) {
            return false
        }
    }
    return true
}