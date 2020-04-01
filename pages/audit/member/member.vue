<template>
  <div>
    <v-container grid-list-lg fluid>
      <v-layout row wrap>
        <v-flex xs11 sm5 lg3 >
            <v-btn @click="addData" color="primary" dark>新增</v-btn>        
         </v-flex>  
      </v-layout>

      <v-layout row wrap>
        <v-flex xs12 sm12 lg12>
          <member-table ref="txnTable"></member-table>
        </v-flex>        
      </v-layout>
    </v-container>
  </div>
</template>

<script>
 import MemberTable from '@/components/audit/widgets/list/MemberTable';

export default {
  middleware: 'authenticated',
  layout: "audit/template",
    components: {
      MemberTable
    },
  data: () => ({
    memberSearch: {
      select: '',
      search: ''
    },
    Select: { type: "角色類別", val: "CI" },
    memberType: [
      { type: "管理者", val: "S" },
      { type: "一般使用者", val: "A" }
    ],
  }),
  methods:{
    addData(){
         this.$router.push("/audit/member/memberDetail");
    }
  }
};
</script>

<style scoped>
</style>
