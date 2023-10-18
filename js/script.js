// Add custom JavaScript here
// Hàm kiểm tra số nguyên tố
function isPrime(num) {
  if (num <= 1) return false
  if (num <= 3) return true

  if (num % 2 === 0 || num % 3 === 0) return false

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false
  }

  return true
}

// Hàm tính tổng số nguyên tố trong khoảng a đến b
function calculatePrimeSum() {
  let inputA = +document.getElementById("inputA").value
  let inputB = +document.getElementById("inputB").value

  if (inputA >= inputB) {
    alert("a phải nhỏ hơn b.")
    return
  }

  let sum = 0
  let primeNumbers = []

  for (let i = inputA + 1; i < inputB; i++) {
    if (isPrime(i)) {
      sum += i
      primeNumbers.push(i)
    }
  }

  let resultElement = document.getElementById("result")
  resultElement.textContent = "Kết quả: " + sum

  let primeNumbersElement = document.getElementById("primeNumbers")
  primeNumbersElement.textContent =
    "Các số nguyên tố: " + primeNumbers.join(", ")
}
