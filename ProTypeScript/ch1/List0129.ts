// File: List0129.ts
// Ref: Apress Pro TypeScript
// Listing 1-29. Specialized overload signature

class RandomHanler{}
class ReversedHandler{}
class Hanlder{}

class HandlerFactory {
    public getHandler(type: 'Random'): RandomHanler;
    public getHandler(type: 'Reversed'): ReversedHandler;
    public getHandler(type: string): Hanlder;  // non-specialized signature
    public getHandler(type: string): Hanlder {
        // implementation signature
        switch (type) {
            case 'Random':
                return new RandomHanler();
            case 'Reversed':
                return new ReversedHandler();
            default:
                return new Hanlder();
        }
    }
}

// use it
var factory = new HandlerFactory();
console.log(factory.getHandler('Random'));
console.log(factory.getHandler('Reversed'));
console.log(factory.getHandler('Other'));
