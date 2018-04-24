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
  
 <div class=" form todo-new input-symbol">
        <!-- 绑定disabled值，当todo.locked为绑定的时候，禁止input输入,双向绑定text,和监听input的回车事件@keyup.enter -->
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
import { getTodo, addRecord } from "../api/api";
export default {
  name: "todo",
  components: {
    item
  },
  data() {
    return {
      todo: {
        //详情内容
        title: "星期一", //标题
        count: 12, //数量
        locked: false //是否绑定
      },
      items: [], //代办单项列表
      text: "" //新增代办单项绑定的值
    };
  },
  watch: {
    "$route.params.id"() {
      //监听$route.params.id的变化，如果这个id即代表用户点击
      //了其他的待办事项需要重新请求数据
      this.init();
    }
  },
  methods: {
    onAdd() {
      //当用户输入文字，并且回车时调用次方法。
      const ID = this.$route.params.id;
      addRecord({ id: ID, text: this.text }).then(res => {
        this.text = "";
        this.init();
        //请求成功后初始化
      });
    },
    init() {
      //获取到$route下params下的id，即我们在menus.vue组件传入的数据。
      const ID = this.$route.params.id;
      getTodo({ id: ID }).then(res => {
        let { id, title, count, isDelete, locked, record } = res.data.todo;
        this.items = record;
        this.todo = {
          id: id,
          title: title,
          count: count,
          locked: locked,
          isDelete: isDelete
        };
      });
    }
  }
};
</script>
<style lang="less">
.page {
  width: 100%;
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
