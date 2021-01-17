<template>
  <div
    v-if="show"
    :class="{
      'bg-red-600': type === 'error',
      'bg-green-600': type === 'success'
    }"
    class=" text-white text-center py-2 absolute top-0 left-0 w-full"
  >
    <p>{{ message }}</p>
    <button @click="$store.commit('alert/CLOSE')">&times;</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "alert",
  computed: mapState("alert", ["message", "show", "type"])
};
</script>

<style scoped>
button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 15px;
}
</style>
