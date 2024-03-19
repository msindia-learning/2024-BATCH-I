let original_array = [1, 2, 5, 5, 4, 5, 5, 6];

for (let i = 0; i < original_array.length;) {
    if (original_array[i] == 5) {
        original_array.splice(i, 1);
        continue;
    } i+=1;
}

console.log(original_array);