import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from './authSagas'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export default store
