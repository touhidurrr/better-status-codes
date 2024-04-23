import { describe, expect, test } from "bun:test";
import { STATUS_CODES } from "node:http";
import { Status, StatusText } from "../src";
import statuses, { message } from "statuses";
import { StatusCodes, ReasonPhrases } from "http-status-codes";

function toScreamingSnakeCase(str: string) {
  return str.toUpperCase().replace(/[^a-zA-Z]/g, "_");
}

describe("Status", () => {
  test("http.STATUS_CODES", () => {
    const invertedStatusCodes = Object.fromEntries(
      Object.entries(STATUS_CODES).map(([key, value]) => [value, +key]),
    );
    expect(Status).toEqual(expect.objectContaining(invertedStatusCodes));
  });

  test("statuses", () => {
    const testObj = Object.fromEntries(
      Object.entries(statuses.code).map(([key, value]) => [
        toScreamingSnakeCase(key),
        value,
      ]),
    );

    // modify incorrect key
    testObj["I_AM_A_TEAPOT"] = testObj["I_M_A_TEAPOT"];
    delete testObj["I_M_A_TEAPOT"];

    expect(Status).toEqual(expect.objectContaining(testObj));
  });

  test("http-status-codes", () => {
    Object.entries(StatusCodes)
      .filter(([, value]) => typeof value === "number")
      .forEach(([key, value]) => {
        if (value === 419) return; // does not exist
        expect(Status[key as keyof typeof Status]).toBe(
          value as (typeof Status)[keyof typeof Status],
        );
      });
  });
});

describe("StatusText", () => {
  test("http.STATUS_CODES", () => {
    expect(StatusText).toEqual(expect.objectContaining(STATUS_CODES));
  });

  test("statuses", () => {
    expect(StatusText).toEqual(expect.objectContaining(statuses.message));
  });

  test("http-status-codes", () => {
    //@ts-ignore https://datatracker.ietf.org/doc/html/rfc7168
    ReasonPhrases.IM_A_TEAPOT = "I'm a Teapot";
    // The hyphen is missing in this library, maybe a typo?
    //@ts-ignore https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/203
    ReasonPhrases.NON_AUTHORITATIVE_INFORMATION =
      "Non-Authoritative Information";

    // finally run the tests
    expect(StatusText).toEqual(expect.objectContaining(ReasonPhrases));
  });
});
