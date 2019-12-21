# TutsPlus Getting Started with TypeScript

* Author: Jeremy McPeak
* Jedi Chou at 2019.12.19 18:42

## 1.1. Introduction

## 1.2. What You Need to Use TypeScript

* Suite
  * TypeScript support for Sublime Text
  * TypeScript support for Emacs
  * TypeScript support for Vim

* Visual Studio
  * Visual Studio Express 2013 for Web
  * Visual Studio Express 2013 with Update 2 for Windows
  * Visual Studio Express 2013 for Windows Desktop
  * Visual Studio Team Foundation Server Express 2013 with Update 2

* Download "Web Essentials 2013 for Update 2"

* Install TypeScript at console

```bash
sudo npm install -g typescript
```

* Compile TypeScript file to JavaScript file

```bash
tsc helloworld.ts
```

* Project Template name
  * New Project
  * Templates-Visual C#-TypeScript
  * HTML Application with TypeScript

## 2.1. The Type System

* 演示：var t;
* 演示：var t: string;
* 演示: var t: string = "hello";
* 演示: var t: string; t = ""; t = true;
* 演示：function sum(a, b)
* 演示：function sum(a:string, b:number): string

## 2.2. Object Shapes and Interfaces

* 演示：生成对象实例
* 演示：定义接口
* 演示：接口继承接口

## 3.1. Classes

* 关于Static方法要再看一遍

## 3.2 Inheritance (Sub-Classing)

* 实现一个几个图形的程序编写，主要演示继承机制
* 实现Point和3DPoint的编写，主要也是演示子类继承父类

## 3.3. Implementing Interfaces

* 生成一个HTMLElement对象，在VS2013中按F12，可导航到HTMLElement的定义
* Jedi: TypeScript这些内置的定义基本都是any类型
* Jedi: TypeScript这些内置对象、函数怎么定义出来的？根据DOM对象吗？

## 3.4. Functions and Overloads

* 函数定义有多种方式
* 函数重载（不必有对象或实例）
* 函数重载（对象中的函数重载）
