// файл оголошення екшенів програми
import { createAction } from '@reduxjs/toolkit';

export const setStatusFilter = createAction('filters/setStatusFilter');

// -------- before --------
// export const setStatusFilter = value => {
//   return {
//     type: 'filters/setStatusFilter',
//     payload: value,
//   };
// };
