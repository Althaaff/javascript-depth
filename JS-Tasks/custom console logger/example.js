class customConsoleLogger {
  constructor(options = {}) {
    this.prefix = options.prefix;
  }

  log() {
    return `prefix is ${this.prefix}`;
  }
}

const logger = new customConsoleLogger({ prefix: "APP" });

console.log(logger.log());
