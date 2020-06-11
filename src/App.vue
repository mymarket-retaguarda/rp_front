<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item two-line :class="miniVariant && 'px-0'">
          <v-list-item-avatar>
            <img
              src="https://scontent.fgru5-1.fna.fbcdn.net/v/t1.0-9/84147709_1041326446242828_5316676609116209152_n.jpg?_nc_cat=103&_nc_sid=7aed08&_nc_eui2=AeFXOXjCnBl_lWsH3l43F9Um-fW4xTlFuW759bjFOUW5btWCfd7FDy29CdaHMJGVGIDAd7pyb2bH4WeIe6coRO5F&_nc_oc=AQnPp5uBJWrAxbVl0MsR0DCzTVF6XATvAhVGn-YKbo2xhmplRC6i1PcAlB9vADm-G1UD57XUAe-vt8JPQHjgs1nb&_nc_ht=scontent.fgru5-1.fna&oh=ac11e60792202ea25f9a0b66935262a3&oe=5EFB6965"
            />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Euclides Nascimento</v-list-item-title>
            <v-list-item-subtitle>Gerente Adm</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
        <v-list-item v-for="item in items" :key="item.title" :to="item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>myMarket</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-text-field style="margin-top: 5px;" color="info" loading label="Buscar..."></v-text-field>
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
      <router-view />
    </v-content>

    <v-footer app>
      <span>myMarket &copy; 2020</span>

      <v-spacer></v-spacer>
      <div>Data: 09/06/2020 | 10:36:22</div>
    </v-footer>
  </v-app>
</template>

<script>
import {
  mdiAccount,
  mdiLayers,
  mdiAccountTie,
  mdiCashUsdOutline,
  mdiChartAreaspline,
  mdiAccountGroup,
  mdiFileChart
} from "@mdi/js";

export default {
  props: {
    source: String
  },
  data: () => ({
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard", link: "/" },
      { title: "Produtos", icon: mdiLayers, link: "/products" },
      { title: "Importar XML", icon: "mdi-file-download", link: "/imports" },
      { title: "Pessoas", icon: mdiAccountGroup, link: "/people" },
      { title: "Vendas", icon: mdiChartAreaspline, link: "/sales" },
      { title: "Financeiro", icon: mdiCashUsdOutline, link: "/financial" },
      { title: "Relatórios", icon: mdiFileChart, link: "/report" },
      { title: "Usuários", icon: mdiAccount, link: "/users" },
      { title: "Área Administrativa", icon: mdiAccountTie, link: "/admin" },
      { title: "Configurações", icon: "mdi-cog", link: "/config" }
    ],
    drawer: null,
    ChangeTheme: false,
    theme: "",
    search: ""
  }),
  created() {
    this.$vuetify.theme.dark = this.ChangeTheme;
  },
  computed: {},
  methods: {
    chengeTheme() {
      if (this.ChangeTheme === false) {
        this.$vuetify.theme.dark = true;
        this.theme = "Escuro";
      } else {
        this.$vuetify.theme.dark = false;
        this.theme = "Claro";
      }
    }
  }
};
</script>