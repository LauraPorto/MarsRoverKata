export class Rover {
  command: string = "";
  x: number = 0;
  y: number = 0;
  orientation: string = "N";

  constructor(command: string) {
    this.command = command;
  }

  extractCommand() {
    this.command.split("").map((char) => {
      if (char === "L") {
        this.turnLeft();
      }
      if (char === "R") {
        this.turnRight();
      }
      if (char === "F") {
        this.moveFront();
      }
      if (char === "B") {
        this.moveBack();
      }
    });
  }

  moveFront() {
    switch (this.orientation) {
      case "N":
        return this.y++;
      case "S":
        return this.y--;
      case "W":
        return this.x--;
      case "E":
        return this.x++;
    }
  }
  moveBack() {
    switch (this.orientation) {
      case "N":
        return this.y--;
      case "S":
        return this.y++;
      case "W":
        return this.x++;
      case "E":
        return this.x--;
    }
  }
  turnLeft() {
    switch (this.orientation) {
      case "N":
        return (this.orientation = "W");
      case "W":
        return (this.orientation = "S");
      case "S":
        return (this.orientation = "E");
      case "E":
        return (this.orientation = "N");
    }
  }
  turnRight() {
    switch (this.orientation) {
      case "N":
        return (this.orientation = "E");
      case "E":
        return (this.orientation = "S");
      case "S":
        return (this.orientation = "W");
      case "W":
        return (this.orientation = "N");
    }
  }

  getPosition(): string {
    return `${this.x},${this.y},${this.orientation}`;
  }
}
