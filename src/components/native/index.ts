Component({

  props: {
    pv: 666,
  },

  data: {
    value: 0,
  },

  methods: {
    addValue() {
      this.setData({
        value: this.data.value + 1,
      })
    }
  }

})
