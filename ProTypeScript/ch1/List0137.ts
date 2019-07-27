// File: List0137.ts
// Ref: Apress Pro TypeScript
// Listing 1-37. Constructors

class Song {
    constructor(private artist: string, private title: string) {}
    play() {
        console.log('Playing ' + this.title + ' by ' + this.artist);
    }
}

class Jukebox {
    constructor(private songs: Song[]) {}
    play() {
        var song = this.getRandomSong();
        song.play();
    }
    private getRandomSong() {
        var songCount = this.songs.length;
        var rnd = Math.floor(Math.random() * songCount);
        return this.songs[rnd];
    }
}

var songs = [
    new Song('Bushbaby', 'Megaphone'),
    new Song('Delays', 'One More Lie In'),
    new Song('Goober Gun', 'Stereo'),
    new Song('Sohnee', 'Shatter'),
    new Song('Get Amped', 'Celebrity')
];

var jukebox = new Jukebox(songs);
jukebox.play();