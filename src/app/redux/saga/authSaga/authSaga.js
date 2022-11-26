import {call,put, takeLatest,delay} from 'redux-saga/effects';
import API from '../../services/API';
import { authActions } from '../../Reducer/authReducer';

function* work_with_login(action){
  const formData = yield action.payload;
  const entity = yield 'auth/login';

  const API_RESPONSE = yield call(API.login,{entity,formData})
  const status = yield API_RESPONSE.status;
  const data = yield API_RESPONSE.json();

  console.log(data)
  
}

function* authSaga(){
  yield takeLatest(authActions.userLoginFetch.type,work_with_login);
}

export default authSaga;
