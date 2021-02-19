<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs" divider="-"></v-breadcrumbs>
    <v-list dense>
      <v-subheader>列表演示页面</v-subheader>
      <v-list-item-group color="primary">
        <v-list-item v-for="(item, index) in list" :key="index">
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
            <v-list-item-subtitle
              v-html="item.description"
            ></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      breadcrumbs: [
        {
          text: "首页",
          disabled: false,
          href: "/"
        },
        {
          text: "列表页",
          disabled: true,
          href: "/list"
        }
      ]
    };
  },
  async asyncData({ query, $axios, app }) {
    let res = await Promise.all([$axios.post("api/news", {})]);
    // 获取配置
    const { list } = res[0].data;
    app.head.title = "列表页";
    return {
      list
    };
  }
});
</script>
