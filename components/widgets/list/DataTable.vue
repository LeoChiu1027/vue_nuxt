<template>
  <v-card class="cardStyle">
    <div id="dataTablePagination">
      <template>
        <v-data-table
          :headers="headers"
          :items="dataArray"
          item-key="index"
          :single-expand="singleExpand"
          :expanded.sync="expanded"
          :hide-default-footer="hideFooter"
          :sort-by="sort"
          sort-desc
          :server-items-length="length"
          :page.sync="page"
          :items-per-page="5"
        >
          <template v-slot:item.id="props">
            <div class="text-center">
              {{props.item.id}}
            </div>
          </template>        
        </v-data-table>

      </template>
    </div>
  </v-card>
</template>

<script>


export default {
  props: {
    headers: {
      type: Array,
      default: null
    },
    dataArray: {
      type: Array,
      default: []
    },
    hideFooter: {
      type: Boolean,
      default: false
    },
    sort: {
      type: String,
      default: ""
    },
    length: {
      type: Number,
      default: 0
    }
  },

  data: () => ({
    page: 1,
    expanded: [],
    singleExpand: false,
    radios: "",
    rules: {
      required: value => !!value || "↑不能為空.",
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "E-mail 格式錯誤";
      }
    }
  }),
  watch: {
    page(val) {
      this.$emit('currentPage',val);
    },
    dataArray(){
       console.log('dataArray watch',this.dataArray);
    }
  },
  computed: {},
  methods: {
    action(type, data) {
      this.$emit(type, data);
    }
  },
  mounted(){
    console.log('dataArray',this.dataArray);
  }
};
</script>
<style >
#dataTablePagination .v-data-table th {
  padding: 0px !important;
}
#dataTablePagination .v-data-table td {
  padding: 1px !important;
  max-width: 1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

#dataTablePagination .v-data-footer__select{
    display: none !important;
}

#dataTablePagination .v-data-footer{
    height: 70px;
}
</style>