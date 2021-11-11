<template>
  <div id="app">
    <div id="calendar-wrap">
      <div id="selected-value">
        Selected value: {{ date ? date.toISOString() : '' }}
      </div>
      <vue-calendar :default-date="'2020-12-27'"
                    @onChanged="date = $event" />
    </div>

  </div>
</template>

<script>
import VueCalendar from "./components/VueCalendar";

export default {
  name: 'App',
  data () {
    return {
      date: undefined,
    }
  },
  components: {
    VueCalendar,
  },
}
</script>
