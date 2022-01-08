import AsyncStorage from '@react-native-async-storage/async-storage';

const itemsKey = '@itemsKey';

const defaultItemList = [
    {
        ItemName: 'Cacerola',
        Category: 'Cocina'
    },
    {
        ItemName: 'Olla',
        Category: 'Cocina'
    },
    {
        ItemName: 'Carpinteria Novato',
        Category: 'Libro'
    },
    {
        ItemName: 'Cocina Intermedia',
        Category: 'Libro'
    },
    {
        ItemName: 'Electronica Novato',
        Category: 'Libro'
    },
    {
        ItemName: 'Martillo',
        Category: 'Herramienta'
    },
    {
        ItemName: 'Sierra',
        Category: 'Herramienta'
    },
    {
        ItemName: 'Katana',
        Category: 'Arma'
    },
    {
        ItemName: 'Escopeta',
        Category: 'Herramienta'
    }
]

const getInventoryKey = (gameName) => {
    return itemsKey+gameName;
}

const createDefaultItems = async () => {
    const jsonValue = JSON.stringify(defaultItemList);
    await AsyncStorage.setItem(itemsKey, jsonValue)
}

const getItems = async () => {
    let jsonValue = await AsyncStorage.getItem(itemsKey);
    
    if (jsonValue == null) {
        await createDefaultItems();
        return getItems();
    }

    let items = JSON.parse(jsonValue)
    return items;
}

export const createInventoryGame = async (gameName) => {
    const storageKey = getInventoryKey(gameName);
    const items = await getItems();
    let inventoryList = [];

    for (let item of items) {
        let element = {
            ItemName: item.ItemName,
            Category: item.Category,
            Count: 0
        };

        inventoryList.push(element);
    }

    let jsonValue = JSON.stringify(inventoryList);
    await AsyncStorage.setItem(storageKey, jsonValue);
}

export const updateInventoryGame = async (gameName, inventoryList) => {
    const storageKey = getInventoryKey(gameName);
    let jsonValue = JSON.stringify(inventoryList);
    await AsyncStorage.setItem(storageKey, jsonValue);
}

export const deleteInventoryGame = async (gameName) => {
    const storageKey = getInventoryKey(gameName);
    await AsyncStorage.removeItem(storageKey);
}

export const getInventoryGame = async (gameName) => {
    const storageKey = getInventoryKey(gameName);
    const jsonValue = await AsyncStorage.getItem(storageKey);
    let inventoryList = JSON.parse(jsonValue)
    return inventoryList;
}