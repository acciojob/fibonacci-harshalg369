function fibonacci(num) {
  if (num === 1) return 0;
  if (num === 2) return 1;

  let a = 0, b = 1, next;
  for (let i = 3; i <= num; i++) {
    next = a + b;
    a = b;
    b = next;
  }
  return b;
}

function findFibonacci() {
  const input = document.getElementById("inputNumber").value;
  const num = parseInt(input);

  if (num >= 1 && num <= 50) {
    const result = fibonacci(num);
    document.getElementById("result").innerText = `Fibonacci(${num}) = ${result}`;
  } else {
    document.getElementById("result").innerText = "Please enter a number between 1 and 50.";
  }
}
