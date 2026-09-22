import { test } from "node:test";
import assert from "node:assert";

import { validateEmail, validatePassword, validateAge } from "./validation.js";

test("validateEmail hyväksyy tavallisen sähköpostiosoitteen", () => {
  const result = validateEmail("opiskelija@example.com");

  assert.strictEqual(result, true);
});

(test("validateEmail hylkää virheellisen sähköpostiosoitteen"),
  () => {
    const result = validateEmail("epäkelpo@sähköposti");

    assert.strictEqual(result, false);
  });
