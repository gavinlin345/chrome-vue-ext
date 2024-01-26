window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;
const { createApp, ref } = Vue;

const app = createApp({
  setup() {
    const message = ref('Hello vue!');
    return {
      message
    };
  }
});

app.mount('#app');