// File: List0130.ts
// Ref: Apress Pro TypeScript
// Listing 1-30. getElementsByTagName

// This examples does not list all variations...
// Jedi: simulate jQuery
function getElementsByTagName(name: "a"): NodeListOf<HTMLAnchorElement>;
function getElementsByTagName(name: "blockquote"): NodeListOf<HTMLQuoteElement>;
function getElementsByTagName(name: "body"): NodeListOf<HTMLBodyElement>;
function getElementsByTagName(name: "button"): NodeListOf<HTMLButtonElement>;
function getElementsByTagName(name: string): NodeList;
function getElementsByTagName(name: string): NodeList {
    return document.getElementsByTagName(name);
}
