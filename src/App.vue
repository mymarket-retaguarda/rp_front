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
            <v-icon>{{ icons.mdiBarcode }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Produtos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>{{ icons.mdiChartAreaspline }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Vendas</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>{{ icons.mdiCashUsdOutline }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Financeiro</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>{{ icons.mdiFileChart }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Relatórios</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>{{ icons.mdiAccount }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Usuários</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>{{ icons.mdiAccountTie }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Área Adm</v-list-item-title>
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
      <div>{{ new Date() | dateFormat('YYYY.MM.DD', dateFormatConfig) }}</div>
      <v-spacer></v-spacer>

      <h5 style="margin-right: 5px;">Bem vindo: Euclides Nascimento</h5>
      <v-avatar size="30">
        <img
          src="https://scontent.fgru5-1.fna.fbcdn.net/v/t1.0-0/s552x414/90877452_1073910689651070_2626737290256318464_n.jpg?_nc_cat=105&_nc_sid=13bebb&_nc_eui2=AeH7HyhojggU8Orl19iYcGFsYErHpHSx2zNgSsekdLHbM880oRrICKx-Wqx-bvInQj7jOfi5rBGQs0W0dCtI4DaJ&_nc_oc=AQlF-4Qa1PRpKcirF3frJuW0yI5ma7rVF1YvdXmfYwu5NCaCLyWPRliQ5Mgf9JxCqPMpfvS4slDqtzx_sItjFjOs&_nc_ht=scontent.fgru5-1.fna&_nc_tp=7&oh=1572a074c1bf508132fa07a8bdac1d2d&oe=5EFB058E"
          alt="Euclides Nascimento"
        />
      </v-avatar>
    </v-footer>
  </v-app>
</template>

<script>
import {
  mdiAccount,
  mdiBarcode,
  mdiAccountTie,
  mdiCashUsdOutline,
  mdiChartAreaspline,
  mdiFileChart
} from "@mdi/js";

export default {
  props: {
    source: String
  },
  data: () => ({
     dateFormatConfig: {
          dayOfWeekNames: [
            'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta',
            'Sexta', 'Sábado'
          ],
          dayOfWeekNamesShort: [
            'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'
          ],
          monthNames: [
            'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
            'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
          ],
          monthNamesShort: [
            'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
            'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
          ]
        },
    icons: {
      mdiAccount,
      mdiBarcode,
      mdiAccountTie,
      mdiCashUsdOutline,
      mdiChartAreaspline,
      mdiFileChart
    },
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