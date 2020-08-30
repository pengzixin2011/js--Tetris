function deepClone(obj) {
    if (typeof(obj) !== 'object' || obj == null) {
        return obj
    }
    let result
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }
    for (let key in obj) {
        // 保证key 不是原型对象
        if (obj.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key])
        }
    }
    return result

}