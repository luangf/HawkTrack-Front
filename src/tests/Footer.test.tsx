import Footer from "@/components/general/Footer";
import { render } from "@testing-library/react";

const sum = (x: number, y: number) => {
  return x + y;
};

//Component
//Unitary
describe("Sum", () => {
  it("Should sum 2 numbers", () => {
    expect(sum(4, 4)).toBe(8);
  });
  it("Should render Footer", () => {
    render(<Footer />);
  });
});

/*
describe("Footer Component", () => {
  it("should appear Terms of Use", () => {
    render(<Footer />);
    expect(true).toBeTruthy();
  });
});
*/
