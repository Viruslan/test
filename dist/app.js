const App = {
    data() {
      return {
        products: []
      }
    },
    async mounted() {
      const res = await fetch('/api/server')
      this.products = await res.json()
    }
  }
  
  Vue.createApp(App).mount('#app')