const productsRouter = [
    {
      path: '/products',
      name: 'products',
      component: () => import('@/components/Products/Products.vue'),
      redirect: { name: 'supplier home' },
      meta: {
        breadCrumb: 'Products',
      },
    },
  ];
  
  
  export default productsRouter;