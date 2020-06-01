<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Tipo de Pagamento',
            align: 'start',
            sortable: false,
            value: 'typePayment',
          },
          { text: 'Valor da Venda', value: 'sale' },
          { text: 'Comissão', value: 'commission' },
          { text: 'Desconto', value: 'discount' }
        ],
        desserts: [
          {
            typePayment: 'CREDITO | MASTER',
            sale: 'R$ 239,99',
            commission: '5%',
            discount: '10%',
          },
          {
            typePayment: 'DEBITO | VISA',
            sale: 'R$ 89,99',
            commission: '15%',
            discount: '0%',
          },
          {
            typePayment: 'CREDITO | ELO',
            sale: 'R$ 3.239,99',
            commission: '25%',
            discount: '0%',
          },
          {
            typePayment: 'CREDITO | MASTER',
            sale: 'R$ 39,99',
            commission: '5%',
            discount: '10%',
          },
        ],
      }
    },
  }
</script>