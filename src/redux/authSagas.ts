import { all, delay, put, takeEvery } from "redux-saga/effects"
import { login, logout, loginAsync, logoutAsync } from "./slices/authSlice"

function* loginSaga() {
  yield delay(1000)
  yield put(login(true))
}

function* logoutSaga() {
  yield delay(1000)
  yield put(logout(false))
}

function* watchCounterSaga() {
  yield takeEvery(loginAsync.type, loginSaga)
  yield takeEvery(logoutAsync.type, logoutSaga)
}

export default function* rootSaga() {
  yield all([watchCounterSaga()])
}