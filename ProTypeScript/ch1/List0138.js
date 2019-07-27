// File: List0138.ts
// Ref: Apress Pro TypeScript
// Listing 1-38. Manually mapped constructor parameters
// Normal class like c# or java.
var Song = (function () {
    function Song(artist, title) {
        this.artist = artist;
        this.title = title;
    }
    Song.prototype.play = function () {
        console.log('Playing ' + this.title + ' by ' + this.artist);
    };
    return Song;
}());
// Use it.
new Song('Girl generation', 'Gee').play();
