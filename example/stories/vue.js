import { storiesOf } from '@storybook/vue';

export default () =>
  storiesOf('Vue', module)
    .addWithJSX('template property', () => ({ template: `<div></div>` }))
