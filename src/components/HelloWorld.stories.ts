import type { Meta, StoryObj } from "@storybook/vue3";
import HelloWorld from "./HelloWorld.vue";

const meta = {
  component: HelloWorld,
} satisfies Meta<typeof HelloWorld>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: {} };
