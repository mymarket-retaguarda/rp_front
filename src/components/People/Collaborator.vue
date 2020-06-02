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
                    <v-text-field v-model="editedItem.status" label="Estoque"></v-text-field>
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
      Consulta de Colaboradores
      <v-icon id="titleIcon">{{ icons.icon }}</v-icon>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Consulte seus colaboradores por nome, cpf, cargo..."
      ></v-text-field>
    </v-card-title>

    <v-data-table :headers="headers" :items="products" sort-by="status" class="elevation-1">
      <template v-slot:item.status="{ item }">
        <v-chip :color="getColor(item.status)" dark>{{ item.status }}</v-chip>
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
import { mdiAccountSearch } from "@mdi/js";

export default {
  data: () => ({
    dialog: true,
    headers: [
      { text: "Nome", value: "name" },
      { text: "CPF", value: "cpf" },
      { text: "Função", value: "function" },
      { text: "Turno", value: "shift" },
      { text: "Status", value: "status" },
      { text: "Ações", value: "actions", sortable: false }
    ],
    icons: {
      icon: mdiAccountSearch
    },
    products: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      cpf: "",
      function: "",
      shift: "",
      status: ""
    },
    defaultItem: {
      name: "",
      cpf: "",
      function: "",
      shift: "",
      status: ""
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
      this.products = [
        {
          name: "Clodoaldo Maranhão",
          cpf: "524.165.157-99",
          function: "Recursos Humanos",
          shift: "Noite",
          status: "Serviço"
        },
        {
          name: "Adauberto Nunes Cunha",
          cpf: "147.168.158-55",
          function: "Departamento Pessoal",
          shift: "Manhã",
          status: "Folga"
        },
        {
          name: "Urmelinda Peres",
          cpf: "125.158.147-99",
          function: "Gerente Geral",
          shift: "Noite",
          status: "Serviço"
        },
        {
          name: "Jucelino Abelardo",
          cpf: "321.585.889-68",
          function: "Auxiliar de Serviços Gerais",
          shift: "Noite",
          status: "Folga"
        },
        {
          name: "José Carlos Araujo",
          cpf: "157.155.125-55",
          function: "Caixa",
          shift: "Manhã",
          status: "Serviço"
        },
        {
          name: "josiclaide Amaral",
          cpf: "152.111.458-44",
          function: "Promotor",
          shift: "Noite",
          status: "Serviço"
        }
      ];
    },

    getColor(status) {
      if (status === "Folga") return "red";
      else if (status === "Serviço") return "green";
      else return "green";
    },

    editItem(item) {
      this.editedIndex = this.products.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.products.indexOf(item);
      confirm("Certeza que deseja deletar o Produto?") &&
        this.products.splice(index, 1);
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
        Object.assign(this.products[this.editedIndex], this.editedItem);
      } else {
        this.products.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>