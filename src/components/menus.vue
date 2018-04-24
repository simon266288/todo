<template>
  <!-- 绑定点击事件goList,判定当todoId时item.id时，文字高亮 -->
  <div class="list-todos">  <!--菜单容器-->
  <!-- 绑定class，当items循环中的id等于我们设置选中的todoId时，加上active  class -->
    <a @click="goList(item.id)" class="list-todo activeListClass list" :class="{'active': item.id===todoId}" v-for="item in items"> <!--单个菜单容器-->
      <span class="icon-lock" v-if="item.locked"></span>  <!--锁的图标-->
      <span class="icon-unlock" v-else></span>
      {{item.title}} <!--菜单内容-->
      <span class="count-list" v-if="item.count">{{item.count}}</span><!--数字-->
    </a>
    <a class="link-list-new" @click="addTodoList"> <!--新增菜单-->
      <span class="icon-plus">
      </span>
      新增
    </a>
  </div>
</template>
<script>
import { getTodoList, addTodo } from "../api/api";
// 引入封装好的两个接口函数;
export default {
  data() {
    return {
      items: [], // 菜单数据
      todoId: "" // 默认选中id
    };
  },
  computed:{
    todoList() {
      return this.$store.getters.getTodoList;
    }
  },
  created() {
    // 调用请求菜单列表数据的接口
    this.$store.dispatch('getTodo').then(() =>{  //调用vuex actions.js里的getTodo函数
      this.$nextTick(()=>{
        this.goList(this.todoList[0].id);
      });
    });
  },
  methods: {
    goList(id) {
      // 点击菜单时候,替换选中id
      this.todoId = id;
    },
    addTodoList() {
      // 点击新增按钮时候
      // 调用新增菜单的接口，在接口调用成功在请求数据
      addTodo({}).then(data => {
        getTodoList({}).then(res => {
          const TODOS = res.data.todos;
          this.todoId = TODOS[TODOS.length - 1].id;
          this.items = TODOS;
        });
      });
    }
  },
  watch: {
    'todoId'(id) { //监听到用户的点击todoId的变化后跳转路由
      this.$router.push({name:'todo',params:{id:id}});
    }
  }
};
</script>
<style lang="less">
@import url("../common/style/icon.less");
.list-todos {
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 1.2rem;
}
.list-todos a {
  height: 60px;
  font-size: 1.2rem;
  justify-content: space-around;
  display: inline-flex;
  border: 1px solid #5c5c5c;
}
.list-todos a:hover {
  color: aliceblue;
  cursor: pointer;
}
.list-todos .link-list-new {
  justify-content: center;
}
</style>