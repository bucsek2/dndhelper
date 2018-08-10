module Dice {
    export function d20(): number {
        return getRndInteger(1, 20);
    }

    export function d12(): number {
        return getRndInteger(1, 12);
    }

    export function d10(): number {
        return getRndInteger(1, 10);
    }

    export function d8(): number {
        return getRndInteger(1, 8);
    }

    export function d6(): number {
        return getRndInteger(1, 6);
    }

    export function d4(): number {
        return getRndInteger(1, 4);
    }

    export function d2(): number {
        return getRndInteger(1, 2);
    }

    function getRndInteger(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
