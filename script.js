function calculate() {
    let loan = document.getElementById("loan").value;
    let rate = document.getElementById("rate").value / 100 / 12;
    let years = document.getElementById("years").value * 12;

    let x = Math.pow(1 + rate, years);
    let monthly = (loan * x * rate) / (x - 1);

    document.getElementById("result").innerText =
        "Monthly Payment: $" + monthly.toFixed(2);
}