import test from "ava";

import Example from "../../src/Dojo/Example";

test("test setup", t => {
  t.is(Example.random(), 4);
});

test.todo("write your tests here");