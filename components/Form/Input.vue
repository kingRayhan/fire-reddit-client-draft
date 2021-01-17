<template>
  <div class="mb-3">
    <label>
      <span v-if="label" class="font-bold text-gray-600" v-text="label" />

      <input
        v-bind="$attrs"
        class=" border  border-gray-400 block px-3 py-1 focus:outline-none focus:border-primaryDark w-full text-xl"
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
      <p v-if="errorMsg" class="text-red-600">{{ errorMsg }}</p>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    value: { required: false, default: "" },
    label: { type: String },
    name: { type: String }
  },
  computed: {
    errorMsg() {
      // if (this.name && this.$store.state.errors.errors[this.name]) {
      //   return this.$store.state.errors.errors[this.name][0];
      // }
      // console.log(this.$store.state.errors);

      return false;
    }
  }
};
</script>
