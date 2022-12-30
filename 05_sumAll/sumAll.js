const sumAll = function (x, y) {
    if (x > 0 && y > 0 && typeof x === 'number' && typeof y === 'number') {
        let valueX = x;
        let valueY = y;
        let total = 0;
        if (x < y) {
            for (let i = valueX; i <= valueY; i++) {
                total += i;
            }
            return total;
        } else if (x > y) {
            for (let i = valueY; i <= valueX; i++) {
                total += i;
            }
            return total;
        }
    } else {
        return 'ERROR'
     }
    }

// Do not edit below this line
module.exports = sumAll;
