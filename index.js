var x = add(1, 2);
    y = subtract(1, 2);
    z = multiply(1, 2);
    d = divide(1, 2);
    f = inc(1);
    e = dec(1);
    n = makeInt(10);
    b = preserveDecimal('stuff!', 10);
    
    

function add(a, b) {
  return a + b;            
}
function subtract(a, b) {
  return a - b;            
}
function multiply(a, b) {
  return a * b;            
}
function divide(a, b) {
  return a / b;            
}
function inc(n){
n++;
return n;
}
function dec(n){
n--;
return n;
}
function makeInt(n){
parseFloat('n');
return n;
}
function preserveDecimal(n, a){
  const parsed = parseInt('n', a);
  if (isNaN(parsed)) { return 0 }
  return parsed * 100;
}