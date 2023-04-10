import Vue from 'vue'
import VueRouter from 'vue-router'

import MainPage from "@/views/MainPage.vue";

//예약페이지관련

import HallSeatPage from "@/views/hallSeat/HallSeatPage";

//로그인관련
import SignUpPage from "@/views/member/SignUpPage";
import SignInPage from "@/views/member/SignInPage";
import SearchMemberPasswordPage from "@/views/member/SearchMemberPasswordPage";
import SignUpAcceptPage from "@/views/member/SignUpAcceptPage";
import SignUpChoicePage from "@/views/member/SignUpChoicePage";

//프리보드관련
import FreeBoardListPage from '@/views/freeBoard/FreeBoardListPage.vue'
import FreeBoardRegisterPage from '@/views/freeBoard/FreeBoardRegisterPage.vue'
import FreeBoardReadPage from '@/views/freeBoard/FreeBoardReadPage.vue'
import FreeBoardModifyPage from "@/views/freeBoard/FreeBoardModifyPage.vue"

//질문 게시판 관련
import QuestionBoardListPage from '@/views/questionBoard/QuestionBoardListPage.vue'
import QuestionBoardRegisterPage from '@/views/questionBoard/QuestionBoardRegisterPage.vue'
import QuestionBoardReadPage from '@/views/questionBoard/QuestionBoardReadPage.vue'
import QuestionBoardModifyPage from '@/views/questionBoard/QuestionBoardModifyPage.vue'

//리뷰 게시판 관련
import ReviewBoardRegisterPage from '@/views/reviewBoard/ReviewBoardRegisterPage.vue'
import ReviewBoardListPage from '@/views/reviewBoard/ReviewBoardListPage.vue'
import ReviewBoardReadPage from '@/views/reviewBoard/ReviewBoardReadPage.vue'
import ReviewBoardModifyPage from '@/views/reviewBoard/ReviewBoardModifyPage.vue'

//상품관련
import ProductRegisterPage from '@/views/product/ProductRegisterPage.vue'
import ProductListPage from '@/views/product/ProductListPage.vue'

//주문 관련
import TotalOrderPage from '@/views/order/TotalOrderPage'

//카페소개 게시판 관련
import CafeIntroBoardListPage from '@/views/cafeIntroduceBoard/CafeIntroBoardListPage.vue'
import CafeIntroBoardRegisterPage from '@/views/cafeIntroduceBoard/CafeIntroBoardRegisterPage.vue'
import CafeIntroBoardDetailPage from '@/views/cafeIntroduceBoard/CafeIntroBoardDetailPage.vue'

//마이페이지 관련
import MemberMyPage from '@/views/memberMyPage/MemberMyPage.vue'
import ProductManagePage from '@/views/cafeMyPage/ProductManagePage.vue'
import ProductModifyPage from '@/views/cafeMyPage/ProductModifyPage.vue'

//공지사항관련
import NoticeBoardRegisterPage from '@/views/noticeBoard/NoticeBoardRegisterPage.vue'
import NoticeBoardListPage from '@/views/noticeBoard/NoticeBoardListPage.vue'
import NoticeBoardReadPage from '@/views/noticeBoard/NoticeBoardReadPage.vue'
import NoticeBoardModifyPage from '@/views/noticeBoard/NoticeBoardModifyPage.vue'

//나의 게시판 관련
import MyFreeBoardPage from '@/views/cafeMyPage/MyFreeBoardPage.vue'

Vue.use(VueRouter)

const routes = [
  //공통 페이지 관련
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },

  //예약 페이지 관련
  {
    path: '/seats',
    name: 'HallSeatPage',
    components: {
      default: HallSeatPage
    },
    props: {
      default: true
    }

  },

  //카페소개 게시판 관련
{
  path: '/cafe-board-list-page',
  name: 'CafeIntroBoardListPage',
  component: CafeIntroBoardListPage
},
{
  path: '/cafe-board-register-page',
  name: 'CafeIntroBoardRegisterPage',
  component: CafeIntroBoardRegisterPage
},
{
  path: '/cafe-board-detail-page/:cafeId',
  name: 'CafeIntroBoardDetailPage',
  components: {
    default:CafeIntroBoardDetailPage
  },
  props: {
    default: true
  }
},

//상품 관련
  {
    path: '/product-register-page',
    name: 'ProductRegisterPage',
    component: ProductRegisterPage
  },
  {
    path: '/product-list-page',
    name: 'ProductListPage',
    component: ProductListPage
  },

// 주문 관련
  {
    path: '/total-order-page',
    name: 'TotalOrderPage',
    components: {
      default: TotalOrderPage
    },
    props: {
      default: true
    }
  },


