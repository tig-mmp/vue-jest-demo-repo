import { mount, shallowMount } from "@vue/test-utils";
import Chat from "./Chat.vue";

describe("Chat Service", () => {
  let wrapper = null;
  beforeEach(async () => {
    wrapper = mount(Chat, { propsData: {} });
  });
  it("Should match the snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("should have a list of items for every message in props", () => {
    const shallowWrapper = shallowMount(Chat, {
      propsData: {
        messages: [{ content: "Hello" }, { content: "World" }],
      },
    });
    expect(shallowWrapper.findAll(".message-display")).toHaveLength(2);
  });
});
