import { createAction } from 'redux-actions';

export const REQUEST_MEMBER_ADD = 'REQUEST_MEMBER_ADD' //增加测试
export const SUCCESS_MEMBER_ADD = 'SUCCESS_MEMBER_ADD' //增加测试
export const FAILURE_MEMBER_ADD = 'FAILURE_MEMBER_ADD' //增加测试
export const request_member_add = createAction(REQUEST_MEMBER_ADD);
export const success_member_add = createAction(SUCCESS_MEMBER_ADD);
export const failure_member_add = createAction(FAILURE_MEMBER_ADD);