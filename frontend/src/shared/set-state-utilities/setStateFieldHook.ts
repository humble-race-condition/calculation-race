import {useCallback, useState} from "react";

export function useSetStateField<T>(initialState: T) {
    const [state, setState] = useState<T>(initialState);

    const setField = useCallback(
        <K extends keyof T>(key: K, value: T[K]) => {
            setState(prev => ({
                ...prev,
                [key]: value,
            }));
        }, [setState]);

    return ({
        state,
        setField,
    });
}