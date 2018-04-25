import axios from 'axios' //导入axios模块

export const getTodoList = params => { //封装一个函数:getTodoList
  return axios.get('/todo/list', { //请求路径‘/todo/list’
    params: params
  })
}

// 新增一个请求查询待办单项列表的数据的接口函数
export const getTodo = params => {
  return axios.get('/todo/listId', {
    params: params
  });
}

export const addTodo = params => {
  return axios.post('/todo/addTodo', params).then(res => res.data);
}

// 新增一个请求新增待办单项的接口函数
export const addRecord = params => {
  return axios.post(`/todo/addRecord`, params).then(res => res.data);
};

//新增请求编辑待办事项的接口函数
export const editTodo = params => {
  return axios.post('/todo/editTodo', params).then(res => res.data);
};

//新增请求编辑待办单项的接口
export const editRecord = params => {
  return axios.post('/todo/editRecord', params).then(res => res.data)
}
