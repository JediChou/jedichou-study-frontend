// File: List0139.ts
// Ref: Apress Pro TypeScript
// Listing 1-39. Properties and methods

class Song {
	private artist: string;
	private title: string;
	constructor(artist: string, title: string) {
		this.artist = artist;
		this.title = title;
	}
	play() {
		console.log("Play " + this.title + " by " + this.artist);
	}
}

class Playlist {
	private songs: Song[] = [];
	static maxSongCount: number = 30;

	constructor(public name: string) {}
	addSong(song: Song) {
		if (this.songs.length >= Playlist.maxSongCount) {
			throw new Error('Playlist is full');
		}
		this.songs.push(song);
	}
}

// Create a new instance
var playlist = new Playlist('My Playlist');
console.log('playlist name is ' + playlist.name);

// Calling a public instance method
playlist.addSong(new Song('Girl-generation', 'Gee'));
console.log(Playlist.maxSongCount);

