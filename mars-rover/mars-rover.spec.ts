import { expect } from "@jest/globals";
import { Rover } from "./mars-rover";

describe("Mars Rovers Kata", () => {
  it("should return position after move forward", () => {
    const command: string = "FF";

    const rover = new Rover(command);
    rover.extractCommand();

    expect(rover.getPosition()).toBe("0,2,N");
  });
  it("should return position after move forward and back", () => {
    const command: string = "FFBB";

    const rover = new Rover(command);
    rover.extractCommand();

    expect(rover.getPosition()).toBe("0,0,N");
  });
  it("should return position after turn left", () => {
    const command: string = "FFBBL";

    const rover = new Rover(command);
    rover.extractCommand();

    expect(rover.getPosition()).toBe("0,0,W");
  });
  it("should return position after turn right", () => {
    const command: string = "FFBBLRR";

    const rover = new Rover(command);
    rover.extractCommand();

    expect(rover.getPosition()).toBe("0,0,E");
  });
  it("should return position after move to West", () => {
    const command: string = "LBB";

    const rover = new Rover(command);
    rover.extractCommand();

    expect(rover.getPosition()).toBe("2,0,W");
  });
  it("should return position after move to East", () => {
    const command: string = "LFF";

    const rover = new Rover(command);
    rover.extractCommand();

    expect(rover.getPosition()).toBe("-2,0,W");
  });
  it("should return position after a large command", () => {
    const command: string = "FFRBBLFRBB";

    const rover = new Rover(command);
    rover.extractCommand();

    expect(rover.getPosition()).toBe("-4,3,E");
  });
});
