<template>
  <v-form v-model="valid">
    <v-card-title>
      Cadastro de Colaborador
      <v-icon id="titleIcon">{{ icons.icon }}</v-icon>
    </v-card-title>
    <v-row>
      <v-col cols="12" md="3">
        <v-text-field v-model="name" label="Nome completo"></v-text-field>
      </v-col>

      <v-col cols="12" md="3">
        <v-text-field v-model="cpf" label="CPF"></v-text-field>
      </v-col>

      <v-col cols="12" md="3">
        <v-select :items="func" label="Função"></v-select>
      </v-col>

      <v-col cols="12" md="3">
        <v-select :items="worth" label="Vale"></v-select>
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
import { mdiAccountMultiplePlus } from "@mdi/js";
export default {
  data: () => ({
    valid: false,
    name: "",
    func: [
        "Gerente Geral",
        "Operador de Caixa",
        "Auxiliar Administrativo",
        "Assistente Administrativo",
        "Departamento Pessoal",
        "Recursos Humanos",
        "Laticinios",
        "Padaria"
    ],
    cpf: "",
    worth: [
        "Liberado",
        "Bloqueado"
    ],
    icons: {
      icon: mdiAccountMultiplePlus
    }
  })
};
</script>