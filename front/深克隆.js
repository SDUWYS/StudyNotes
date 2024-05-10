/**
 * 深拷贝
 * @param {*} obj 
 * @param {*} hash 引入WeakMap解决循环引用问题
 * @returns 
 */
function deepClone(obj, hash = new WeakMap()) {
    if (obj === null || typeof obj !== 'object' || obj instanceof Error) return obj;

    if(obj instanceof Date) return new Date(obj);
    if(obj instanceof RegExp) return new RegExp(obj);

    if(hash.has(obj)) return hash.get(obj);

    const newObj = new obj.constructor;
    hash.set(obj, newObj);
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            newObj[key] = deepClone(obj[key], hash);
        }
    }
    return obj;
}

// 拷贝目标
let obj = {
    url: "/api/list",
    method: "GET",
    cache: false,
    timeout: 1000,
    key: Symbol("KEY"),
    big: 10n,
    n: null,
    u: undefined,
    headers: {
      "Content-Type": "application/json",
      post: {
        "X-Token": "xxx",
      },
    },
    arr: [10, 20, 30],
    reg: /^\d+$/,
    time: new Date(),
    fn: function () {
      console.log(this);
    },
    err: new Error("xxx"),
  };
  obj.obj = obj;
  //================ 方法一(最便捷)=================
  // let newObj = JSON.parse(JSON.stringify(obj));
  let deepObj = deepClone(obj);
    console.log(deepObj);
  