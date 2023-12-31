import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'MyButton',
  render() {
    console.log(this.attr);
    console.log(this.$slots);
    console.log(this);
    return h(
      'button',
      {
        ...this.attrs,
        onclick: () => this.$emit('custom-click'),
      },
      this.$slots
    );
  },
});
