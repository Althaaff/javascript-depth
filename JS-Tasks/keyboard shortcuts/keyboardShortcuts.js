document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleButton");
  const status = document.getElementById("status");
  const shortcutsList = document.getElementById("shortcutsList");
  const toggleDiv = document.getElementById("toggleDiv");

  class ShortcutHandler {
    constructor() {
      // --> constructor is special method it can create and initializes the object .
      // it is automatically called when a new instance of the class is created using new .
      this.shortcuts = new Map();
      this.isActive = true;
      this.bindEvents();
    }

    normalizeShortcut(event) {
      const modifiers = [];
      if (event.ctrlKey) modifiers.push("ctrl");
      if (event.altKey) modifiers.push("alt");
      if (event.shiftKey) modifiers.push("shift");
      const key = event.code.replace(/^Key/, "").toLowerCase();
      if (
        !key ||
        (modifiers.length === 0 && !["enter", "escape"].includes(key))
      )
        return null;
      return [...modifiers, key].sort().join("+") || key;
    }

    register(shortcut, action, description) {
      const normalized = shortcut.toLowerCase();
      if (this.shortcuts.has(normalized)) {
        console.warn(`Shortcut ${normalized} already registered`);
        return false;
      }
      this.shortcuts.set(normalized, { action, description });
      this.renderShortcuts();
      return true;
    }

    unregister(shortcut) {
      const normalized = shortcut.toLowerCase();
      this.shortcuts.delete(normalized);
      this.renderShortcuts();
    }

    handleKey(event) {
      if (!this.isActive) return;
      const target = event.target;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") return;

      const shortcut = this.normalizeShortcut(event);
      if (!shortcut) return;

      const shortcutData = this.shortcuts.get(shortcut);
      if (shortcutData) {
        event.preventDefault();
        shortcutData.action();
        this.showStatus(`Action triggered: ${shortcutData.description}`);
      }
    }

    toggleActive() {
      this.isActive = !this.isActive;
      toggleButton.textContent = this.isActive
        ? "Disable Shortcuts"
        : "Enable Shortcuts";
      toggleButton.classList.toggle("active", this.isActive);
      this.showStatus(`Shortcuts ${this.isActive ? "enabled" : "disabled"}`);
    }

    renderShortcuts() {
      shortcutsList.innerHTML = "";
      this.shortcuts.forEach((data, shortcut) => {
        const li = document.createElement("li");
        li.textContent = `${shortcut.replace(/\+/g, "+")}: ${data.description}`;
        shortcutsList.appendChild(li);
      });
    }

    showStatus(message) {
      status.textContent = message;
      setTimeout(() => {
        status.textContent = "";
      }, 2000);
    }

    bindEvents() {
      document.addEventListener("keydown", this.handleKey.bind(this));
    }
  }

  const handler = new ShortcutHandler();

  // register sample shortcuts :
  handler.register("ctrl+s", () => alert("Saved!"), "Save");
  handler.register("alt+c", () => (status.textContent = ""), "Clear status");
  handler.register(
    "ctrl+t",
    () => toggleDiv.classList.toggle("hidden"),
    "Toggle content"
  );

  // toggle shortcuts :
  toggleButton.addEventListener("click", () => handler.toggleActive());

  // initial render :
  handler.renderShortcuts();
});
