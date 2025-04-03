// Mock API function to simulate server response
// const mockApi = (page, limit) => {
//   // page is always 1
//   console.log("page", page);
//   console.log("limit", limit);
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const items = Array.from({ length: limit }, (_, i) => ({
//         title: `Item ${(page - 1) * limit + i + 1}`,
//         description: `This is a description for item ${
//           (page - 1) * limit + i + 1
//         }`,
//       }));

//       console.log(items);

//       resolve({
//         items,
//         hasMore: page < 5, // Stop after 5 pages for demo
//       });
//     }, 1000); // delay
//   });
// };

// // Infinite Scroll Implementation
// class InfiniteScroll {
//   constructor(options = {}) {
//     this.config = {
//       container:
//         options.container || document.querySelector(".content-container"),
//       threshold: options.threshold || 200,
//       pageSize: options.pageSize || 20,
//       apiEndpoint: options.apiEndpoint || "/api/content",
//       debounceTime: options.debounceTime || 200,
//     };

//     this.state = {
//       currentPage: 1,
//       isLoading: false,
//       hasMore: true,
//       totalItems: 0,
//     };

//     this.init();
//   }
//   init() {
//     this.handleScroll = this.debounce(
//       this.handleScroll.bind(this),
//       this.config.debounceTime
//     );
//     window.addEventListener("scroll", this.handleScroll);
//     this.loadContent();
//   }

//   debounce(func, wait) {
//     let timeout;
//     return function executedFunction(...args) {
//       const later = () => {
//         clearTimeout(timeout);
//         func(...args);
//       };
//       clearTimeout(timeout);
//       timeout = setTimeout(later, wait);
//     };
//   }

//   isNearBottom() {
//     const scrollPosition = window.innerHeight + window.scrollY;
//     const totalHeight = document.documentElement.scrollHeight;
//     return totalHeight - scrollPosition <= this.config.threshold;
//   }

//   handleScroll() {
//     if (this.state.isLoading || !this.state.hasMore) return;
//     if (this.isNearBottom()) {
//       this.loadContent();
//     }
//   }

//   async loadContent() {
//     try {
//       this.state.isLoading = true;
//       this.showLoadingIndicator();

//       // Use mock API instead of fetch
//       const data = await mockApi(this.state.currentPage, this.config.pageSize);
//       console.log("data :", data);
//       this.renderItems(data.items);

//       this.state.currentPage++;
//       this.state.totalItems += data.items.length;
//       this.state.hasMore = data.hasMore;
//     } catch (error) {
//       this.handleError(error);
//     } finally {
//       this.state.isLoading = false;
//       this.hideLoadingIndicator();
//     }
//   }

//   renderItems(items) {
//     items.forEach((item) => {
//       const element = this.createItemElement(item);
//       this.config.container.appendChild(element);
//     });
//   }

//   createItemElement(item) {
//     const div = document.createElement("div");
//     div.className = "item";
//     div.innerHTML = `
//                 <h2>${item.title || "Item"}</h2>
//                 <p>${item.description || ""}</p>
//             `;
//     return div;
//   }

//   showLoadingIndicator() {
//     if (!this.loadingElement) {
//       this.loadingElement = document.createElement("div");
//       this.loadingElement.className = "loading";
//       this.loadingElement.textContent = "Loading more items...";
//       this.config.container.appendChild(this.loadingElement);
//     }
//   }

//   hideLoadingIndicator() {
//     if (this.loadingElement) {
//       this.loadingElement.remove();
//       this.loadingElement = null;
//     }
//   }

//   handleError(error) {
//     console.error("Error loading content:", error);
//     const errorElement = document.createElement("div");
//     errorElement.className = "error";
//     errorElement.textContent = "Failed to load content. Please try again.";
//     this.config.container.appendChild(errorElement);
//   }

//   destroy() {
//     window.removeEventListener("scroll", this.handleScroll);
//   }
// }

// // Initialize infinite scroll
// const infiniteScroll = new InfiniteScroll({
//   container: document.querySelector("#content"),
//   threshold: 300,
//   pageSize: 10,
//   debounceTime: 250,
// });

// we can also create this infinite scrolling using any dummy api :
class InfiniteScroll {
  constructor(options = {}) {
    this.config = {
      container:
        options.container || document.querySelector(".content-container"),
      threshold: options.threshold || 200,
      pageSize: options.pageSize || 10,
      apiEndpoint:
        options.apiEndpoint || "https://jsonplaceholder.typicode.com/posts",
      debounceTime: options.debounceTime || 200,
    };

    this.state = {
      currentPage: 1,
      isLoading: false,
      hasMore: true,
      totalItems: 0,
      allData: [], // Store all fetched data for pagination simulation
    };

    this.init();
  }

  init() {
    this.handleScroll = this.debounce(
      this.handleScroll.bind(this),
      this.config.debounceTime
    );
    window.addEventListener("scroll", this.handleScroll);
    this.loadContent();
  }

  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  isNearBottom() {
    const scrollPosition = window.innerHeight + window.scrollY;
    const totalHeight = document.documentElement.scrollHeight;
    return totalHeight - scrollPosition <= this.config.threshold;
  }

  handleScroll() {
    if (this.state.isLoading || !this.state.hasMore) return;
    if (this.isNearBottom()) {
      this.loadContent();
    }
  }

  async loadContent() {
    try {
      this.state.isLoading = true;
      this.showLoadingIndicator();

      // Fetch all data on first load, then slice it for pagination
      if (this.state.currentPage === 1) {
        const response = await fetch(this.config.apiEndpoint);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        this.state.allData = await response.json();
      }

      // slice the data :
      const start = (this.state.currentPage - 1) * this.config.pageSize;
      const end = start + this.config.pageSize;
      const items = this.state.allData.slice(start, end);
      console.log("items:", items);

      if (items.length > 0) {
        this.renderItems(items);
        this.state.currentPage++;
        this.state.totalItems += items.length;
        this.state.hasMore = end < this.state.allData.length;
      } else {
        this.state.hasMore = false;
      }
    } catch (error) {
      this.handleError(error);
    } finally {
      this.state.isLoading = false;
      this.hideLoadingIndicator();
    }
  }

  renderItems(items) {
    items.forEach((item) => {
      const element = this.createItemElement(item);
      this.config.container.appendChild(element);
    });
  }

  createItemElement(item) {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
          <h2>${item.title || "Item"}</h2>
          <p>${item.body || ""}</p>
      `;
    return div;
  }

  showLoadingIndicator() {
    console.log(
      "showLoadingIndicator called",
      this.state.isLoading,
      this.config.container
    );
    if (!this.loadingElement) {
      this.loadingElement = document.createElement("div");
      this.loadingElement.className = "loading";
      this.loadingElement.textContent = "Loading more items...";
      console.log("Appending to container:", this.config.container);
      this.config.container.appendChild(this.loadingElement);
    }
  }

  hideLoadingIndicator() {
    if (this.loadingElement) {
      this.loadingElement.remove();
      this.loadingElement = null;
    }
  }

  handleError(error) {
    console.error("Error loading content:", error);
    const errorElement = document.createElement("div");
    errorElement.className = "error";
    errorElement.textContent = "Failed to load content. Please try again.";
    this.config.container.appendChild(errorElement);
  }

  destroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }
}

// Initialize infinite scroll with JSONPlaceholder API
const infiniteScroll = new InfiniteScroll({
  container: document.querySelector("#content"),
  threshold: 300,
  pageSize: 10,
  apiEndpoint: "https://jsonplaceholder.typicode.com/posts",
  debounceTime: 1000,
});
