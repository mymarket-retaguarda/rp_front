<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Produtos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-Account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Usuarios</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Configurações</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>myMarket</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-text-field 
        style="margin-top: 5px;"
        color="info" 
        loading 
        label="Buscar..."
      ></v-text-field>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    <div class="d-flex align-center">
      <v-switch 
        style="margin-top: 15px"
        v-model="ChangeTheme" 
        inset
        :v-on="chengeTheme()"
        :label="`Tema: ${theme}`"
      ></v-switch>
    </div>
    </v-app-bar>

    <v-content>
      <SalesUser />
    </v-content>

    <v-footer app>
      <span>myMarket &copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import SalesUser from "./components/SalesUser";

export default {
  props: {
    source: String
  },
  components: {
    SalesUser: SalesUser
  },
  data: () => ({
    drawer: null,
    ChangeTheme: false,
    theme: '',
    search: ''
  }),
  created() {
      this.$vuetify.theme.dark = this.ChangeTheme;
  },
  computed: {
  },
  methods: {
    chengeTheme() {
      if(this.ChangeTheme === false) {
        this.$vuetify.theme.dark = true
        this.theme = 'Escuro'
      } else {
        this.$vuetify.theme.dark = false
        this.theme = 'Claro'
      }
    }
  }
};
</script>