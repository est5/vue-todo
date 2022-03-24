import { reactive } from 'vue';
import type { Project } from './models/project';
import type { Todo } from './models/todo';
export const state = reactive(new Map<Project, Todo[]>());
let nextId = 0;

state.set({ name: 'Default', selected: true }, [
  { done: false, id: nextId++, text: 'Hello' },
  { done: false, id: nextId++, text: 'Vue' },
  { done: false, id: nextId++, text: 'Todo' },
  { done: false, id: nextId++, text: 'Stupid' },
  { done: false, id: nextId++, text: 'State' },
]);

const selected = state.forEach((_, k) => {
  return k.selected;
});
