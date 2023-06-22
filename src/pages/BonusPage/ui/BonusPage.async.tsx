import {lazy} from "react";

export const BonusPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(() => resolve(import('./BonusPage')), 1500)
}));
