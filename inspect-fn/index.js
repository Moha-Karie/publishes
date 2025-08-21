function inspect(fn, fnName = fn.name || "anonymous") {
  console.log("=".repeat(50));
  console.log(`í´ Inspecting function: ${fnName}`);
  console.log("-".repeat(50));

  console.log("Full code:\n", fn.toString());
  console.log("Name:", fn.name);
  console.log("Expected args (length):", fn.length);
  console.log("Own properties:", Object.getOwnPropertyNames(fn));
  console.log("Prototype:", fn.prototype);
  console.log("Type:", typeof fn);
  console.log("Is callable?", typeof fn === "function");
  console.log("Constructor:", fn.constructor);
  console.log("Symbols:", Object.getOwnPropertySymbols(fn));
  console.log("Symbol.toStringTag:", fn[Symbol.toStringTag]);
  console.log("Enumerable keys:", Object.keys(fn));
  console.log(
    "Prototype chain:",
    Object.getPrototypeOf(fn),
    "->",
    Object.getPrototypeOf(Object.getPrototypeOf(fn))
  );
  console.log("Is native code?", fn.toString().includes("[native code]"));
  console.log("=".repeat(50) + "\n");
}

// Export for Node.js
if (typeof module !== "undefined" && module.exports) {
  module.exports = inspect;
}

// Export for browser (ESM)
if (typeof window !== "undefined") {
  window.inspect = inspect;
}
