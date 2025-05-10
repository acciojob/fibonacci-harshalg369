function fibonacci(num) {
  if (num === 0) return 0;
  if (num === 1) return 0;
  if (num === 2) return 1;

  let a = 0, b = 1, temp;
  for (let i = 3; i <= num; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

// Set results in HTML
document.getElementById("result1").textContent = fibonacci(1);
document.getElementById("result5").textContent = fibonacci(5);
document.getElementById("result10").textContent = fibonacci(10);
