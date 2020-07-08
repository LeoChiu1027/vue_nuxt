<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="username"
                    prepend-icon="person"
                    type="text"
                    v-model="model.username"
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    v-model="model.password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                 <v-btn color="primary" @click="login" :loading="loading">Login</v-btn>
                <!-- <v-btn color="primary" @click="callLogin" :loading="loading">Login</v-btn> -->
                {{formError}}
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import uri from "@/api/uri";
import VueCookies from "vue-cookies";


export default {
  auth: false,
  layout: "default",
  data: () => ({
    loading: false,
    model: {
      username: "",
      password: "",
      stats: ""
    },
    formError: ''
  }),
  methods: {
    async login () {
      try {
        const res = await this.$auth.loginWith('local', {data: {
          username: this.model.username,
          password: this.model.password
        }})
        // this.$auth.setUser(res.data.customInfo);
        await this.$auth.setUserToken(res.data.access_token);
        //console.log('data',this.$auth)
        // const data = await this.$store.dispatch('login', {
        //   username: this.model.username,
        //   password: this.model.password
        // })
        console.log('auth', this.$auth);
        console.log('loggedIn', this.$auth.loggedIn);
        if(this.$auth.loggedIn){
          this.$router.push('/audit/member/member')
        }
      } catch (e) {
        this.formError = e.message
      }
    },
    async logout () {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        this.formError = e.message
      }
    }
  }
};
</script>

<style scoped>
</style>
