<template>
  <div id="app">
    <div id="calendar-wrap">
      <vue-calendar />
    </div>
  </div>
</template>

<script>
import VueCalendar from "./components/VueCalendar";

export default {
  name: 'App',
  components: {
    VueCalendar,
  }
}
</script>
