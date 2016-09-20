export class BreadcrumbService {

    private routeFriendlyNames: any = {};

    /**
     * Specify a friendly name for the corresponding route. Please note this should be the full url of the route,
     * as in the same url you will use to call router.navigate().
     *
     * @param route
     * @param name
     */
    addFriendlyNameForRoute(route: string, name: string): void {
        this.routeFriendlyNames[route] = name;
    }

    /**
     * Show the friendly name for a given url. If no match is found the url (without the leading '/') is shown.
     *
     * @param route
     * @returns {*}
     */
    getFriendlyNameForRoute(route: string): string {
        var val = this.routeFriendlyNames[route];
        if (!val) {
            val = route.substr(1, route.length);
        }

        return val;
    }
}
