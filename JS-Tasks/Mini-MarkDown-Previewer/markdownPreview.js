// // Task: Mini Mark Down Previewer //

document.addEventListener("DOMContentLoaded", () => {
  const markDownInput = document.getElementById("markdownInput");
  const previewImg = document.getElementById("previewImg");
  console.log(previewImg);
  const preview = document.getElementById("preview");
  const errorMsg = document.getElementById("error");

  console.log(markDownInput, preview);

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;

    return div.innerHTML;
  }

  function parseInline(text) {
    // bold text :
    text = text.replace(/\*\*(.\*?)\*\*/g, "<strong>$1</strong>");

    // Italic text :
    text = text.replace(/\*(.*?)\*/g, "<em>$1</em>");

    return text;
  }

  function parseMarkDown(input) {
    let lines = input.split("\n");

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

      // Headers: # Text, ## Text :
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

      // Unordered list: - Item :
      else if (line.startsWith("- ")) {
        if (!inList) {
          html.push("<ul>");
          inList = true;
        }

        html.push(`<li>${parseInline(escapeHtml(line.slice(2)))}</li>`);
      } else if (line.startsWith("![")) {
        // image syntax: ![alt text](image_url)
        const altText = line.match(/!\[(.*?)\]\((.*?)\)/);

        if (altText) {
          console.log("alt text", altText);
          const imgUrl = altText[2];

          if (validateImgUrl(imgUrl)) {
            console.log("valid url ?", imgUrl);

            html.push(
              `<img src="${escapeHtml(imgUrl)}" alt="${escapeHtml(
                altText[1]
              )}" style="max-width: 100%; height: auto;" />`
            );
          }
        }
      } else {
        // Paragraph with inline formatting :
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

  function validateImgUrl(url) {
    console.log("URL", url);
    const imgUrlRegex = /^https?:\/\/.*\.(png|jpg|jpeg)(\?.*)?$/i;

    return imgUrlRegex.test(url);
  }

  function renderPreview() {
    const markDown = markDownInput.value;

    preview.innerHTML = parseMarkDown(markDown);

    saveInput(markDown);
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
        markDownInput.value = saved;
        renderPreview();
      }
    }
  }

  let timeout;

  markDownInput.addEventListener("input", () => {
    clearTimeout(timeout);

    timeout = setTimeout(() => renderPreview(), 300); // debounce
  });

  loadInput();
});
