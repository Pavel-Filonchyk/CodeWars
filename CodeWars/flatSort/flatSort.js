// вывести вложенности на верхний уровень и отсортировать 

function flattenAndSort(array) {
    return array.flat(Infinity).sort((a, b) => a -b) 
}

// volume of a cup

function cupVolume(d1, d2, height){
    const r1 = d1/2, r2 = d2/2
    const volume = (1/3*Math.PI*height*(r1**2 + r2**2 + r1*r2)).toFixed(2)
    return volume
}
