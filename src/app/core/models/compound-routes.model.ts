import { Route } from "@angular/router";

export class NavigationConfig {
    constructor(public routes: CompoundRoutes[]){}

    public get ICONS(): any {
        const obj: any = {};
        this.routes.forEach((value: CompoundRoutes) => {
            obj[value.iconName] = value.icon;
        });
        return obj;
    }

    public get ROUTES_NAMES(): RouteIcon[] {
        const obj: any = {};
        return this.routes.map((value: CompoundRoutes) => ({
            route: value.config.path,
            iconName: value.iconName
        }) as RouteIcon);
    }
}

export interface CompoundRoutes {
    config: Route,
    iconName: string,
    icon: string
}

export interface RouteIcon {
    route: string,
    iconName: string
}