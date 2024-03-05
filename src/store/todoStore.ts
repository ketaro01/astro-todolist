import { atom } from 'nanostores'

export const $todoList = atom<Record<string, any>[]>([]);

export function addTodoItem(value: string) {
  const id = $todoList.get() ? $todoList.get().length + 1 : 0;
  $todoList.set([...$todoList.get(), { id, value }]);
}

export function removeTodoItem(id: number) {
  const exist = $todoList.get().find((item) => item.id === id);
  if (!exist) return;
  $todoList.set($todoList.get().filter((item) => item.id !== id));
}
