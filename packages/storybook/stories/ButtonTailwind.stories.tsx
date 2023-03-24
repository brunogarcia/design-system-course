import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '@brunogarcia/react-ds/src/ButtonTailwind';
import '@brunogarcia/react-ds/lib/output.css';

export default {
  title: 'Tailwind Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};
