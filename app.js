const app = Vue.createApp({
  data() {
    return {
      myName: `Anano`,
      myAge: `30`,
      randomNumber: Math.random(),
      imgLink: `https://images.freeimages.com/images/large-previews/34e/williamstown-1057646.jpg`,
    };
  },
});

app.mount(`#assignment`);
