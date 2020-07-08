<template>
  <v-card>
    <v-btn @click="addAccount" class="bottom30" color="primary" dark>新增列表</v-btn>
    <v-divider></v-divider>
    <v-card-text class="pa-0">
      <v-data-table
        :headers="headers"
        :items="roleData"
        class="elevation-1"
        disable-sort
        :items-per-page="5"
      >
    
        <template slot="item" slot-scope="props">
          <tr >
            <td class="text-xs-right" align="center">
              <a @click="deleteAccount(props.item)">
                <v-icon>mdi-delete-forever</v-icon>
              </a>
            </td>
            <td class="text-xs-right">
              <v-select
                v-model="props.item.domain"
                :items="drowpDown.domainSelects"
                item-text="text"
                item-value="value"
                single-line
              ></v-select>
            </td>
            <td class="text-xs-right">
              <v-text-field v-model="props.item.account" single-line type="text" hide-details></v-text-field>
            </td>
            <td class="text-xs-right">
              <v-select
                v-model="props.item.userlvl"
                item-text="text"
                item-value="value"
                :items="drowpDown.levelSelects"
                single-line
              ></v-select>
            </td>
            <td class="text-xs-right">
              <v-select
                v-model="props.item.usersts"
                item-text="text"
                item-value="value"
                :items="drowpDown.statusSelects"
                single-line
              ></v-select>
            </td>
            <td class="text-xs-right">
              <v-select
                v-model="props.item.userrole"
                item-text="text"
                item-value="value"
                :items="drowpDown.roleSelects"
                single-line
              ></v-select>
            </td>
            <td class="text-xs-right">
              <v-text-field v-model="props.item.userinfo" type="text" hide-details></v-text-field>
            </td>
          </tr>
        </template>
      </v-data-table>
      <v-divider></v-divider>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from "@/util/axios"
import uri from "@/api/uri";

export default {
  name: "member-detail-table",
  data() {
    return {
      headers: [
        { text: "id", align: "center", value: "id" },
        { text: "email", align: "center", value: "email" },
        { text: "role", align: "center", value: "role" },
        { text: "minGleePerDay", align: "center", value: "minGleePerDay" },
      ],
      drowpDown: {
        domainSelects: [],
        levelSelects: [],
        statusSelects: [],
        roleSelects: []
      },
      roleData: [
        {
          domain: "",
          account: "",
          userlvl: "",
          usersts: "",
          userrole: "",
          userinfo: ""
        }
      ]
    };
  },
  methods: {
    setCriteria(param) {
      this.roleData = param;
    },
    addAccount() {
      this.roleData.push({});
    },
    queryDrowpSelect() {
      axios
        .get(uri.drowpDownSelect)
        .then(response => {
          this.drowpDown.levelSelects = response.data.userlvl;
          this.drowpDown.domainSelects = response.data.domain;
          this.drowpDown.statusSelects = response.data.usersts;
          this.drowpDown.roleSelects = response.data.userrole;
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
    deleteAccount(item) {
      const index = this.roleDate.indexOf(item);
      this.roleDate.splice(index, 1);
    }
  },
  mounted() {
    this.queryDrowpSelect();
  }
};
</script>


<style scoped>
.bottom30 {
  margin: 30px;
}
</style>
