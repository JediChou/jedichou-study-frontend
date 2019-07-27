// Dart in Action
// Listing 1.8 Drawing on the browser canvas

import 'dart:html';
import 'dart:math';

void main {
	// Creates new CanvasElement
	CanvasElement canvas = new Element.tag("canvas");
	canvas.height = 300;
	canvas.width = 300;

	// Adds canvas to document body
	document.body.children.add(canvas);

	// Gets drawing context from canvas
	var ctx = canvas.getContext("2d");

	// Writes text
	ctx.fillText("hello canvas", 10, 10);

	// Draws filled circle
	ctx.beginPath();
	ctx.arc(50, 50, 20, 0, PI * 2, true);
	ctx.closePath();
	ctx.fill();
}
