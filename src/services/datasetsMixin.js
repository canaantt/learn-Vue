export const datasetsMixin = {
  data () {
    return {
      mymsg: 'DashboardComponent Component',
      datasets: [],
      filterText: '',
      x: '',
      y: ''
    }
  },
  computed: {
    filteredDatasets: function () {
      return this.datasets.filter((element) => element.Name.match(this.filterText))
    }
  }
}
