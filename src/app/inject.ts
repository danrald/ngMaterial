class InjectionToken<T> { 
    constructor(public value: T) {}
    }
    class Injector {
    private readonly dependencies: Map<InjectionToken<any>, any> = new Map(); 
    provide<T>(dependency: T): InjectionToken<T> { 
    const token = new InjectionToken(dependency);
    this.dependencies.set(token, dependency);
    return token;
    }
    inject<T>(token: InjectionToken<T>): T { 
    const dependency = this.dependencies.get(token) as T;
    return dependency;
    }
    }
    