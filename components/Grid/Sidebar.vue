<template>
  <div>
    <Login />
    <div>
      <nuxt-link class="mb-4 submitter-button" to="/new">
        <span>Submit now</span>
        <div class="nub"></div>
      </nuxt-link>
    </div>

    <img
      src="~/static/images/toto-logo-1599689481-30467661479.png"
      alt="reddit"
      class="my-4"
    />

    <Rules />
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode: "login"
    };
  }
};
</script>
