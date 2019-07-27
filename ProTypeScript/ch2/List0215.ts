// File: List0215.ts
// Ref: Apress Pro TypeScript
// Listing 2-15. Ambient class and function

declare class jQuery {
	html(html: string): void;
}
declare function $(query: string): jQuery;
$('#id').html('Hello World');
