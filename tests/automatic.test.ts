import { describe, expect, test } from "bun:test";
import { Status, StatusText } from "../src";

const screamingSnakeCase = /^[A-Z]+(_[A-Z]+)*$/;

describe("Status", () => {
  const values = [...new Set(Object.values(Status))];

  test("Values are numbers", () => {
    expect(values).toContainEqual(expect.any(Number));
  });

  test("Values exist as keys", () => {
    expect(Status).toContainKeys(values);
  });
});

describe("StatusText", () => {
  const values = [...new Set(Object.values(StatusText))];

  test("Values are strings", () => {
    expect(values).toContainEqual(expect.any(String));
  });

  test("Screaming Snake Case exist for all values", () => {
    const filteredKeys = Object.keys(StatusText).filter(
      (key) => typeof key === "string" && screamingSnakeCase.test(key),
    );
    const filteredValues = filteredKeys.map(
      (key) => StatusText[key as keyof typeof StatusText],
    );
    expect(filteredValues).toEqual(expect.arrayContaining(values));
  });
});
