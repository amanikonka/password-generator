class PINGenerator {
  constructor() {
    this.usedPins = new Set();
  }

  generatePin() {
    while (true) {
      const pin = this.getRandomPin();
      if (!this.usedPins.has(pin) && !this.isObvious(pin)) {
        this.usedPins.add(pin);
        return pin;
      }
    }
  }

  getRandomPin() {
    return String(Math.floor(1000 + Math.random() * 9000)); // Generate a random 4-digit number
  }

  isObvious(pin) {
    // Check if the PIN is an obvious number (e.g., "1111")
    return pin === "1111"; // Add more obvious PINs as needed
  }
}

const pinGenerator = new PINGenerator();

const pinDisplay = document.getElementById("pin-display");
const generateButton = document.getElementById("generate-button");

generateButton.addEventListener("click", () => {
  const pin = pinGenerator.generatePin();
  pinDisplay.textContent = `Generated PIN: ${pin}`;
});
