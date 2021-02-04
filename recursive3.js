/*
3. Buatlah rekursive function (return) yang dapat menghasilkan angka seperti ini

f(1) -> 3
f(2) -> 6
f(3) ->12
f(4) -> 24
f(5) -> 48
f(n) ->  ...
*/
function
kalikandua(n) {
    if (n == 1) {
        return 3
    } else {
        return kalikandua(n - 1) * 2
    }
}
console.log(
    kalikandua(1))
console.log(
    kalikandua(2))
console.log(
    kalikandua(3))
console.log(
    kalikandua(4))
console.log(
    kalikandua(5))
console.log(
    kalikandua(6))