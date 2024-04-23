import { expect, test } from "bun:test";
import { Status, StatusText } from "../src";

test("Status", () => {
  expect(Status.OK).toBe(200);
  expect(Status[200]).toBe(200);

  expect(Status.Continue).toBe(100);
  expect(Status.CONTINUE).toBe(100);
  expect(Status[100]).toBe(100);

  expect(Status["Switching Protocols"]).toBe(101);
  expect(Status.SWITCHING_PROTOCOLS).toBe(101);
  expect(Status[101]).toBe(101);

  expect(Status["I'm a Teapot"]).toBe(418);
  expect(Status.I_AM_A_TEAPOT).toBe(418);
  expect(Status[418]).toBe(418);
});

test("StatusText", () => {
  expect(StatusText.OK).toBe("OK");
  expect(StatusText[200]).toBe("OK");

  expect(StatusText.Continue).toBe("Continue");
  expect(StatusText.CONTINUE).toBe("Continue");
  expect(StatusText[100]).toBe("Continue");

  expect(StatusText["Switching Protocols"]).toBe("Switching Protocols");
  expect(StatusText.SWITCHING_PROTOCOLS).toBe("Switching Protocols");
  expect(StatusText[101]).toBe("Switching Protocols");

  expect(StatusText["I'm a Teapot"]).toBe("I'm a Teapot");
  expect(StatusText.I_AM_A_TEAPOT).toBe("I'm a Teapot");
  expect(StatusText[418]).toBe("I'm a Teapot");

  expect(StatusText.NON_AUTHORITATIVE_INFORMATION).toBe(
    "Non-Authoritative Information",
  );

  expect(StatusText.I_AM_USED).toBe("IM Used");
});
