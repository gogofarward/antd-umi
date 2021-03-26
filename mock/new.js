import Mock from "mockjs";

export default {
  "GET /api/test": Mock.mock({
    'list|1-20': [{
      'name|3-5': /[a-z][A-Z]/,
      'age|10-15': 15,
      'gender|1': true
    }]
  }),

  "GET /api/testTable": Mock.mock({
    'list|1-20': [{
      'id|3-5': /[a-z][A-Z]/,
      'number|1-100': 15,
      'gender|1': true,
      'email': '@email'
    }]
  }),
}
