<template>
  <div id="appRoot">
    <template>
      <v-app id="inspire" class="app">
        <app-drawer class="app--drawer"></app-drawer>
        <app-toolbar class="app--toolbar"></app-toolbar>
        <v-content>
          <div class="page-wrapper"></div>
          <div>
            <page-header></page-header>
            <v-card class="elevation-12 centet">
              <nuxt />
            </v-card>
          </div>
        </v-content>

        <v-navigation-drawer
          class="setting-drawer"
          temporary
          right
          v-model="rightDrawer"
          hide-overlay
          fixed
        >
          <!-- <theme-settings></theme-settings> -->
        </v-navigation-drawer>
      </v-app>
    </template>

    <v-snackbar :timeout="3000" bottom right :color="snackbar.color" v-model="snackbar.show">
      {{ snackbar.text }}
      <v-btn dark flat @click.native="snackbar.show = false" icon>
        <v-icon>close</v-icon>
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import AppDrawer from "@/components/audit/AppDrawer";
import AppToolbar from "@/components/audit/AppToolbar";
import PageHeader from "@/components/audit/PageHeader";

export default {
  components: {
    AppDrawer,
    AppToolbar,
    PageHeader
  },
  data: () => ({
    expanded: true,
    rightDrawer: false,
    snackbar: {
      show: false,
      text: "",
      color: ""
    }
  })
};
</script>

<style lang="stylus" scoped>
.setting-fab {
  top: 50% !important;
  right: 0;
  border-radius: 0;
}

.page-wrapper {
  margin-bottom: 50px;
}

.app--footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.centet{
  min-height :80vh;
}
</style>
