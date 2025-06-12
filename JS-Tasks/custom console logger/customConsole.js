// Task: Custom console logger :

class customConsoleLogger {
  constructor(options = {}) {
    this.prefix = options.prefix || "";
    this.styles = {
      log: "color: #2196f3; background: #e0f7fa; padding: 2px 4px; border-radius: 3px;",
      warn: "color: #ff9800; background: #fff3e0; padding: 2px 4px; border-radius: 3px;",
      error:
        "color: #f44336; background: #ffebee; padding: 2px 4px; border-radius: 3px;",
    };

    this.icons = { log: "ℹ️", warn: "⚠️", error: "❌" };
  }

  // methods goes here :
  formatMessage(...args) {
    // console.log("log1", ...args);
    if (args === null || args === undefined) return "No message!";

    return args.map((arg) => {
      // console.log("log2", arg);

      if (typeof arg === "object") {
        try {
          const convertedString = JSON.stringify(arg, null, 2);

          return convertedString;
        } catch (error) {
          return "[Circular Object]";
        }
      }

      return String(arg);
    });
  }

  getTimeStamps() {
    return new Date().toLocaleString();
  }

  log(...args) {
    if (typeof console !== "undefined" && console.log) {
      console.log(
        `%c${this.icons.log} LOG [${this.getTimeStamps()}] ${
          this.prefix
        } ${this.formatMessage(...args)}`,
        this.styles.log
      );
    }
  }

  warn(...args) {
    if (typeof console !== "undefined" && console.warn) {
      console.warn(
        `%c${this.icons.warn} WARN [${this.getTimeStamps()}] ${
          this.prefix
        } ${this.formatMessage(...args)}`,
        this.styles.warn
      );
    }
  }

  error(...args) {
    if (typeof console !== "undefined" && console.error) {
      console.error(
        `%c${this.icons.error} ERROR [${this.getTimeStamps()}] ${
          this.prefix
        } ${this.formatMessage(...args)}`,
        this.styles.error
      );
    }
  }
}

// Ui for testing :
document.addEventListener("DOMContentLoaded", () => {
  const messageInput = document.getElementById("messageInput");
  const logButton = document.getElementById("logButton");
  const warnButton = document.getElementById("warnButton");
  const errorButton = document.getElementById("errorButton");

  const logger = new customConsoleLogger({ prefix: "App" });

  function logMessage(type) {
    const message = messageInput.value.trim() || "Test Message";

    logger[type](message, { user: "Muhammad Althaf", age: 21 });

    messageInput.value = "";
  }

  logButton.addEventListener("click", () => logMessage("log"));
  warnButton.addEventListener("click", () => logMessage("warn"));
  errorButton.addEventListener("click", () => logMessage("error"));

  messageInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      logMessage("log");
    }
  });
});