//로그인 관련
  {
    path: '/sign-up',
    name: 'SignUpPage',
    components: {
     default: SignUpPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/sign-in',
    name: 'SignInPage',
    component: SignInPage
  },
  {
    path: '/search-password',
    name: 'SearchMemberPasswordPage',
    component: SearchMemberPasswordPage
  },
  {
    path: '/sign-up-accept',
    name: 'SignUpAcceptPage',
    components: {
      default: SignUpAcceptPage
     },
    props: {
      default: true
    }
  },
  {
    path: '/sign-up-choice',
    name: 'SignUpChoicePage',
    components: {
      default: SignUpChoicePage
     },
    props: {
      default: true
    }
  },


// 자유 게시판 관련
  {
    path: '/free-board-list-page',
    name: 'FreeBoardListPage',
    component: FreeBoardListPage
  },
  {
    path: '/free-board-register-page',
    name: 'FreeBoardRegisterPage',
    component: FreeBoardRegisterPage,
    beforeEnter: (to, from, next) => {
      const userInfo = localStorage.getItem('userInfo');
      if (userInfo != null) {
        // 로그인 되어 있을 때는 페이지 이동을 허용
        next();
      } else {
        // 로그인 되어 있지 않을 때는 로그인 페이지로 이동
        alert('로그인 후 글을 작성할 수 있습니다.')
        next('/sign-in');
      }
    }
  },
  {
    path: '/free-board-read-page/:boardId',
    name: 'FreeBoardReadPage',
    components: {
      default: FreeBoardReadPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/free-board-modify-page/:boardId',
    name: 'FreeBoardModifyPage',
    components: {
      default: FreeBoardModifyPage
    },
    props: {
      default: true
    },
    // 추후 게시글 작성자, 관리자만 수정할 수 있도록 변경 예정
    beforeEnter: (to, from, next) => {
      const userInfo = localStorage.getItem('userInfo');
      if (userInfo != null) {
        next();
      } else {
        alert('로그인 후 글을 작성할 수 있습니다.')
        next('/sign-in');
      }
    }
  },
  // 리뷰 게시판 관련
  {
    path: '/review-board-register-page',
    name: 'ReviewBoardRegisterPage',
    component: ReviewBoardRegisterPage,
    beforeEnter: (to, from, next) => {
      const userInfo = localStorage.getItem('userInfo');
      if (userInfo != null) {
        next();
      } else {
        alert('로그인 후 글을 작성할 수 있습니다.')
        next('/sign-in');
      }
    }
  },
  {
    path: '/review-board-list-page',
    name: 'ReviewBoardListPage',
    component: ReviewBoardListPage
  },
  {
    path: '/review-board-read-page/:reviewBoardId',
    name: 'ReviewBoardReadPage',
    components: {
      default: ReviewBoardReadPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/review-board-modify-page/:reviewBoardId',
    name: 'ReviewBoardModifyPage',
    components: {
      default: ReviewBoardModifyPage
    },
    props: {
      default: true
    }
  },
  //질문 게시판 관련
  {
    path: '/question-board-list-page',
    name: 'QuestionBoardListPage',
    component: QuestionBoardListPage,
    beforeEnter: (to, from, next) => {
      const userInfo = localStorage.getItem('userInfo');
      if (userInfo != null) {
        next();
      } else {
        alert('로그인 후 글을 작성할 수 있습니다.')
        next('/sign-in');
      }
    }
  },
  {
    path: '/question-board-register-page',
    name: 'QuestionBoardRegisterPage',
    component: QuestionBoardRegisterPage,
    beforeEnter: (to, from, next) => {
      const userInfo = localStorage.getItem('userInfo');
      if (userInfo != null) {
        // 로그인 되어 있을 때는 페이지 이동을 허용
        next();
      } else {
        // 로그인 되어 있지 않을 때는 로그인 페이지로 이동
        alert('로그인 후 글을 작성할 수 있습니다.')
        next('/sign-in');
      }
    }
  },
  {
    path: '/question-board-read-page/:boardId',
    name: 'QuestionBoardReadPage',
    components: {
      default: QuestionBoardReadPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/question-board-modify-page/:boardId',
    name: 'QuestionBoardModifyPage',
    components: {
      default: QuestionBoardModifyPage
    },
    props: {
      default: true
    }
  },
  //마이페이지 관련
  {
    path: '/member-my-page',
    name: 'MemberMyPage',
    component: MemberMyPage
  },
  {
    path: '/product-manage-page',
    name: 'ProductManagePage',
    components: {
      default: ProductManagePage
    },
    props: {
      default: true
    }
  },
  {
    path: '/product-modify-page',
    name: 'ProductModifyPage',
    components: {
      default: ProductModifyPage
    },
    props: {
      default: true
    }
  },

  // 공지사항 관련
  {
    path: '/notice-board-register-page',
    name: 'NoticeBoardRegisterPage',
    component: NoticeBoardRegisterPage
  },
  {
    path: '/notice-board-list-page',
    name: 'NoticeBoardListPage',
    component: NoticeBoardListPage
  },
  {
    path: '/notice-board-read-page/:boardId',
    name: 'NoticeBoardReadPage',
    components: {
      default: NoticeBoardReadPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/notice-board-modify-page/:boardId',
    name: 'NoticeBoardModifyPage',
    components: {
      default: NoticeBoardModifyPage
    },
    props: {
      default: true
    }
  },

  //내가 쓴 게시물 관련
  {
    path: '/my-free-board-page',
    name: 'MyFreeBoardPage',
    component: MyFreeBoardPage
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router