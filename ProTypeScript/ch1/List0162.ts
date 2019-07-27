// File: List0162.ts
// Ref: Apress Pro TypeScript
// Listing 1-62. Type constraints

interface HasName {
	name: string;
}

class Personalization {
	static greet<T extends HasName>(obj: T) {
		return 'Hello ' + obj.name;
	}
}

class GuangDong implements HasName {
	name: string = 'GuangDong';
}

class HuBei implements HasName {
	name: string = 'Hubei';
}

class ShanDong {
	name: string = 'ShanDong';
}

// create some instances
var gd = new GuangDong();
var hb = new HuBei();
var sd = new ShanDong();

// call static method.
console.log(Personalization.greet(gd));
console.log(Personalization.greet(hb));
console.log(Personalization.greet(sd));
