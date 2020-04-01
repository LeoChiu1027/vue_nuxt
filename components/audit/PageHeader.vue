  <template>
  <v-layout row class="align-center layout px-4 pt-4 app--page-header">
    <v-breadcrumbs divider="-" :items="breadcrumbs">
    </v-breadcrumbs>
    <v-spacer></v-spacer>
  </v-layout>  
</template>

<script>
import menu from '@/api/audit/menu';
export default {
  data () {
    return {
      title: ''
    };
  },
  computed: {
    breadcrumbs () {
      let breadcrumbs = [];
      menu.forEach(item => {
        if (item.items) {
          let child =  item.items.find(i => {
            return i.href === this.$route.path;
          });
          if (child) {
            breadcrumbs.push({text: item.title});
            breadcrumbs.push({text: child.title, disabled: true});
            this.title = child.title;
          }
        } else {
          if (item.href === this.$route.path) {
            this.title = item.title;
            breadcrumbs.push({text: item.title});
          }
        }
      });
      return breadcrumbs;
    },    
  }
};
</script>
