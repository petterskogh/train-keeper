import AsyncStorage from '@react-native-async-storage/async-storage';

export const addToStorageArray = async (key: string, value: any) => {
  try {
    const array = await getObjectFromStorage(key) as Object[] ?? [];
    array.push(value);
    storeData(key, array);
  } catch (error) {
    console.error(error);
  }
};

export const getObjectFromStorage = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error(error);
  }
};

export const storeData = async (key: string, value: any) => {
  try {
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
    await AsyncStorage.setItem(key, value as string);
  } catch (error) {
    console.error(error);
  }
};

export const convertStringToKey = (string: string): string => {
  return string.replace(/\s/g, '');
}

export const getAllKeys = async () => {
  try {
    return await AsyncStorage.getAllKeys();
  } catch (error) {
    console.error(error);
  }
}

export const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error(error);
  }
}

export const removeAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error(error);
  }
}