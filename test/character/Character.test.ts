import { describe, expect, fn, test } from "vitest";
import { mount } from "@vue/test-utils";
import Character from "../../src/character/Character.vue";
import { createTestingPinia } from "@pinia/testing";

describe("Character", () => {
  test("display", () => {
    expect(Character).toBeDefined();

    const wrapper = mount(Character, {
      global: {
        plugins: [createTestingPinia({ createSpy: fn })],
      },
    });
    expect(wrapper).toBeDefined();
  });
});
