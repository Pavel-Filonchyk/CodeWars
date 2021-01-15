function evenOrOdd(str) {
    let arr = str.split('').map(item =>Number(item))
           let sumEven = 0;
           let sumOdd = 0;
           arr.forEach(item =>{ 
         if (Number.isInteger(item/2) == true)
           {sumEven += item}
         else {sumOdd += item}
       })
     if (sumEven>sumOdd) return "Even is greater than Odd"
     if (sumEven<sumOdd) return "Odd is greater than Even"
     if (sumOdd==sumEven) return "Even and Odd are the same"
   }
evenOrOdd("1346")
