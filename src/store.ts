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

export const addProject = (text: string) => {
  state.set({ name: text, selected: false }, []);
};

export const addTask = (text: string, project: Project) => {
  const array = state.get(project);
  array?.push({
    done: false,
    id: nextId++,
    text,
  });
  state.set(project, array || []);
};

export const removeProject = (id: number) => {
  const prjArray = Array.from(state.keys());
  const prj = prjArray[id];

  state.delete(prj);
};
