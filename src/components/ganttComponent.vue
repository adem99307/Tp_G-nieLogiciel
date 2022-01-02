<template>
  <div class="container" id="gantt"></div>
</template>

<style>
#gantt{
  width: 1000px;
  height: 1000px;
}
</style>

<script>
import anychart from 'anychart'
export default {
  created() {
    let tempData = this.$store.state.data
    anychart.onDocumentReady(function () {
      var data = []
      var currentDate = new Date()
      for (const temp of tempData) {
        if(temp.predecesseur == "")
        {
          let t = {
            id : data.length + 1,
            name : temp.name_tache,
            actualStart : new Date().toISOString().slice(0, 10),
            actualEnd : currentDate.setDate(currentDate.getDate() + temp.time_tache),
            children : []
          }
          data.push(t)
        }
      }

      for (const temp of tempData)
      {
        if(temp.predecesseur !== "")
        {
          let statement = temp.predecesseur.split(';')
          for (const word of statement)
          {
            let t = {
              id : data.length + 1,
              name : temp.name_tache,
              actualStart : new Date().toISOString().slice(0, 10),
              actualEnd : currentDate.setDate(currentDate.getDate() + temp.time_tache)
            }
            for (let i = 0;i<data.length;i++)
            {
              if(data[i].name == word)
              {
                data[i].children.push(t)
              }else{
                data.push(t)
              }
            }
          }
        }
      }


      var treeData = anychart.data.tree(data, "as-tree");

      var chart = anychart.ganttProject();

      chart.data(treeData);

      chart.container("gantt");

      chart.draw();
      chart.fitAll();
    });
  }
}
</script>