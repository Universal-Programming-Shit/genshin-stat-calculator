import { describe, expect, test } from "vitest";
import SubStatRow from "../../src/artifact/components/SubStatRow.vue";
import { mount } from "@vue/test-utils";
import { Stars } from "../../src/types/stars";
import { Stats } from "../../src/types/stats";

describe("SubStatRow", () => {
  const baseProps = () => ({
    modelValue: { type: Stats.NONE, rolls: [] },
    stars: Stars.S1,
    availableSubStats: [Stats.NONE, Stats.HP_FLAT, Stats.ATTACK_FLAT],
    availableRolls: 0,
    baseRolls: 0,
  });

  test("Stat Selection", async () => {
    const props = baseProps();
    expect(SubStatRow).toBeTruthy();

    const wrapper = mount(SubStatRow, { props });
    expect(wrapper).toBeTruthy();

    expect(wrapper.get("select").text()).to.be.empty;

    props.modelValue.type = Stats.HP_FLAT;
    await wrapper.setProps(props);
    expect(wrapper.get("select").text()).to.equal("Hp");
  });
});
