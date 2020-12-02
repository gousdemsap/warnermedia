import { configureStore } from '@reduxjs/toolkit';
import TitlesReducer from './titlesReducer';

export default configureStore({
  reducer: {
    titlesReducer: TitlesReducer,
  },
});
