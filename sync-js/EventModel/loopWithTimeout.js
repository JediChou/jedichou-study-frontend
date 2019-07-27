// The Pragmatic Programmers - Async JavaScript
// EventModel/loopWithTimeout.js
for (var i = 1; i <= 3; i++) {
	setTimeout(function() {
		console.log(i);
	}, 0);
};
