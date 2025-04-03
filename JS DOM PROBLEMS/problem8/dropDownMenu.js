function createDropDownMenu(buttonText, menuItems) {
  const dropDown = document.createElement("div");
  dropDown.classList.add("dropDown");

  const button = document.createElement("button");
  button.innerText = buttonText;

  const menu = document.createElement("ul");
  menu.classList.add("dropdown-menu");

  menuItems.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item;

    li.onclick = () => {
      console.log(`clicked ${item}`);

      button.textContent = item;

      menu.style.display = "none";
    };

    // each iteration append `li` to `ul`
    menu.appendChild(li);
  });

  dropDown.appendChild(button);
  dropDown.appendChild(menu);
  document.body.appendChild(dropDown);

  // toggle dropdown visibility :
  button.onclick = () => {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  };
  document.addEventListener("click", (e) => {
    if (!dropDown.contains(e.target)) {
      menu.style.display = "none";
    }
  });
}

createDropDownMenu("Select", ["item1", "item2", "item3", "item4", "item5"]);
