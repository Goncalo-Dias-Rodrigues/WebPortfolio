import CodeWallpaper from "./assets/generalPhotos/CodeWallpaper.jpg"

function calculateAge() {
    const today = new Date();
    const birthdate = new Date("2004-11-21");

    let age = today.getFullYear() - birthdate.getFullYear();

    const monthDifference = today.getMonth() - birthdate.getMonth();
    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    return age;
}

const informations = [
  {name: 'About Me', information: `Hello there! I'm Gonçalo, I have ${calculateAge()} years and I'm currently studying at Universidade do Algarve (Faro, Portugal) on my last year of the Computer Science course.
  In this course I've gain experience mostly in Java and now more recently in Python and JavaScript.
  I've also have experience using Git, GitHub.
  I've studied Data Strucutres, Algoritms, Object-Oriented Design, SOLID Principles and Big-O Notation.`, image: CodeWallpaper},
  {name: "Snake Game", information: "This repository contains a simple implementation of the classic Snake game using the Python turtle module. The player controls a snake, navigating it to eat food and grow longer while avoiding collisions with the walls and its own tail.", image: CodeWallpaper},
  {name: "8-Puzzle Solver", information: "definition bla bla", image: CodeWallpaper}
];

export default informations;