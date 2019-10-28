export function injector(ServiceClass: any) {
    return (target: any, key: string | symbol) => {
        return target[key] = new ServiceClass()
    }
}