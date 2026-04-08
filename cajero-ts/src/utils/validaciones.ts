// Valida que un valor no sea null ni undefined. Genérico para cualquier tipo T.
export function assertNotNull<T>(value: T | null | undefined, message: string): asserts value is T {
    if (value === null || value === undefined) {
        throw new Error(message);
    }return
}

// Buscar por criterio en un arreglo, genérico
export function findBy<T>(arr: T[], predicate: (item: T)=> boolean):T | undefined{
    for (const item of arr){
        if (predicate(item)) {
            return item;
        }
    }return undefined;
}