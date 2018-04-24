<template>
  <div class="list-todos">  <!--菜单容器-->
    <a class="list-todo activeListClass list" v-for="item in items"> <!--单个菜单容器-->
      <span class="icon-lock" v-if="item.locked"></span>  <!--锁的图标-->
      <span class="icon-unlock" v-else></span>
      {{item.title}} <!--菜单内容-->
      <span class="count-list" v-if="item.count">{{item.count}}</span><!--数字-->
    </a>
    <a class="link-list-new" > <!--新增菜单-->
      <span class="icon-plus">
      </span>
      新增
    </a>
  </div>
</template>
<script>
export default {
  name: "menus",
  data() {
    return {
      items: [
        { title: "星期一", count: "1", locked: true }, //菜单模拟数据
        { title: "星期二", count: "2", locked: true },
        { title: "星期三", count: "3", locked: false }
      ]
    };
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
  line-height: 60px;
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