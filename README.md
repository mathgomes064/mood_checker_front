# Mood checker front

Mood checker is an app for work teams where your teammates and you can share your mood and feedback about the project you're working on.

## Table of content
- [Tech stack](#tech-stack)
- [Installation](#installation)
- [File structure](#file-structure)
- [Requirements](#requirements)
- [References](#references)

## Tech stack
* JavaScript used for logical and interaction requirements
* ReactJS powers the component architecture of the project
* ChakraUI used as the UI library

## Requirements

* Node 18+ 
* ViteJS 4.1+

## Installation

1. Clone this repository

```bash
git clone https://github.com/mathgomes064/mood_checker_front.git
```

2. Enter to the repository folder and install the dependencies

```bash
cd mood_checker_front
npm install
```

3. Run the local environment 

```bash
npm run dev
```

## File structure
* ```.husky/```: husky configuration for git hooks.
* ```public/```: for images and assets in general
* ```src/```: source folder.
  * ```hooks/```: custom react hooks.
  * ```components/```: react components.

## References

* For the react components folder structure, we took insparation from this [Josh Comeau article](https://www.joshwcomeau.com/react/file-structure/).
