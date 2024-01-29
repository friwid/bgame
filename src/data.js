const key = "key";

let pagesJson = localStorage.getItem(key);
// If no pages are yet stored in the local storage, let pagesStore be an empty array.
let pagesStore = pagesJson ? JSON.parse(key) : [];

export default {
  getSinglePage(index) {
    return pagesStore[index];
  },
};


