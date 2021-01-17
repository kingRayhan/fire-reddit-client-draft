<template>
  <Card title="Login">
    <form @submit.prevent="handleLogin">
      <Input label="email" v-model="form.email" />
      <Input label="password" v-model="form.password" />
      <Button type="submit">Login</Button>
    </form>
  </Card>
</template>

<script>
export default {
  name: "login",
  middleware: "guest",
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async handleLogin() {
      try {
        await this.$auth.loginWith("local", { data: this.form });
      } catch (error) {
        this.$store.commit("alert/SHOW_ERROR", error.response.data.message);
      }
    }
  }
};
</script>
