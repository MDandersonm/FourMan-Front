import {
   REQUEST_FREE_BOARD_LIST_TO_SPRING,
   REQUEST_FREE_BOARD_TO_SPRING,

   REQUEST_FREE_BOARD_COMMENT_LIST_TO_SPRING,

 } from './mutation-types'

 export default {

   [REQUEST_FREE_BOARD_LIST_TO_SPRING] (state, passingData) {
      state.freeBoards = passingData
   },
   [REQUEST_FREE_BOARD_TO_SPRING] (state, passingData) {
      state.freeBoard = passingData
  },
  //댓글 관련
  [REQUEST_FREE_BOARD_COMMENT_LIST_TO_SPRING] (state, passingData) {
      state.comments = passingData
  }
 }