/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minKnightMoves = function(x, y) {
    let squares = {"0, 0": true};
    let dirs = [2, 1, -2, -1, 2, -1, -2, 1, 2];
    const queue = [[0,0,0]];
    while(queue.length > 0) {
        let q = queue.shift();
        let i = q[0], j = q[1], s = q[2];
      if(i == x && j == y) {
          return s;
      }
    
    for(let d=0; d< 8; d++) {
        let a = i + dirs[d];
        let b = j + dirs[d + 1];
 if(a >= -300 && b >= -300 && a<=300 && b<=300 && squares[a+','+b] === undefined) {
     squares[a+ ',' +b] = true;
      queue.push([a, b, s+1]);
        }
    }
  }
    return -1;
};