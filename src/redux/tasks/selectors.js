// файл оголошення функцій-селекторів
export const getTasks = state => state.tasks;

export const getIsLoading = state => state.tasks.isLoading;

export const getError = state => state.tasks.error;
