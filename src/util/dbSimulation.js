export const animalsInDatabase = [];

export function initializeAnimalDatabase() {
  animalsInDatabase.push("dog", "cat", "bird");
}

export function clearAnimalDatabase() {
  animalsInDatabase.length = 0;
}

export function addAnimal() {
  animalsInDatabase.push("ferret");
}