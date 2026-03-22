function findSecondMax(arr){
    let max = 0
    let secondMax =0;
    for(let i =0; i < arr.length; i++){
        if(arr[i]> max){
            max = arr[i];
        }else if(arr[i] > secondMax && arr[i] !=max){
            secondMax = arr[i];
        }
    }
    return secondMax;
}
let arr2 = [2,6,17,99,55,2,17,1,17];
console.log(findSecondMax(arr2));
