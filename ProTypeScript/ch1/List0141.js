// File: List0141.ts
// Ref: Apress Pro TypeScript
// Listing 1-41. Class heritage
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Song = (function () {
    function Song(artist, title) {
        this.artist = artist;
        this.title = title;
    }
    Song.prototype.play = function () {
        console.log('Playing ' + this.title + ' by ' + this.artist);
    };
    Song.Comparer = function (a, b) {
        if (a.title === b.title) {
            return 0;
        }
        return a.title > b.title ? 1 : -1;
    };
    return Song;
}());
var Playlist = (function () {
    function Playlist(songs) {
        this.songs = songs;
    }
    Playlist.prototype.play = function () {
        var song = this.songs.pop();
        song.play();
    };
    Playlist.prototype.sort = function () {
        this.songs.sort(Song.Comparer);
    };
    return Playlist;
}());
var RepeatingPlaylist = (function (_super) {
    __extends(RepeatingPlaylist, _super);
    function RepeatingPlaylist(songs) {
        _super.call(this, songs);
        this.songIndex = 0;
    }
    RepeatingPlaylist.prototype.play = function () {
        this.songs[this.songIndex].play();
        this.songIndex++;
        if (this.songIndex >= this.songs.length) {
            this.songIndex = 0;
        }
    };
    return RepeatingPlaylist;
}(Playlist));
var songs = [
    new Song('Earth', 'Beyond'),
    new Song('Gee', 'Girl-Generation'),
    new Song('Jar of love', 'QuWanTing')
];
///////////////////////////////////////////////////////////////
// TODO: there has a problem
//   error: TypeError: Cannot read property 'play' of undefined
// var playlist = new Playlist(songs);
// playlist.play();
// playlist.play();
// playlist.play();
///////////////////////////////////////////////////////////////
var repeatingPlaylist = new RepeatingPlaylist(songs);
repeatingPlaylist.sort();
repeatingPlaylist.play();
repeatingPlaylist.play();
repeatingPlaylist.play();
