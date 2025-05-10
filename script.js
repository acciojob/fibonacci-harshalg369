function fibonacci(num) {
    if (num === 0) return 0;
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
