<template>
  <main>
    <div class="mb-4">
      <WelcomeBanner />

      <div class=" flex items-center">
        <Input placeholder="task new" v-model="form.task" />
        <input type="checkbox" v-model="form.done" />
        <Button @click="createTodo">Add</Button>
      </div>

      <ul>
        <li
          :class="{ 'line-through': todo.done }"
          v-for="todo in filteredTodos"
          :key="todo.id"
        >
          {{ todo.task }}
        </li>
      </ul>

      <div class=" flex items-center">
        <Button class=" mr-3" @click="changeMode('all')">All</Button>
        <Button class=" mr-3" @click="changeMode('done')">Undone</Button>
        <Button @click="changeMode('undone')">Done</Button>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import Button from "../components/Form/Button.vue";
export default {
  components: { Button },
  name: "home",
  data() {
    return {
      form: {
        task: "",
        done: false
      }
    };
  },
  computed: {
    ...mapState({
      todos: state => state.todos.all
    }),
    ...mapGetters("todos", ["filteredTodos"])
  },
  methods: {
    ...mapMutations("todos", {
      makeTodo: "ADD_TODO",
      changeMode: "CHANGE_MODE"
    }),
    createTodo() {
      this.makeTodo({
        id: Date.now(),
        ...this.form
      });
      this.form = {
        task: "",
        done: false
      };
    }
  }
};
</script>
