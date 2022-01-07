import AsyncStorage from '@react-native-async-storage/async-storage';

const gameStorageKey = '@savedGames'

export const saveGame = async (gameName) => {
    let games = [];
    let jsonValue = await AsyncStorage.getItem(gameStorageKey);

    if (jsonValue != null) {
        games = JSON.parse(jsonValue);
    }

    games.push(gameName);

    jsonValue = JSON.stringify(games);
    await AsyncStorage.setItem(gameStorageKey, jsonValue);
}

export const getAllGames = async () => {
    const jsonValue = await AsyncStorage.getItem(gameStorageKey);
    
    if(jsonValue == null) {
        return null;
    }

    let games = JSON.parse(jsonValue)
    return games.sort();
}

export const deleteGame = async (gameName) => {
    let jsonValue = await AsyncStorage.getItem(gameStorageKey);

    if (jsonValue == null) {
        return;
    }

    let games = JSON.parse(jsonValue);
    const index = games.indexOf(gameName);
    games.splice(index, 1);

    jsonValue = JSON.stringify(games);
    await AsyncStorage.setItem(gameStorageKey, jsonValue);
}

export const existGame = async (gameName) => {
    const jsonValue = await AsyncStorage.getItem(gameStorageKey);

    if (jsonValue == null) {
        return false;
    }

    let games = JSON.parse(jsonValue)
    const index = games.indexOf(gameName);
    return index != -1;
}

export const deleteAllGames = async () => {
    const jsonValue = await AsyncStorage.getItem(gameStorageKey);
    
    if(jsonValue != null) {
        await AsyncStorage.removeItem(gameStorageKey);
    }
}