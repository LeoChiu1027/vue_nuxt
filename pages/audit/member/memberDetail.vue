<template>
  <div>
    <v-container grid-list-lg fluid>
      <v-row class="grey lighten-5">
        <v-col cols="12">
          <v-card class="ma-3 pa-6" outlined>
            <v-btn @click="save" color="primary" dark>儲存</v-btn>
            <v-btn color="primary" dark>取消</v-btn>
            <v-btn color="red" dark>刪除</v-btn>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="grey lighten-5">
        <v-col cols="6">
          <v-card class="ma-3 pa-6" shaped tile>
            <v-form ref="form">
              <v-text-field
                v-model="member.name"
                :label="label.name"
                :rules="[rules.required]"
                required
              ></v-text-field>
              <v-text-field
                v-model="member.email"
                :rules="[rules.required, rules.email]"
                :label="label.email"
                required
              ></v-text-field>
              <v-text-field
                v-model="member.addUser"
                :rules="[rules.required]"
                :label="label.addUser"
                required
              ></v-text-field>
              <v-text-field
                v-model="member.upUser"
                :rules="[rules.required]"
                :label="label.upUser"
                required
              ></v-text-field>
            </v-form>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card class="ma-3 pa-6" shaped tile>
            <v-form ref="form">
              <v-text-field
                v-model="member.phone"
                :rules="[rules.required]"
                :label="label.phone"
                required
              ></v-text-field>
              <v-text-field
                v-model="member.job"
                :rules="[rules.required]"
                :label="label.job"
                required
              ></v-text-field>

              <v-menu
                ref="menu1"
                :close-on-content-click="false"
                v-model="menu1"
                transition="scale-transition"
                offset-y
                :nudge-right="40"
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    :label="label.addDate"
                    v-on="on"
                    v-model="computedDate1Formatted"
                    readonly
                  ></v-text-field>
                </template>

                <v-date-picker v-model="member.addDate" no-title scrollable></v-date-picker>
              </v-menu>

              <v-menu
                ref="menu2"
                :close-on-content-click="false"
                v-model="menu2"
                transition="scale-transition"
                offset-y
                :nudge-right="40"
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    :label="label.upDate"
                    v-on="on"
                    v-model="computedDate2Formatted"
                    readonly
                  ></v-text-field>
                </template>

                <v-date-picker v-model="member.upDate" no-title scrollable></v-date-picker>
              </v-menu>
            </v-form>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="grey lighten-5">
        <v-col cols="12">
          <v-card class="ma-3">
            <member-detail-table ref="txnTable"></member-detail-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import language from "@/api/language";
import dateUtil from "@/util/dateUtil";
import axios from "@/util/axios"
import uri from "@/api/uri";

export default {
  // middleware: 'authenticated',
  layout: "audit/template",
  data: () => ({
    member: {
      name: "",
      email: "",
      addUser: "",
      upUser: "",
      phone: "",
      job: "",
      addDate: new Date().toISOString().substr(0, 10),
      upDate: new Date().toISOString().substr(0, 10),
      roleData: []
    },
    menu1: false,
    menu2: false,
    label: language.memberDetail.label,
    rules: {
      required: value => !!value || "Required.",
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      }
    }
  }),
  computed: {
    computedDate1Formatted() {
      return dateUtil.formatDate(this.member.addDate);
    },
    computedDate2Formatted() {
      return dateUtil.formatDate(this.member.addDate);
    }
  },
  methods: {
    save() {
      const txnTable = this.$refs.txnTable;
      this.member.roleData = txnTable.roleData;
      console.log(this.member);
    }
  },
  mounted() {
    const txnTable = this.$refs.txnTable;
    const userId = this.$router.currentRoute.query.userId;
    if (userId != undefined) {
      axios
        .get(uri.memberDetail + userId )
        .then(response => {
          this.member = response.data[0].member;
          txnTable.setCriteria(response.data[0].member.roleData);
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    }
  }
};
</script>

<style scoped>
</style>
