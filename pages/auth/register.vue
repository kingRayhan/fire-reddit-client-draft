<template>
  <Card title="Login">
    <form @submit.prevent="handleRegister">
      <Input
        label="Username"
        v-model="form.username"
        name="username"
        placeholder="Your username"
      />

      <Input
        type="email"
        label="Email"
        name="email"
        v-model="form.email"
        placeholder="Your email"
      />

      <Input
        type="password"
        label="Password"
        name="Password"
        v-model="form.password"
        placeholder="Your password"
      />

      <Input
        type="password"
        label="Password again"
        name="password_confirmation"
        v-model="form.password_confirmation"
        placeholder="Password again"
      />

      <Button type="submit">Signup</Button>
    </form>
  </Card>
</template>

<script>
export default {
  head: {
    title: "Register for new account"
  },
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: "",
        password_confirmation: ""
      }
    };
  },
  methods: {
    async handleRegister() {
      try {
        await this.$axios.$post("/auth/register", this.form);
        this.$router.push("/");
        this.$store.commit("alert/SHOW_SUCCESS", "Successfully logged in");
      } catch (error) {}
    }
  }
};
</script>
