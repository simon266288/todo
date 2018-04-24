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
import menus from './menus'
import todo from './todo'
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
  height: 100%;
  width: 100%;
}
.menu {
  display: flex;
  height: 100%;
  background-color: rgb(41, 14, 1);
  flex-grow: 1;
  background: linear-gradient(160deg, rgb(223, 211, 247),#ccc);
}
.content-container {
  display: flex;
  flex-grow: 3;
}
</style>