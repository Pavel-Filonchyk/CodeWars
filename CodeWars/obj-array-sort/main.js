function convertHashToArray(hash){
    objArr = Object.entries(hash);
    return objArr.sort()
}
convertHashToArray({name: 'Jeremy', age: 24, role: 'Software Engineer'})