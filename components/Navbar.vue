<template>
  <section class="navbar bg-primary mb-5">
    <Alert />

    <nav class="navbar__inner container mx-auto flex items-end justify-between">
      <nuxt-link class="navbar__logo" to="/"></nuxt-link>

      <div class="navbar__user-menu bg-primaryLight" v-if="$auth.loggedIn">
        Howdy
        <a class="font-bold" href="#"> /r/{{ $auth.user.username }} </a>
        <a class="text-xs text-gray-700" href="#">
          (settings)
        </a>
        <span class="font-thin">|</span>
        <a href="#" to="/notifications"> Notifications (14) </a>
        <span class="font-thin">|</span>
        <a href="#" class="cursor-pointer" @click="$auth.logout()">Logout</a>
      </div>

      <div class="navbar__user-menu bg-primaryLight" v-if="!$auth.loggedIn">
        Want to join?
        <nuxt-link to="/auth/login" class="link">Login</nuxt-link>
        or
        <nuxt-link to="/auth/register" class="link">Signup</nuxt-link>
        in a seconds.
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isloggedIn: false
    };
  }
};
</script>
