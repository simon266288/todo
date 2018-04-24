 <template>
  <div class="page lists-show"><!--最外层容器-->
    <nav><!--容器上半部分-->
      <div class="nav-group"> <!--移动端的菜单图标-->
        <a class="nav-item">
        </a>
      </div>
      <h1 class="title-page">
        <span class="title-wrapper">{{todo.title}}</span> <!-- 标题-->
        <span class="count-list">{{todo.count}}</span><!-- 数目-->
      </h1>
      <div class="nav-group right"><!-- 右边的删除，锁定图标容器-->
        <div class="options-web"> 
          <a class="nav-item"> <!-- 锁定图标-->
            <span class="icon-lock" v-if="todo.locked"></span>
            <span class="icon-unlock" v-else>
            </span>
          </a>
          <a class="nav-item"><!-- 删除图标-->
            <span class="icon-trash">
            </span>
          </a>
        </div>
      </div>
  
      <div class=" form todo-new input-symbol"> <!-- 新增单个代办单项输入框,监听了回车事件，双向绑定text值,监听了disabled属性，在todo.locked为true的情况下无法编辑-->
         <input type="text" v-model="text" placeholder='请输入' @keyup.enter="onAdd" :disabled="todo.locked" />
        <span class="icon-add"></span>
      </div>
    </nav>
    <div class="content-scrollable list-items">
      <!--容器下半部分-->
      <div v-for="item in items">
        <item :item="item"></item>
      </div>
    </div>
  </div>
</template>
<script>
import item from "./item";
export default {
  name: "todo",
  components: {
    item
  },
  data() {
    return {
      todo: {
        //详情内容
        title: "星期一",
        count: 12,
        locked: false
      },
      items: [
        //代办单项列表
        { checked: false, text: "新的一天", isDelete: false },
        { checked: false, text: "新的一天", isDelete: false },
        { checked: false, text: "新的一天", isDelete: false }
      ],
      text: "" //新增代办单项绑定的值
    };
  },
  methods: {
    onAdd() {
      this.items.push({
        checked: false,
        text: this.text,
        isDelete: false
      }); // 当用户点击回车时候 ，给items的值新增一个对象，this.text 即输入框绑定的值
      this.text = ""; //初始化输入框的值。
    }
  }
};
</script>
<style lang="less">
.page {
  width: 100%;
  padding-left: 1rem;
  background: linear-gradient(180deg, #d0edf5, #e1e5f0);
}
nav {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  .title-page {
    display: flex;
    justify-content: flex-start;
    width: 90%;
    .count-list {
      padding-left: 0.5rem;
      color: rgb(21, 180, 127);
    }
  }
  .nav-group {
    display: flex;
    align-items: center;
    .options-web {
      display: flex;
      justify-content: flex-start;
      .nav-item {
        display: inline-block;
        width: 2rem;
      }
    }
  }
  .form {
    display: flex;
    width: 100%;
    input {
      order: 1;
      outline: none;
      border: none;
      background: transparent;
      width: 100%;
      line-height: 2rem;
      height: 2rem;
      font-size: 1.8rem;
      margin-left: 0.5rem;
    }
    .icon-add {
      font-size: 1.2rem;
      display: inline-block;
      height: 100%;
      line-height: 100%;
    }
  }
}
.list-items {
  width: 100%;
  height: 100%;
  padding-top: 2rem;
}
</style>
