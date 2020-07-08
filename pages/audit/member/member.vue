<template>
  <div>
    loggedIn:{{ $auth.loggedIn}}
    username: {{ $auth.user.name}}
    <v-container grid-list-lg fluid>
      <v-layout row wrap>
        <v-flex xs11 sm5 lg3 >
            <v-btn @click="addData" color="primary" dark>新增</v-btn>        
         </v-flex>  
      </v-layout>

      <v-layout row wrap>
        <v-flex xs12 sm12 lg12>
          <data-table 
            :headers="headers"
            :length="totalElements"
            @currentPage="handleChangePage"
            :dataArray="dataArray">
          </data-table>
        </v-flex>        
      </v-layout>
    </v-container>
  </div>
</template>

<script>

export default {
  // middleware: 'authenticated',
  // auth: false,
  layout: "audit/template",
  data: () => ({
      headers: [
        { text: "id", align: "center", value: "id" },
        { text: "email", align: "center", value: "email" },
        { text: "role", align: "center", value: "role" },
        { text: "minGleePerDay", align: "center", value: "minGleePerDay" },
      ],
    dataArray: [],
    totalElements: 0,
    currentPage: 0,

  }),
  methods:{
    addData(){
         this.$router.push("/audit/member/memberDetail");
    },

    handleChangePage(val) {
      this.currentPage = val - 1;
      this.getData();
    },

    async getData(){
        const res = await this.$store.dispatch("getUsers", {
          pageNumber: this.currentPage,
          pageSize: 5
        });
        this.dataArray = res.content;
        this.totalElements = res.totalElements;
        console.log('data',this.dataArray);
    }
  },
  created(){
    this.getData();
  },
  mounted() {
    
  }
};
</script>

<style scoped>
</style>
