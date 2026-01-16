export function createSetField<T>(
    setState: React.Dispatch<React.SetStateAction<T>>
) {
    return <K extends keyof T>(key: K, value: T[K]) => {
        debugger;
        setState(prev => ({
            ...prev,
            [key]: value,
        }));
    };
}