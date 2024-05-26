// src/utils/searchUtility.js

export const searchPages = (query, pages) => {
    const lowerCaseQuery = query.toLowerCase();
    for (const page of pages) {
      if (page.content.toLowerCase().includes(lowerCaseQuery)) {
        return page.path;
      }
    }
    return null;
  };
  