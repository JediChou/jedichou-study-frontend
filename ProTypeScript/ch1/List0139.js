// File: List0139.ts
// Ref: Apress Pro TypeScript
// Listing 1-39. Properties and methods
var Song = (function () {
    function Song(artist, title) {
        this.artist = artist;
        this.title = title;
    }
    Song.prototype.play = function () {
        console.log("Play " + this.title + " by " + this.artist);
    };
    return Song;
}());
var Playlist = (function () {
    function Playlist(name) {
        this.name = name;
        this.songs = [];
    }
    Playlist.prototype.addSong = function (song) {
        if (this.songs.length >= Playlist.maxSongCount) {
            throw new Error('Playlist is full');
        }
        this.songs.push(song);
    };
    Playlist.maxSongCount = 30;
    return Playlist;
}());
// Create a new instance
var playlist = new Playlist('My Playlist');
console.log('playlist name is ' + playlist.name);
// Calling a public instance method
playlist.addSong(new Song('Girl-generation', 'Gee'));
console.log(Playlist.maxSongCount);
