---
layout: default
title: Minecraft
---

# ⚙️ Step 1 — Understanding the Core Pieces
Before we install anything, you need a mental model of what’s going on.

## 🧩 What is a Plugin (Really)?
A **plugin** is a small program that runs *inside* a Minecraft server.

Think of it like this:
* Minecraft server = the “game engine running the world”
* Plugin = something that hooks *into* that engine and says:
>“Hey, when THIS happens, I want to do THAT”

## 🧠 Key Concept #1 — Event
An **event** is something that happens in the game.

Examples:
* A player joins
* A block breaks
* A command is typed
* A player takes damage

You don’t constantly check for things.
Instead, you *listen*.

👉 This is called **event-driven programming**

**Event-driven programming** =
You write code that reacts *when something happens*, instead of running constantly.

## 🧠 Key Concept #2 — API

An **API (Application Programming Interface)** is:
> A set of tools and rules that let your code talk to another system.

In our case:
* The server exposes an API (like Spigot or Paper)
* Your plugin uses it to interact with the game

Example:
* You don’t program how Minecraft breaks a block
* You just say:
`when block breaks → run my code`

## 🧠 Key Concept #3 — Java Refresher (Minimal but Critical)
We’ll rebuild this gradually, but here’s the essence:

Java code is structured like this:
```java
public class MyPlugin {
    public void doSomething() {
        System.out.println("Hello world");
    }
}
```

Key terms:
* **method** → a function inside a class (does something)
* **class** → a blueprint for something (your plugin is a class)
* **System.out.println** → prints text (debugging tool)

We’ll revisit all of this properly when we code.

## 🧠 Key Concept #4 — Server vs Client
This is *crucial*:
* **Server** = runs the world logic
* **Client** = your game (what you see)

Plugins:
* ONLY run on the **server**

Mods:
* Can run on **client, server, or both**

## 🧠 Your First Mental Model
If you remember nothing else, remember this:
> A plugin is a Java program that listens to game events and reacts using the server API.

## 🧪 Before We Move On
I want to make sure this clicks before we install anything.

### Questions for you:
1. In your own words: What is an **event** in Minecraft/plugin development?
    <details>
    <summary><strong>Click to see the answer!</strong></summary>
    👉 An <strong>event</strong> is an object created and dispatched by the server to represent that a specific action or occurrence has taken place in the game..<br>
    💡 Key Insight: Events don’t just notify you — they also carry information.
    </details>


2. What’s the difference between: a **plugin** and a **mod**
    <details>
    <summary><strong>Click to see the answer!</strong></summary>
    👉 A <strong>plugin</strong> is a server-side Java program that extends or modifies gameplay behavior by interacting with a server API, without directly altering the base game code.<br>
    👉 A <strong>mod (modification)</strong> is a program that directly alters or extends the game's code and assets, allowing deep changes such as new blocks, items, mechanics, or rendering behavior.<br>
    🔍 Important Distinction:
    <ul>
    <li>Plugins → work on top of the game</li>
    <li>Mods → change inside the game</li>
    </ul>
    </details>


3. What do you think this means: **“event-driven programming”**?
<details>
<summary><strong>Click to see the answer!</strong></summary>
👉 <strong>Event-driven programming</strong> is a programming paradigm where the flow of execution is determined by events, and code is executed in response to those events.<br>
🔍 Key Terms:
<ul>
<li>Paradigm = a style or way of programming</li>
<li>Flow of execution = the order in which code runs</li>
</ul>
💡 Deep Insight:<br>
In normal programs:
<ul><li>You control the order</li></ul>
In event-driven systems:
<ul>
<li>The system controls the order</li>
<li>You provide responses</li>
</ul>
</details>


4. Optional (but valuable): Do you remember anything about **Java classes or methods**, or does it feel fuzzy?
<details>
<summary><strong>Click to see the answer!</strong></summary>
👉 An event is: A signal sent by the game when something has already happened.
</details>
