<template>
  <button v-bind="$attrs" @click="$emit('click', $event)">
    <slot />
  </button>
</template>

<style scoped lang="scss">
button {
  @apply text-sm bg-primaryDark font-semibold transition duration-300 text-white px-3 py-1 uppercase rounded shadow border-b-2 border-primaryDark2;
  &:focus {
    @apply border-b;
  }
  &[disabled] {
    background-color: gray;
    cursor: not-allowed;
  }
}
</style>
