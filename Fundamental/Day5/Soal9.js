/* Based on the array below write a function that will return primitive data types only. let
arr = [1, [], undefined, {}, "string", {}, []]; 
a. The function will return [1, undefined, “string”]
*/
let arr = [1, [], undefined, {}, "string", {}, []]; 
function getPrimitiveTypes(array) {
    return array.filter(element => {
        const type = typeof element;
        return type !== 'object' || element === null;
    })
}
console.log(getPrimitiveTypes(arr));