// get the data from storage
const getDataFromStorage = (tableName) => {
  return JSON.parse(localStorage.getItem(tableName));
};

// function to save data in storage
const saveDataToStorage = (tableName, data) => {
  let dataArray = [];
  let oldData = {};
  if (localStorage.getItem(tableName)) {
    oldData = JSON.parse(localStorage.getItem(tableName));
    dataArray = [...oldData];
  }
  const randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  const uniqid = randLetter + Date.now();
  data.id = uniqid;
  localStorage.setItem(tableName, JSON.stringify([...dataArray, data]));
};

// get the data from storage
const deleteItemFromStorage = (tableName, id) => {
  const existingData = getDataFromStorage(tableName);
  const filteredData = existingData.filter((item) => {
    return item.id !== id;
  });
  localStorage.removeItem(tableName);
  localStorage.setItem(tableName, JSON.stringify(filteredData));
};

const getSingleItemData = (tableName, id) => {
  const existingData = getDataFromStorage(tableName);
  const singleItem = existingData.find((item) => {
    return item.id == id;
  });
  return singleItem;
};

const editSingleItemData = (tableName, data) => {
  const existingData = getDataFromStorage(tableName);
  const indexOfCurrentItem = existingData.findIndex((item) => {
    return item.id == data.id;
  });
  existingData.splice(indexOfCurrentItem, 1, data);
  localStorage.removeItem(tableName);
  localStorage.setItem(tableName, JSON.stringify(existingData));
};
