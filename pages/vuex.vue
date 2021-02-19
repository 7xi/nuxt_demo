<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs" divider="-"></v-breadcrumbs>
    <v-row align="center" justify="space-around">
      {{ count }}
    </v-row>
    <v-row align="center" justify="space-around">
      <v-btn depressed color="primary" @click="add">添加 </v-btn>
      <v-btn depressed color="primary" @click="del">减少 </v-btn>
      <v-btn depressed color="primary" @click="addCount">异步增加 </v-btn>
    </v-row>
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default Vue.extend({
  name: "vuex",
  components: {},
  computed: {
    ...mapGetters({
      count: "count"
    })
  },
  data() {
    return {
      breadcrumbs: [
        {
          text: "首页",
          disabled: false,
          href: "/"
        },
        {
          text: "vuex测试页",
          disabled: true,
          href: "/vuex"
        }
      ]
    };
  },
  methods: {
    // 同步
    ...mapMutations({
      add: "SET_ADDNUM_MUTATION"
    }),
    ...mapMutations({
      del: "SET_DELNUM_MUTATION"
    }),
    ...mapActions(["addCount"])
  },
  async asyncData({ query, $axios, app }) {
    app.head.title = "vuex测试";
    return {};
  }
});
</script>
