import { expect, test } from "bun:test";
import { StatusCodes } from "../src/codes";
import { StatusTexts } from "../src/texts";

import {
  Code,
  Message,
  Reason,
  ReasonPhrase,
  Status,
  StatusMessage,
  StatusText,
  Text,
} from "../src";

test("Status Alias", () => {
  expect(Code).toBe(StatusCodes);
  expect(Status).toBe(StatusCodes);
});

test("StatusText Alias", () => {
  expect(Text).toBe(StatusTexts);
  expect(Reason).toBe(StatusTexts);
  expect(Message).toBe(StatusTexts);
  expect(StatusText).toBe(StatusTexts);
  expect(StatusMessage).toBe(StatusTexts);
  expect(ReasonPhrase).toBe(StatusTexts);
});
