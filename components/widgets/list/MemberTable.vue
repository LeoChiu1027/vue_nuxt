<template>
  <v-card>
    <v-divider></v-divider>
    <v-card-text class="pa-0">
      <v-card-title>
        會員專區
        <v-spacer></v-spacer>
        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="member"
        :items-per-page="5"
        :sort-by="['員工編號', '姓名']"
        :sort-desc="[false, true]"
        multi-sort
        :search="search"
        class="elevation-1"
      >
        <template slot="item" slot-scope="props">
          <tr >
            <td class="text-xs-right" align="center">
              <a @click="queryData(props.item.member_id)">
                <v-icon>mdi-lead-pencil</v-icon>
              </a>
            </td>
            <td class="text-xs-right" align="center">
                {{props.item.member_id}}
            </td>
            <td class="text-xs-right" align="center">
               {{props.item.member_level}}
            </td>
            <td class="text-xs-right" align="center">
               {{props.item.member_name}}
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
  name: "member-table",
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Action",
          align: "center",
          sortable: true,
          value: "action"
        },
        {
          text: "員工編號",
          align: "center",
          sortable: true,
          value: "member_id"
        },
        {
          text: "角色等級",
          align: "center",
          sortable: false,
          value: "member_level"
        },
        { text: "姓名", align: "center", sortable: true, value: "member_name" }
      ],
      member: []
    };
  },
  methods: {
    setCriteria(param) {
      console.log("setCriteria", param);
    },
    queryData(userId){
      const pathData = { path:"/audit/member/memberDetail" , query: { userId: userId }};
      this.$router.push(pathData);
    },
    queryRows() {
      axios
        .get(uri.memberSearch)
        .then(response => {
          this.member = response.data;
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    }
  },
  mounted() {
    //this.queryRows();
  }
};
</script>
