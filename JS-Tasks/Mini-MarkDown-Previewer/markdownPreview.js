// Task: Mini Mark Down Previewer //

document.addEventListener("DOMContentLoaded", () => {
  const markdownInput = document.getElementById("markdownInput");
  const preview = document.getElementById("preview");

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function parseInline(text) {
    // Bold: **text**
    text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    // Italic: *text*
    text = text.replace(/\*(.*?)\*/g, "<em>$1</em>");
    return text;
  }

  function parseMarkdown(input) {
    const lines = input.split("\n");
    let html = [];
    let inList = false;

    lines.forEach((line) => {
      line = line.trim();
      if (!line) {
        if (inList) {
          html.push("</ul>");
          inList = false;
        }
        return;
      }

      // Headers: # Text, ## Text
      if (line.startsWith("## ")) {
        if (inList) {
          html.push("</ul>");
          inList = false;
        }
        html.push(`<h2>${escapeHtml(line.slice(3))}</h2>`);
      } else if (line.startsWith("# ")) {
        if (inList) {
          html.push("</ul>");
          inList = false;
        }
        html.push(`<h1>${escapeHtml(line.slice(2))}</h1>`);
      }
      // Unordered list: - Item
      else if (line.startsWith("- ")) {
        if (!inList) {
          html.push("<ul>");
          inList = true;
        }
        html.push(`<li>${parseInline(escapeHtml(line.slice(2)))}</li>`);
      }
      // Paragraph with inline formatting
      else {
        if (inList) {
          html.push("</ul>");
          inList = false;
        }
        html.push(`<p>${parseInline(escapeHtml(line))}</p>`);
      }
    });

    if (inList) {
      html.push("</ul>");
    }

    return html.join("");
  }

  function renderPreview() {
    const markdown = markdownInput.value;
    preview.innerHTML = parseMarkdown(markdown);
    saveInput(markdown);
  }

  function saveInput(text) {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("markdown", text);
    }
  }

  function loadInput() {
    if (typeof localStorage !== "undefined") {
      const saved = localStorage.getItem("markdown");
      if (saved) {
        markdownInput.value = saved;
        renderPreview();
      }
    }
  }

  let timeout;
  markdownInput.addEventListener("input", () => {
    clearTimeout(timeout);
    timeout = setTimeout(renderPreview, 300); // debounce
  });

  loadInput();
});
