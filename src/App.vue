<template>
  <div id="app">
    <div class="container justify-content-center align-content-center">
      <table class="table">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Tâche</th>
          <th scope="col">Durée</th>
          <th scope="col">Antécédent(s)</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(value,index) in $store.state.data" :key="index">
          <td>{{index + 1}}</td>
          <td contenteditable="true">{{value.name_tache}}</td>
          <td> <span contenteditable="true">{{value.time_tache}}</span> Jours</td>
          <td contenteditable="true"><span v-if="value.predecesseur == ''">-</span> <span v-else>{{value.predecesseur}} </span> </td>
        </tr>
        </tbody>
      </table>
      <div v-if="!progress" class="charts">
        <div class="d-flex align-items-start">
          <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-pert" type="button" role="tab" aria-controls="v-pills-pert" aria-selected="true">PERT</button>
            <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-gantt" type="button" role="tab" aria-controls="v-pills-gantt" aria-selected="false">GANTT</button>
          </div>
          <div class="tab-content" id="v-pills-tabContent">
            <div class="tab-pane fade show active" id="v-pills-pert" role="tabpanel" aria-labelledby="v-pills-pert-tab"><pert-component /> </div>
            <div class="tab-pane fade" id="v-pills-gantt" role="tabpanel" aria-labelledby="v-pills-gantt-tab"><gantt-component /> </div>
          </div>
        </div>
      </div>
      <div v-else="progress" class="spinner-border container justify-content-center" role="status">
        <span class="sr-only"></span>
      </div>
  </div>
  </div>
</template>

<script>
import pertComponent from './components/pertComponent'
import ganttComponent from './components/ganttComponent'
export default {
  data : () =>{
    return{
      progress : false,
    }
  },
  components : {
    pertComponent,
    ganttComponent
  },
  created() {

  }
}
</script>
