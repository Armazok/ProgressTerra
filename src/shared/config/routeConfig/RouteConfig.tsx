import {RouteProps} from "react-router-dom";
import {BonusPage} from "pages/BonusPage";
import {MainPage} from "pages/MainPage";

export enum AppRoutes {
    MAIN = 'main',
    BONUS = 'bonus'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.BONUS]: '/bonus'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>,
    },
    [AppRoutes.BONUS]: {
        path: RoutePath.bonus,
        element: <BonusPage/>
    },

}