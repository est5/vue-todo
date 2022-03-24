<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import type { Todo } from './models/todo';
let id = 0;

const todos: Todo[] = [
  {
    id: id++,
    text: 'Fit',
    done: false,
  },
  {
    id: id++,
    text: 'Get JOB',
    done: false,
  },
  {
    id: id++,
    text: 'DE HASLA',
    done: false,
  },
  {
    id: id++,
    text: 'Watch F1',
    done: false,
  },
  {
    id: id++,
    text: 'Make 6 cool (or not) projects',
    done: false,
  },
];
const displayTodos = reactive(todos);

const hidden = ref(false);

const toglle = () => {
  hidden.value = !hidden.value;
};

const removeTodo = (t: Todo) => {
  t.done = !t.done;
};

const createTodo = ref('');

const filteredTodos = computed(() => {
  if (hidden.value) {
    return displayTodos.filter((t) => t.done);
  }
  return displayTodos.filter((t) => !t.done);
});

const addTodo = () => {
  const todo = {
    id: id++,
    text: createTodo.value,
    done: false,
  };
  createTodo.value = '';
  return displayTodos.push(todo);
};
</script>

<template>
  <div class="root">
    <h1>Add to do item</h1>
    <span class="input-span">
      <label for="todo-input">Create new todo: </label>
      <input
        v-model="createTodo"
        id="todo-input"
        type="text"
        placeholder="type new task"
      />
      <button @click="addTodo">ok</button>
    </span>
    <ul>
      <li v-for="t in filteredTodos" :key="t.id">
        <span class="todo">
          <button @click="() => removeTodo(t)">X</button> {{ t.text }}
        </span>
      </li>
    </ul>
    <button @click="toglle">
      {{ hidden ? 'Show not completed ' : 'Show done todos' }}
    </button>
  </div>
</template>

<style>
.root {
  align-items: center;
  display: flex;
  flex-direction: column;
}
h1 {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #1f1f1f;
}
.todo {
  display: flex;
  gap: 15px;
  margin-bottom: 3px;
}

.input-span {
  display: flex;
  gap: 5px;
}
ul {
  list-style: none;
}
</style>
