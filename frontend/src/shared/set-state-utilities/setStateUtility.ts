import React from "react";

export function createSetField<T>(
    setState: React.Dispatch<React.SetStateAction<T>>
) {
    return <K extends keyof T>(key: K, value: T[K]) => {
        setState(prev => ({
            ...prev,
            [key]: value,
        }));
    };
}