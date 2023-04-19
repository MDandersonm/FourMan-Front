import {
   // 상품 관련
   // REQUEST_PRODUCT_LIST_TO_SPRING,
   // REQUEST_PRODUCT_IMAGE_LIST_TO_SPRING,
   REQUEST_ALL_PRODUCT_TO_SPRING,

} from './mutation-types'

import axiosInst from '@/utility/axiosObject'

export default {
   
   // 상품 관련
   requestCreateProductToSpring ({}, payload) {
      console.log('payload: ' + payload)
      return axiosInst.post('/product/register', payload)
         .then((res) => {
            alert('게시물 등록 성공!')
            return res;
         })
         .catch(() => {
            alert('문제 발생!')
         })
   },
   // requestProductListToSpring({ commit }) {
   //    return axiosInst.get('/product/list')
   //       .then((res) => {
   //          commit(REQUEST_PRODUCT_LIST_TO_SPRING, res.data)
   //          console.log('productList: ' + JSON.stringify(res.data))
   //       })
   // },
   // requestProductImageListToSpring({ commit }) {
   //    return axiosInst.get('/product/imageList')
   //    .then((res) => {
   //       commit(REQUEST_PRODUCT_IMAGE_LIST_TO_SPRING, res.data)
   //       console.log('imageList: ' + JSON.stringify(res.data))
   //       })
   // },
   requestAllOfProductToSpring ({ commit }) {
      return axiosInst.get('/product/all')
         .then((res) => {
               commit(REQUEST_ALL_PRODUCT_TO_SPRING, res.data)
               console.log("allProduct: " + JSON.stringify(res.data))
         })
   },
   requestEditProductWithoutImageToSpring({}, payload) {
      console.log('payload: ' + payload)
      return axiosInst.post('/product/editProductWithoutImage', payload)
         .then(() => {
               alert('게시물 수정 성공!')
         })
         .catch(() => {
               alert('문제 발생!')
         })
   },
   requestEditProductWithImageToSpring({}, payload) {
      console.log('payload: ' + payload)
      return axiosInst.post('/product/editProductWithImage', payload)
         .then(() => {
               alert('게시물 수정 성공!')
         })
         .catch(() => {
               alert('문제 발생!')
         })
   },
   requestDeleteProductToSpring({}, productId) {
      return axiosInst.delete(`/product/${productId}`)
         .then(() => {
            alert("삭제 성공")
         })
         .catch(() => {
            alert("문제 발생!")
         })
      },

}