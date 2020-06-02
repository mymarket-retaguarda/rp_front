<template>
  <v-form v-model="valid">
      
    <v-card-title>
      Cadastro de Produtos
    </v-card-title>
    <v-row>
      <v-col cols="12" md="3">
        <v-text-field v-model="barCod" label="Código de Barras"></v-text-field>
      </v-col>

      <v-col cols="12" md="3">
        <v-text-field v-model="internCod" label="Código Interno"></v-text-field>
      </v-col>

      <v-col cols="12" md="3">
        <v-text-field v-model="productName" label="Descrição do Produto"></v-text-field>
      </v-col>

      <v-col cols="12" md="3">
        <v-text-field v-model="minProductName" label="Descrição Resumida"></v-text-field>
      </v-col>

      <v-col cols="12" md="3">
        <v-select :items="groupProducts" label="Grupo do Produto"></v-select>
      </v-col>

      <v-col cols="12" md="3">
        <v-select :items="subGroupProducts" label="Sub-grupo do Produto"></v-select>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    email: "",
    groupProducts: [
        'Bebidas',
        'Carnes',
    ],
    subGroupProducts: [
        'Nacionais',
        'Importados',
    ],
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ]
  })
};
</script>