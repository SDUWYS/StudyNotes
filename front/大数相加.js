/**
 * 步骤
 * 1、取两个中最长的长度
 * 2、补0
 * 3、初始化t、f、res
 * 4、从后往前遍历
 * 5、计算两个数字的和为t
 * 6、是否进1，Math.floor(t/10)
 * 7、拼接字符串
 * 8、for循环之后，判断是否要在前头补1
 * @param {*} a
 * @param {*} b
 * @returns
 */
function bigNumAdd(str1, str2) {
    let length = Math.max(str1.length, str2.length);
    str1 = str1.padStart(length, '0');
    str2 = str2.padStart(length, '0'); 
    let t = 0, f = 0, res = '';
    for(let i = length - 1; i>=0; i--){
        t = parseInt(str1[i]) + parseInt(str2[i]) + f;
        f = Math.floor(t/10);
        res = (t%10) + res;
    }
    if(f){
        res = f + res;
    }
    return res;
}

const a = "3782647863278468012934670";
const b = "23784678091370408971329048718239749083";
console.log(bigNumAdd(a, b));