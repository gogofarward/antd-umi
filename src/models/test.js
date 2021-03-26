import {getTableData} from "@/services/new/test";

const testModel = {
  namespace: "test",
  state: {
    tableData: []
  },
  effects: {
    * test(payload, {call, put}) {
      const response = yield call(getTableData, payload);
      yield put({
        type: "setData",
        payload: response
      })
    }
  },
  reducers: {
    setData(state, action) {
      return {
        ...state,
        tableData: action.payload
      }
    }
  }
}

export default testModel
