# RPG Game

#### An application containing business logic for an RPG game.

#### By Brian Scherner

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* Webpack
* Node Package Manager
* Jest

## Description

This application demonstrates knowledge and application of functional programming concepts such as closures, composition, and state. It contains business logic for creating characters, modifying attributes, leveling up and acquiring inventory items for an outlaw biker-themed RPG game. It does not contain a UI.

## Setup/Installation Requirements

* Select the green "Code" button and clone this repository to your desktop.
* In the terminal, go to your project folder and run the command `$ npm install` to install node_modules.
* Run the command `$ npm run build` to bundle together JS files.
* Enter the command `$ npm run start` to start a live development server.
* Enter the command `$ npm run lint` to check for errors.

## Known Bugs

None.

## Further Exploration

* Could expand business logic to include more complexity for character creation and adding/modifying attributes.
* Could expand functionality to include a more advanced leveling up and inventory system.

## License

MIT

Copyright(c) 2024 Brian Scherner

## Project Ideas

### Project Outline Ideas

* Motorcycle gang setting
* 4 character types
* five base attributes for each character

Character types:

* Mechanic
* Enforcer
* Sergeant
* President

#### Battle system

* bikers fight members from other biker gangs

Fight conditions:

function for attacking

function for defending

function for calculating damage done

function for determining a winner

a character fights another character

character needs a health property

fight will be over when one characters health is 0

#### Level up system

* characters attribute values increase by winning brawls
* characters level up when attributes reach certain levels
* attributes increase with each new level
* after every 5 levels, character gains a new unique ability

#### Inventory

* certain weapons increase physical attributes, such as strength
* certain clothing increases attributes, such as endurance