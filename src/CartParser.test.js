import CartParser from "./CartParser";
import {
  parsedLines,
  OUTPUT,
  EXPECTED_CSV_FILE_DATA,
  DATA_WITH_NEGATIVE_CELL,
  DATA_WITH_BAD_CELLS_NUMBER,
  DATA_WITH_EMPTY_CELL,
  DATA_WITH_INCORRECT_HEADER,
  BUNCH_OF_BROKEN_DATA,
} from "./mocs/mockData";
import { v4 } from "uuid";

let parser;
const CSV_FILE_PATH = "./samples/cart.csv";

jest.mock("uuid");

beforeEach(() => {
  parser = new CartParser();

  v4.mockReturnValue("12345");
});

describe("CartParser - unit tests", () => {
  // 1
  test("parser.readFile() should return correct data", () => {
    const fileData = parser.readFile(CSV_FILE_PATH);
    expect(fileData).toBe(EXPECTED_CSV_FILE_DATA);
  });

  // 2
  test("parser.readFile() should throw error", () => {
    expect(() => parser.readFile("bad path", "utf-8").toThrowError());
  });

  // 3
  test("parser.validate() shouldn't throw error", () => {
    const fileData = parser.readFile(CSV_FILE_PATH);
    const validationErrors = parser.validate(fileData);
    expect(validationErrors.length).toBe(0);
  });

  // 4
  test('parser.validate() should throw "negative cell" error', () => {
    const validationErrors = parser.validate(DATA_WITH_NEGATIVE_CELL);
    expect(validationErrors.length).toBe(1);
    expect(validationErrors[0].message).toStrictEqual(
      `Expected cell to be a positive number but received "-4.4".`
    );
  });

  // 5
  test('parser.validate() should throw "incorrect cells number" error', () => {
    const validationErrors = parser.validate(DATA_WITH_BAD_CELLS_NUMBER);
    expect(validationErrors.length).toBe(1);
    expect(validationErrors[0].message).toStrictEqual(
      `Expected row to have 3 cells but received 2.`
    );
  });

  // 6
  // ERROR TEST(but I don't know how to trigger it)

    // test('parser.validate() should throw "empty cell" error', () => {
    //   const validationErrors = parser.validate(DATA_WITH_EMPTY_CELL);
    //   expect(validationErrors.length).toBe(1);
    //   expect(validationErrors[0].message).toStrictEqual(`Expected cell to be a nonempty string but received "".`);
    // });

  // 7
  test('parser.validate() should throw "incorrect header" error', () => {
    const validationErrors = parser.validate(DATA_WITH_INCORRECT_HEADER);
    expect(validationErrors.length).toBe(1);
    expect(validationErrors[0].message).toStrictEqual(
      'Expected header to be named "Quantity" but received Quan_tity.'
    );
  });

  // 8
  test("parser.parseLine() should parse all lines correctly", () => {
    const lines = EXPECTED_CSV_FILE_DATA.split(/\n/)
      .filter((l) => l)
      .filter((l, i) => i > 0);
    for (let i = 0; i < lines.length; i++) {
      const parsedLine = parser.parseLine(lines[i]);
      expect(parsedLine).toStrictEqual(parsedLines[i]);
    }
  });

  // 9
  test("parser.calcTotal() should work correctly", () => {
    const total = parser.calcTotal(parsedLines);
    expect(total).toBe(357.31999999999994);
  });

  // 10
  test("parser.createError() should return correct error object", () => {
    const error = {
      type: "header",
      row: 2,
      column: 3,
      message: "error message",
    };
    expect(parser.createError("header", 2, 3, "error message")).toStrictEqual(
      error
    );
  });
});

describe("CartParser - integration test", () => {
// 11
  test("parser.parse() should work correctly", () => {
    const result = parser.parse(CSV_FILE_PATH);
    expect(result).toStrictEqual(OUTPUT);
  });
});