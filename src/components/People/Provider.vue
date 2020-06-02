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
      Fornecedores <v-icon id="titleIcon">{{ icons.icon }}</v-icon>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Consulte produtos por código de barras, código interno ou nome..."
      ></v-text-field>
    </v-card-title>

    <v-data-table :headers="headers" :items="products" sort-by="quant" class="elevation-1">
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
import {
  mdiMagnify
} from "@mdi/js";

export default {
  data: () => ({
    dialog: true,
    headers: [
      { text: "EAN-13", value: "ean" },
      { text: "Produto", value: "productName" },
      { text: "Estoque", value: "quant" },
      { text: "Preço", value: "price" },
      { text: "Ações", value: "actions", sortable: false }
    ],
    icons: {
      icon: mdiMagnify
    },
    products: [],
    editedIndex: -1,
    editedItem: {
      productName: "",
      ean: 0,
      quant: 0,
      price: ""
    },
    defaultItem: {
      productName: "",
      ean: 0,
      quant: 0,
      price: ""
    }
  }),

  computed: {
  },

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
          productName: "Coca-Cola 2LT",
          ean: 789564656163,
          quant: 15,
          price: "R$ 6,99"
        },
        {
          productName: "Guaraná Kuat 2LT",
          ean: 789564656547,
          quant: 5,
          price: "R$ 4,99"
        },
        {
          productName: "Suco Tang Uva UND",
          ean: 789564634444,
          quant: 350,
          price: "R$ 0,99"
        },
        {
          productName: "Suco del valle 250ml",
          ean: 789564656163,
          quant: 32,
          price: "R$ 2,69"
        },
        {
          productName: "Suco Laranja Del Valle Fresh 200ml",
          ean: 789564621555,
          quant: 22,
          price: "R$ 1,29"
        },
        {
          productName: "Mineirinho 2LT",
          ean: 789564656222,
          quant: 12,
          price: "R$ 3,99"
        }
      ];
    },

    getColor(quant) {
      if (quant < 10) return "red";
      else if (quant < 20) return "orange";
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