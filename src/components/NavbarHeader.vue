<template>
  <div class="header header-sticky unselectable header-animated">
    <div class="header-brand">
      <div class="nav-item no-hover">
        <h6 class="title">{{ msg }}</h6>
      </div>
      <div class="nav-item nav-btn" id="header-btn">
        <span></span> <span></span> <span></span>
      </div>
    </div>
    <div class="header-nav" id="header-menu">
      <div class="nav-left">
        <div class="nav-item text-center">
          <a href="#">
            <span class="icon">
              <!-- <font-awesome-icon icon="fa-solid fa-user-secret"  /> -->
            </span>
          </a>
        </div>
      </div>
      <div class="nav-right">
        <div class="nav-item has-sub toggle-hover" id="dropdown">
          <a class="nav-dropdown-link">Menu</a>
          <ul class="dropdown-menu dropdown-animated" role="menu">
            <li role="menu-item"><a href="#">First Item</a></li>
            <li role="menu-item"><a href="#">Second Item</a></li>
            <li role="menu-item"><a href="#">Third Item</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavbarHeader",
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// h3 {
//   margin: 40px 0 0;
// }
// ul {
//   list-style-type: none;
//   padding: 0;
// }
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
// a {
//   color: #42b983;
// }
</style>
