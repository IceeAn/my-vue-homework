type IdGeneratorInstance = {
    lastId: () => number
    getNextId: () => number
}

export const IdGenerator = (() => {
    let currentId = 0;
    let instance : IdGeneratorInstance | null = null;

    return ():IdGeneratorInstance => {
        if (instance === null) {
            instance = {
                lastId: () => currentId,
                getNextId: () => ++currentId
            };
        }
        return instance;
    };
})();
