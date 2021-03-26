import {request} from "umi";

const getData = params => {
  return request("/api/test", {
    method: "GET",
    params
  })
}

const getTableData = () => {
  return request("/api/testTable")
}

export {getData, getTableData}
