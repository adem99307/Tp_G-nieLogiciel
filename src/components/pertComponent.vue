<template>
  <div class="container" id="pert"></div>
</template>
<style>
#pert{
  width: 1000px;
  height: 1000px;
}
</style>
<script>
export default {
  created() {
    anychart.onDocumentReady(function () {

      // data
      var data = [
        {id: "1", duration: 1, name: "Task A"},
        {id: "2", duration: 4, name: "Task B"},
        {id: "3", duration: 3, name: "Task C"},
        {id: "4", duration: 1, name: "Task D"},
        {id: "5", duration: 2, name: "Task AD", dependsOn: ["1", "4"]},
        {id: "6", duration: 2, name: "Task BC", dependsOn: ["2", "3"]}
      ];

      let chart = anychart.pert();

      chart.data(data, "asTable");


      chart.title("PERT Chart");


      chart.container("pert");

      chart.draw();
    });
  }
}
</script>