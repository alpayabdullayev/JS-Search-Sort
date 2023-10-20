//Binary

// const arr = [1,31,43,56,92,98,99]
// function Binary(arr, x) {
//   let left = 0;
//   let right = arr.length - 1
//   let mid;

//     while (left<=right) {
//         mid = Math.floor((left+right)/2)

//         if (arr[mid] === x) {
//             return mid
//         }
//         else if (arr[mid] <x) {
//             left = mid +1
//         } 
//         else {
//             right = mid -1  
//         }
//     }
//     return -1
// }

// console.log(Binary(arr,98));



//Buble Sort

// function BubleSort(arr) {
//     for (let i = 0; i <= arr.length-1; i++) {
//         for (let j = 0; j <= arr.length-1-i; j++) {
//             if (arr[j]>arr[j+1]) {
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//             }
            
            
//         }
        
//     }
//     return arr
// }

// const arr = [100,31,43,26,12,98,199]
// console.log(BubleSort(arr));









// const arr = [100,31,43,26,12,98,199]

// function SelectionSort(arr) {
//     for (let i = 0; i < arr.length - 1 ; i++) {
//         let min = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[min]) {
//                 min = j;
//             }
//         }
//         [arr[i], arr[min]] = [arr[min], arr[i]];
//     }
//     return arr;
// }

// console.log(SelectionSort(arr));






function InsertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i] 
        let j = i -1 
        while (j>=0 && arr[j]>key) {
            arr[j + 1] = arr[j];
            j--
        }
        arr[j+1] = key
    }
    return arr
}

const arr = [100,31,43,26,12,98,199]
console.log(InsertionSort(arr));