// File: List0138.ts
// Ref: Apress Pro TypeScript
// Listing 1-38. Manually mapped constructor parameters

// Normal class like c# or java.
class Song {
	private artist: string;
	private title: string;

	constructor(artist: string, title: string) {
		this.artist = artist;
		this.title = title;
	}

	play() {
		console.log('Playing ' + this.title + ' by ' + this.artist);
	}
}

// Use it.
new Song('Girl generation', 'Gee').play();
