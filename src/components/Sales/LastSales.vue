<template>
  <div>
    <v-card-title>
      Últimas Vendas
      <v-icon id="titleIcon">{{ icons.icon }}</v-icon>
    </v-card-title>
    <ListSales />
  </div>
</template>

<script>
import ListSales from "./ListSales";
import { mdiCartArrowDown } from "@mdi/js";

export default {
  data() {
    return {
      components: {
        ListSales: ListSales
      },
      icons: {
        icon: mdiCartArrowDown
      }
    };
  }
};
</script>