import { useState } from "react";

export const useToggle = (initialValue: boolean = false): [boolean, () => void] => {
    const [value, setValue] = useState<boolean>(initialValue);

    function toggleValue(): void {
        setValue(previousValue => !previousValue);
    }

    return [value, toggleValue];
}