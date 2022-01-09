import AsyncStorage from '@react-native-async-storage/async-storage';

const itemsKey = '@itemsKey';

const defaultItemList = [
    {
        ItemName: 'Carpinteria novatos',
        Category: 'Libro'
    },
    {
        ItemName: 'Carpinteria intermedia',
        Category: 'Libro'
    },
    {
        ItemName: 'Carpinteria avanzada',
        Category: 'Libro'
    },
    {
        ItemName: 'Carpinteria expertos',
        Category: 'Libro'
    },
    {
        ItemName: 'Carpinteria maestros',
        Category: 'Libro'
    },
    {
        ItemName: 'Cocina novatos',
        Category: 'Libro'
    },
    {
        ItemName: 'Cocina intermedia',
        Category: 'Libro'
    },
    {
        ItemName: 'Cocina avanzada',
        Category: 'Libro'
    },
    {
        ItemName: 'Cocina expertos',
        Category: 'Libro'
    },
    {
        ItemName: 'Cocina maestros',
        Category: 'Libro'
    },
    {
        ItemName: 'Trampas novatos',
        Category: 'Libro'
    },
    {
        ItemName: 'Trampas intermedia',
        Category: 'Libro'
    },
    {
        ItemName: 'Trampas avanzada',
        Category: 'Libro'
    },
    {
        ItemName: 'Trampas expertos',
        Category: 'Libro'
    },
    {
        ItemName: 'Trampas maestros',
        Category: 'Libro'
    },
    {
        ItemName: 'Electronica novatos',
        Category: 'Libro'
    },
    {
        ItemName: 'Electronica intermedia',
        Category: 'Libro'
    },
    {
        ItemName: 'Electronica avanzada',
        Category: 'Libro'
    },
    {
        ItemName: 'Electronica expertos',
        Category: 'Libro'
    },
    {
        ItemName: 'Electronica maestros',
        Category: 'Libro'
    },
    {
        ItemName: 'Sastreria novatos',
        Category: 'Libro'
    },
    {
        ItemName: 'Sastreria intermedia',
        Category: 'Libro'
    },
    {
        ItemName: 'Sastreria avanzada',
        Category: 'Libro'
    },
    {
        ItemName: 'Sastreria expertos',
        Category: 'Libro'
    },
    {
        ItemName: 'Sastreria maestros',
        Category: 'Libro'
    },
    {
        ItemName: 'Metalista novatos',
        Category: 'Libro'
    },
    {
        ItemName: 'Metalista intermedia',
        Category: 'Libro'
    },
    {
        ItemName: 'Metalista avanzada',
        Category: 'Libro'
    },
    {
        ItemName: 'Metalista expertos',
        Category: 'Libro'
    },
    {
        ItemName: 'Metalista maestros',
        Category: 'Libro'
    },
    {
        ItemName: 'Pesca novatos',
        Category: 'Libro'
    },
    {
        ItemName: 'Pesca intermedia',
        Category: 'Libro'
    },
    {
        ItemName: 'Pesca avanzada',
        Category: 'Libro'
    },
    {
        ItemName: 'Pesca expertos',
        Category: 'Libro'
    },
    {
        ItemName: 'Pesca maestros',
        Category: 'Libro'
    },
    {
        ItemName: 'Agricultura novatos',
        Category: 'Libro'
    },
    {
        ItemName: 'Agricultura intermedia',
        Category: 'Libro'
    },
    {
        ItemName: 'Agricultura avanzada',
        Category: 'Libro'
    },
    {
        ItemName: 'Agricultura expertos',
        Category: 'Libro'
    },
    {
        ItemName: 'Agricultura maestros',
        Category: 'Libro'
    },
    {
        ItemName: 'PrimerosAux novatos',
        Category: 'Libro'
    },
    {
        ItemName: 'PrimerosAux intermedia',
        Category: 'Libro'
    },
    {
        ItemName: 'PrimerosAux avanzada',
        Category: 'Libro'
    },
    {
        ItemName: 'PrimerosAux expertos',
        Category: 'Libro'
    },
    {
        ItemName: 'PrimerosAux   maestros',
        Category: 'Libro'
    },
    {
        ItemName: 'Rebuscar novatos',
        Category: 'Libro'
    },
    {
        ItemName: 'Rebuscar intermedia',
        Category: 'Libro'
    },
    {
        ItemName: 'Rebuscar avanzada',
        Category: 'Libro'
    },
    {
        ItemName: 'Rebuscar expertos',
        Category: 'Libro'
    },
    {
        ItemName: 'Rebuscar   maestros',
        Category: 'Libro'
    },
    {
        ItemName: 'Abrelatas',
        Category: 'Cocina'
    },
    {
        ItemName: 'Cuchillo',
        Category: 'Cocina'
    },
    {
        ItemName: 'Rodillo',
        Category: 'Cocina'
    },
    {
        ItemName: 'Sarten',
        Category: 'Cocina'
    },
    {
        ItemName: 'Bandeja Hornear',
        Category: 'Cocina'
    },
    {
        ItemName: 'Bandeja Asar',
        Category: 'Cocina'
    },
    {
        ItemName: 'Taza',
        Category: 'Cocina'
    },
    {
        ItemName: 'Azucar',
        Category: 'Cocina'
    },
    {
        ItemName: 'Harina',
        Category: 'Cocina'
    },
    {
        ItemName: 'Levadura',
        Category: 'Cocina'
    },
    {
        ItemName: 'Cuenco',
        Category: 'Cocina'
    },
    {
        ItemName: 'Tetara',
        Category: 'Cocina'
    },
    {
        ItemName: 'Cacerola',
        Category: 'Cocina'
    },
    {
        ItemName: 'Olla',
        Category: 'Cocina'
    },
    {
        ItemName: 'Botella Agua',
        Category: 'Vario'
    },
    {
        ItemName: 'Mechero',
        Category: 'Vario'
    },
    {
        ItemName: 'Cerillos',
        Category: 'Vario'
    },
    {
        ItemName: 'Saco',
        Category: 'Vario'
    },
    {
        ItemName: 'Periodicos',
        Category: 'Vario'
    },
    {
        ItemName: 'Revistas',
        Category: 'Vario'
    },
    {
        ItemName: 'Semillas',
        Category: 'Vario'
    },
    {
        ItemName: 'Botella Wisky',
        Category: 'Vario'
    },
    {
        ItemName: 'Botella Vino',
        Category: 'Vario'
    },
    {
        ItemName: 'Bidon Gasolina',
        Category: 'Herramienta'
    },
    {
        ItemName: 'Tanque Propano',
        Category: 'Herramienta'
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
        ItemName: 'Destornillador',
        Category: 'Herramienta'
    },
    {
        ItemName: 'Almadena',
        Category: 'Herramienta'
    },
    {
        ItemName: 'Solador',
        Category: 'Herramienta'
    },
    {
        ItemName: 'Mascara Soldar',
        Category: 'Herramienta'
    },
    {
        ItemName: 'Alambre',
        Category: 'Herramienta'
    },
    {
        ItemName: 'Caja Clavos',
        Category: 'Herramienta'
    },
    {
        ItemName: 'Caja Tornillos',
        Category: 'Herramienta'
    },
    {
        ItemName: 'Hilo',
        Category: 'Herramienta'
    },
    {
        ItemName: 'Cordel',
        Category: 'Herramienta'
    },
    {
        ItemName: 'Pala',
        Category: 'Herramienta'
    },
    {
        ItemName: 'Regadera',
        Category: 'Herramienta'
    },
    {
        ItemName: 'Linea Pesca',
        Category: 'Herramienta'
    },
    {
        ItemName: 'Sebo Pesca',
        Category: 'Herramienta'
    },
    {
        ItemName: 'Hacha',
        Category: 'Herramienta'
    },
    {
        ItemName: 'Hacha Mano',
        Category: 'Herramienta'
    },
    {
        ItemName: 'Crique - Gato',
        Category: 'Herramienta'
    },
    {
        ItemName: 'Llave Cruz',
        Category: 'Herramienta'
    },
    {
        ItemName: 'Inflador',
        Category: 'Herramienta'
    },
    {
        ItemName: 'Llave Mecanica',
        Category: 'Herramienta'
    },
    {
        ItemName: 'Bolsa Basura',
        Category: 'Herramienta'
    },
    {
        ItemName: 'Hoja Metal',
        Category: 'Herramienta'
    },
    {
        ItemName: 'Hoja Metal Chica',
        Category: 'Herramienta'
    },
    {
        ItemName: 'Varillas Soldar',
        Category: 'Herramienta'
    },
    {
        ItemName: 'Barra Metal',
        Category: 'Herramienta'
    },
    {
        ItemName: 'Cinta Adhesiva',
        Category: 'Herramienta'
    },
    {
        ItemName: 'Tubo Metal',
        Category: 'Herramienta'
    },
    {
        ItemName: 'Pegamento',
        Category: 'Herramienta'
    },
    {
        ItemName: 'Pegamento Madera',
        Category: 'Herramienta'
    },
    {
        ItemName: 'Bat Baseball',
        Category: 'Arma'
    },
    {
        ItemName: 'Palanca',
        Category: 'Arma'
    },
    {
        ItemName: 'Palo Golf',
        Category: 'Arma'
    },
    {
        ItemName: 'Katana',
        Category: 'Arma'
    },
    {
        ItemName: 'Machete',
        Category: 'Arma'
    },
    {
        ItemName: 'Tong fa',
        Category: 'Arma'
    },
    {
        ItemName: 'Rifle',
        Category: 'Arma'
    },
    {
        ItemName: 'Escopeta',
        Category: 'Arma'
    },
    {
        ItemName: 'Pistola',
        Category: 'Arma'
    },
    {
        ItemName: 'Desinfectante',
        Category: 'Farmacia'
    },
    {
        ItemName: 'Toallitas Alchol',
        Category: 'Farmacia'
    },
    {
        ItemName: 'Algodon',
        Category: 'Farmacia'
    },
    {
        ItemName: 'Somniferos',
        Category: 'Farmacia'
    },
    {
        ItemName: 'Vitaminas',
        Category: 'Farmacia'
    },
    {
        ItemName: 'Analgesicos',
        Category: 'Farmacia'
    },
    {
        ItemName: 'Calmantes',
        Category: 'Farmacia'
    },
    {
        ItemName: 'Tijeras',
        Category: 'Farmacia'
    },
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

const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  }

export const getAllCategories = () => {
    let categories = defaultItemList.map(i => i.Category);
    let distinctCategories = categories.filter(onlyUnique);
    distinctCategories.push("Todas");
    return distinctCategories;
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