<template>
  <v-form v-model="valid">
    <v-card-title>
      Cadastro de Fornecedor
      <v-icon id="titleIcon">{{ icons.icon }}</v-icon>
    </v-card-title>
    <v-row>
      <v-col cols="12" md="3">
        <v-text-field v-model="name" label="Nome Fantasia"></v-text-field>
      </v-col>

      <v-col cols="12" md="3">
        <v-text-field v-model="cnpj" label="CNPJ"></v-text-field>
      </v-col>

      <v-col cols="12" md="3">
        <v-text-field v-model="ie" label="Inscrição Estadual"></v-text-field>
      </v-col>

      <v-col cols="12" md="3">
        <v-select :items="group" label="Grupo"></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
      <v-btn class="ma-2" color="primary" dark>
        Salvar
        <v-icon dark right>mdi-checkbox-marked-circle</v-icon>
      </v-btn>

      <v-btn class="ma-2" color="red" dark>
        Cancelar
        <v-icon dark right>mdi-cancel</v-icon>
      </v-btn>
    </v-row>
  </v-form>
</template>

<script>
import { mdiBriefcasePlus } from "@mdi/js";
export default {
  data: () => ({
    valid: false,
    name: "",
    cnpj: "",
    ie: "",
    icons: {
      icon: mdiBriefcasePlus
    },
    group: ["Bebidas", "Carnes"]
  })
};
</script>