<template>
  <section class="container" > <!--最外层容器-->
    <section class="menu"> <!--左边的容器-->
      <menus></menus>
    </section>
    <section class="content-container"><!--右边的容器-->
      <todo></todo>
    </section>
  </section>
</template>
<script>
import menus from "./menus";
import todo from "./todo";
export default {
  name: "layouts",
  components: {
    menus,
    todo
  }
};
</script>
<style lang="less">
.container {
  display: -webkit-flex;
  display: flex;
  width: 1000px;
  height: 600px;
  margin: 50px auto;
}
.menu {
  display: flex;
  height: 100%;
  width: 300px;
}
.content-container {
  width: 700px;
}
.count-list {
  padding-left: 0.5rem;
  color: #E6A23C;
}
</style>