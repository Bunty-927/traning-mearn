const updateDataToLocalStorage = (localStorageKey, index, newValue) => {
  let updatedData = JSON.parse(localStorage.getItem(localStorageKey));

  updatedData.splice(index, 1, newValue);

  localStorage.setItem(localStorageKey, JSON.stringify(updatedData));
};

export default updateDataToLocalStorage;
