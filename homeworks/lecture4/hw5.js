// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj, map = new Map()) => {
    // Implement the function here
    if(typeof(obj) !== 'object' || obj === null) return obj;

    if(map.has(obj))return map.get(obj);

    const res = {};
    map.set(obj, res);

    for(let key in obj){
        res[key] = cloneDeepWithLoop(obj[key], map);
    }

    return res;
}

const data = {
    name: 'foo',
    child: null
}
data.child = data;

const cloned = cloneDeepWithLoop(data);

// 测试1：是不是深拷贝（不是同一个对象）
console.log(cloned === data);           // false ✅

// 测试2：name 有没有拷贝到
console.log(cloned.name);              // 'foo' ✅

// 测试3：循环引用有没有正确处理
console.log(cloned.child === data);  // true ✅（child 指向自己）

// 测试4：修改拷贝不影响原对象
cloned.name = 'bar';
console.log(data.name);               // 'foo' ✅（原对象不变）