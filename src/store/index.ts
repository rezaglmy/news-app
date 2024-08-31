import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

// ? Reducers
import articleReducer from './slices/article.slice';
import { newsApiApiSlice } from '@/services/api';
import { guardianApiSlice } from '@/services/api';

// ? Actions
export * from './slices/article.slice';

export const store = configureStore({
  reducer: {
    article: articleReducer,
    [newsApiApiSlice.reducerPath]: newsApiApiSlice.reducer,
    [guardianApiSlice.reducerPath]: guardianApiSlice.reducer,
  },
  middleware: (gDM) =>
    gDM({ serializableCheck: false }).concat(newsApiApiSlice.middleware).concat(guardianApiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

setupListeners(store.dispatch);
