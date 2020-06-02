<template>
  <v-card>
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.productName" label="Produto"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.ean" label="EAN-13"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.quant" label="Estoque"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.price" label="Preço"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="save">Salvar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>

    <v-card-title>
      Consulta de Fornecedores
      <v-icon id="titleIcon">{{ icons.icon }}</v-icon>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Consulte seus Fornecedores por nome, CNPJ, IE..."
      ></v-text-field>
    </v-card-title>

    <v-data-table :headers="headers" :items="provider" sort-by="quant" class="elevation-1">
      <template v-slot:item.quant="{ item }">
        <v-chip :color="getColor(item.quant)" dark>{{ item.quant }}</v-chip>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
        <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mdiMagnify } from "@mdi/js";

export default {
  data: () => ({
    dialog: true,
    headers: [
      { text: "Nome Fantasia", value: "name" },
      { text: "CNPJ", value: "cnpj" },
      { text: "IE", value: "ie" },
      { text: "Grupo", value: "group" },
      { text: "Ações", value: "actions", sortable: false }
    ],
    icons: {
      icon: mdiMagnify
    },
    provider: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      cnpj: "",
      ie: "",
      group: ""
    },
    defaultItem: {
      name: "",
      cnpj: "",
      ie: "",
      group: ""
    }
  }),

  computed: {},

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.provider = [
        {
          name: "Cocacola Distribuidora de Bebidas LTDA",
          cnpj: "35.235.265/0001-58",
          ie: "ISENTO",
          group: "Bebidas"
        },
        {
          name: "Itaipava Distribuidora de Bebidas LTDA",
          cnpj: "35.236.528/0002-98",
          ie: "89785487",
          group: "Bebidas"
        },
        {
          name: "Pepisico Distribuidora de Alimentos LTDA",
          cnpj: "23.365.258/0001-69",
          ie: "56462168",
          group: "Não Perecíveis"
        }
      ];
    },

    getColor(quant) {
      if (quant < 10) return "red";
      else if (quant < 20) return "orange";
      else return "green";
    },

    editItem(item) {
      this.editedIndex = this.provider.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.provider.indexOf(item);
      confirm("Certeza que deseja deletar o Fornecedor?") &&
        this.provider.splice(index, 1);
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.provider[this.editedIndex], this.editedItem);
      } else {
        this.provider.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>