import {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/RouteConfig";
import classes from './AppRouter.module.scss'
export const AppRouter = () => (
    <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
            <Route
                key={path}
                path={path}
                element={(
                    <Suspense fallback={<div className={classes.loader}>Lazy Loader...</div>}>
                        <div>
                            {element}
                        </div>
                    </Suspense>
                )}
            />
        ))}
    </Routes>
);

