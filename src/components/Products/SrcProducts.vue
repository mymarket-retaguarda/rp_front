<template>
  <v-data-table :headers="headers" :items="desserts" sort-by="quant" class="elevation-1">
    <template v-slot:item.quant="{ item }">
      <v-chip :color="getColor(item.quant)" dark>{{ item.quant }}</v-chip>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
      <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    headers: [
      { text: "EAN13", value: "ean" },
      { text: "Produto", value: "productName" },
      { text: "Estoque", value: "quant" },
      { text: "Preço", value: "price" },
      { text: "Ações", value: "actions", sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
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
      this.desserts = [
        {
          productName: "Coca-Cola 2LT",
          ean: 789564656163,
          quant: 22,
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
        },
      ];
    },

    getColor (quant) {
        if (quant < 10) return 'red'
        else if (quant < 20 ) return 'orange'
        else return 'green'
      },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
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
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>