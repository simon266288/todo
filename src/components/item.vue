<template>
  <transition name="slide-fade">
    <div class="list-item editingClass editing" :class="{checked: item.checked}" v-show="!item.isDelete"> <!-- 最外层容器-->
      <label class="checkbox"> <!--自定义的多选框-->
        <input type="checkbox" v-model="item.checked" name="cheked" @change="onChange" :diabled="locked"> <!--item.checked-->
        <span class="checkbox-custom"></span>
      </label>
      <input type="text" v-bind:class="{active: locked,decoration: item.checked}" v-model="item.text" placeholder='写点什么。。。' :disabled="item.checked || locked" @keyup.enter="onChange">  <!--绑定item.text-->
      <a class="delete-item" v-if="item.checked && !locked" @click="item.isDelete = true; onChange()"> <!--删除图标-->
        <span class="icon-trash"></span>
      </a>
    </div>
  </transition>
</template>
<script>
import {editRecord} from '../api/api'
export default {
  name: "item",
  props:{  //子组件显式的用 props 选项声明它期待获得的数据，
  //这里申明 它想要一个叫做 ’item‘的数据。
    item:{
      type: Object,
      default: ()=>{
        return {
          checked: false,
          text: 'hello world!'
        }
      }
    },
    'index': {},
    'id': {},
    'init': {},
    'locked': {}
  },
  methods: {
    // 用户无论删除，修改，锁定都利用此方法
    onChange() {
      editRecord({
        id: this.id, record: this.item, index: this.index
      }).then(data=>{
        this.init();
        this.$store.dispatch('getTodo');
      });
    }
  }
};
</script>
<style lang="less" scoped>
.list-item {
  width: 100%;
  height: 3rem;
  position: relative;
  .active{
    color: #909399;
  }
  .decoration{
    text-decoration: line-through;
  }
  label {
    border: none;
    input{
    position: absolute;
    left: 6px;
    top: 5px;
    }
  }
  input[type="text"]{
    outline: none;
    border: none;
    background: transparent;
    font-size: 1.3rem;
    position: absolute;
    left: 40px;
    width: 90%;
  }
  .delete-item{
    float: right;
    padding-top: 5px;
  }
}
</style>