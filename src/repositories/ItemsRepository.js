import AsyncStorage from '@react-native-async-storage/async-storage';

const itemKitchenKey = 'kitechenitems'
const itemsBooksKey = 'booksitems';
const itemsToolsKey = 'toolsItem';
const itemsWeaponsKey = 'weaponItem';

const defaultKitchenItems = ['Cacerola','Olla','Sarten'];
const defaultBooksItems = ['Carpitenria 1', 'Cocina 1', 'Electronica 1'];
const defaultToolsItems = ['Martillo','Sierra'];
const defaultWeaponsItems = ['Katana','Escopeta'];

const saveItem = async (key, defaultList, itemName) => {
    key = '@'+key;
    let itemsList = [];
    let jsonValue = await AsyncStorage.getItem(key);

    if (jsonValue == null) {
        itemsList = defaultList;
    }
    else {
        itemsList = JSON.parse(jsonValue)
    }

    if (itemName != null) {
        itemsList.push(itemName);
    }
    
    jsonValue = JSON.stringify(itemsList);
    await AsyncStorage.setItem(key, jsonValue)
}

const createDefaultItems = async (key) => {
    let defaultList = [];

    switch(key) {
        case itemKitchenKey:
            defaultList = defaultKitchenItems;
            break;
        case itemsBooksKey:
            defaultList = defaultBooksItems;
            break;
        case itemsToolsKey:
            defaultList = defaultToolsItems;
            break;
        case itemsWeaponsKey:
            defaultList = defaultWeaponsItems;
            break;
        default:
            defaultList = [];
            break;
    }

    const jsonValue = JSON.stringify(defaultList);
    await AsyncStorage.setItem('@'+key, jsonValue)
}


const getItems = async (key) => {
    let jsonValue = await AsyncStorage.getItem('@'+key);
    
    if (jsonValue == null) {
        await createDefaultItems(key);
        return getItems(key);
    }

    let items = JSON.parse(jsonValue)
    return items.sort();
}

const getInventoryKey = (gameName, itemKey) => {
    return '@'+gameName+itemKey;
}

const createInventory = async (gameName, itemKey) => {
    const storageKey = getInventoryKey(gameName, itemKey);
    const items = await getItems(itemKey);
    let inventoryList = [];

    for (let item of items) {
        let element = {
            ItemName: item,
            Count: 0
        };

        inventoryList.push(element);
    }

    let jsonValue = JSON.stringify(inventoryList);
    await AsyncStorage.setItem(storageKey, jsonValue);
}

const getInventory = async (gameName, itemKey) => {
    const inventoryKey = getInventoryKey(gameName, itemKey);
    const jsonValue = await AsyncStorage.getItem(inventoryKey);
    
    if(jsonValue == null) {
        return null;
    }

    let inventory = JSON.parse(jsonValue)
    return inventory;
}

export const createKitchenItem = async (itemName) => {
    await saveItem(itemKitchenKey, defaultKitchenItems, itemName);
}

export const createBookItem = async (itemName) => {
    await saveItem(itemsBooksKey, defaultBooksItems, itemName);
}

export const createToolItem = async (itemName) => {
    await saveItem(itemsToolsKey, defaultToolsItems, itemName);
}

export const createWaponsItem = async (itemName) => {
    await saveItem(itemsWeaponsKey, defaultWeaponsItems, itemName);
}

export const createInventoryGame = async (gameName) => {
    await createInventory(gameName, itemKitchenKey);
    await createInventory(gameName, itemsBooksKey);
    await createInventory(gameName, itemsToolsKey);
    await createInventory(gameName, itemsWeaponsKey);
}

export const deleteInventoryGame = async (gameName) => {
    const kitchenKey = getInventoryKey(gameName, itemKitchenKey);
    await AsyncStorage.removeItem(kitchenKey);

    const boolKey = getInventoryKey(gameName, itemsBooksKey);
    await AsyncStorage.removeItem(boolKey);

    const toolsKey = getInventoryKey(gameName, itemsToolsKey);
    await AsyncStorage.removeItem(toolsKey);

    const weaponKey = getInventoryKey(gameName, itemsWeaponsKey);
    await AsyncStorage.removeItem(weaponKey);
}

export const getKitechenInventory = async (gameName) => {
    return await getInventory(gameName, itemKitchenKey);
}

export const getBookInventory = async (gameName) => {
    return await getInventory(gameName, itemsBooksKey);
}

export const getToolsInventory = async (gameName) => {
    return await getInventory(gameName, itemsToolsKey);
}

export const getWeaponInventory = async (gameName) => {
    return await getInventory(gameName, itemsWeaponsKey);
}

export const getAllInventory = async (gameName) => {
    const kitechen = await getInventory(gameName, itemKitchenKey);
    const books = await getInventory(gameName, itemsBooksKey);
    const tools = await getInventory(gameName, itemsToolsKey);
    const weapons = await getInventory(gameName, itemsWeaponsKey);

    let inventory = []
    inventory.push(kitechen);
    inventory.push(books);
    inventory.push(tools);
    inventory.push(weapons);

    return inventory;
}

export const pruenaKeys = async () => {
    return await AsyncStorage.getAllKeys();
}

export const borrarKeys = async () => {
    return await AsyncStorage.clear();
}