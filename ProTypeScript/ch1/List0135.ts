// File: List0135.ts
// Ref: Apress Pro TypeScript
// Listing 1-35. Built-in NodeList interface

interface NodeList
{
	length: number;
	item(index: number): Node;
	[index: number]: Node;
}
