import { shallow, createLocalVue, shallowMount } from 'vue-test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import ant from 'ant-design-vue'
import TacticsConfig from '@/views/TacticsConfig/TacticsConfig.vue'
import * as myModule from '@/store/modules/TacticsConfig'
import routes from '@/router/router.js'
const localVue = createLocalVue()
import { storage } from '@/assets/js/util'
import Vue from 'vue'
import jest from 'jest-mock'
var sinon = require('sinon')
const actionsInjector = require('inject-loader!../../../../src/store/modules/TacticsConfig')
localVue.use(ant)
localVue.use(Vuex)
const parm = { pageNo: 2, pageSize: 10 }
Vue.use(ant)
const action = actionsInjector.actions.fetchMacroStra({
  '@/model/actions/TacticsConfig.js': {
    getMacroStra(cb) {
      setTimeout(() => {
        const data = {
          code: 200,
          msg: 'success',
          data: 'test'
        }
        return cb([data])
      }, 100)
    }
  }
}, parm)
describe('viewtargetconfig.vue', () => {
  let actions
  let state
  let store
  let mutation

  beforeEach(() => {
    state = {
      statisticsDate: '2019年07月'
    }
    actions = {
      getProductDetailFirst: jest.fn(),
      fetchMacroStra: jest.fn()
    }
    mutation = {
      updateTargetDetail: jest.fn()
    }
    store = new Vuex.Store({
      modules: {
        myModule: {
          state,
          actions,
          mutation,
          getters: myModule.getters
        }
      }
    })
  })
  const router = new VueRouter(routes)
  it('检查数据是否正确', () => {
    const Cor = Vue.extend({ ...TacticsConfig, store, router })
    const vm = new Cor().$mount()
    const commit = sinon.spy()
    myModule.actions.fetchMacroStra(commit, { productCode: 'A17SD0001', saaCode: '89528811-e157-4aaf-8880-36a95a2d8715' })
    myModule.getters.statisticsDate(state)
    expect(vm.statisticsDate).toBe(state.statisticsDate)
  })
})
describe('actions', () => {
  it('queryProducts', () => {
    const commit = sinon.spy()

    const data = 11111
    // action.queryProducts({ commit,  state})
    // action.queryProducts({ commit, state })
    commit('fillSaaData', data)
    commit('fillAssetRatio', data)
    commit('updateSaaTrial', data)
    commit('fillSaaArgs', data)
  })
})
