<template>
  <div class="vue-calendar">
    <div class="vue-calendar-month">
      <span class="vue-calendar-month-title">{{ monthName }}, {{ this.state.year }}</span>
      <button type="button"
              class="vue-calendar-month-after"
              @click="switchNextMonth">
        >
      </button>
      <button type="button"
              class="vue-calendar-month-before"
              @click="switchPreviousMonth">
        &lt;
      </button>
    </div>
    <br />
    <div class="vue-calendar-weekdays">
      <div class="vue-calendar-day-block">{{ $t('calendar.day.monday') }}</div>
      <div class="vue-calendar-day-block">{{ $t('calendar.day.tuesday') }}</div>
      <div class="vue-calendar-day-block">{{ $t('calendar.day.wednesday') }}</div>
      <div class="vue-calendar-day-block">{{ $t('calendar.day.thursday') }}</div>
      <div class="vue-calendar-day-block">{{ $t('calendar.day.friday') }}</div>
      <div class="vue-calendar-day-block">{{ $t('calendar.day.saturday') }}</div>
      <div class="vue-calendar-day-block">{{ $t('calendar.day.sunday') }}</div>
    </div>
    <div class="vue-calendar-month-days">
      <div v-for="day in emptyDays"
           :key="'month-day-empty-' + day"
           class="vue-calendar-day-block">
        {{ ' ' }}
      </div>
      <div v-for="day in days"
           :key="'month-day-' + day"
           :class="getDayClasses(day)"
           @click="onDaySelected(day)">
        {{ day }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueCalendar',
  props: {
    defaultDate: {
      type: String,
      default: undefined,
    },
  },
  data () {
    return {
      state: {
        month: undefined,
        year: undefined,
      },
      date: undefined
    }
  },
  computed: {
    emptyDays () {
      const date = new Date(`${this.state.year}-${this.state.month}-01`);
      const weekDay = date.getDay() === 0 ? 7 : date.getDay();
      return weekDay - 1;
    },
    days () {
      const date = new Date(`${this.state.year}-${this.state.month}-01`);
      const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      return lastDay.getDate();
    },
    monthName () {
      const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
      return this.$t(`calendar.month.${months[this.state.month - 1]}`);
    },
  },
  created () {
    if (this.defaultDate === undefined) {
      this.date = new Date();
    } else {
      this.date = new Date(this.defaultDate);
    }

    this.state.month = this.date.getMonth() + 1;
    this.state.year  = this.date.getFullYear();
  },
  methods: {
    switchPreviousMonth () {
      if (this.state.month === 1) {
        this.state.month = 12;
        this.state.year--;
      } else {
        this.state.month--;
      }
    },
    switchNextMonth () {
      if (this.state.month === 12) {
        this.state.month = 1;
        this.state.year++;
      } else {
        this.state.month++;
      }
    },
    getDayClasses (day) {
      return  {
        'vue-calendar-day-block': true,
        'vue-calendar-day-block-active': this.date.getDate() === day && this.date.getFullYear() === this.state.year
            && this.date.getMonth() + 1 == this.state.month
      }
    },
    onDaySelected (day) {
      this.date = new Date(`${this.state.year}-${this.state.month}-${day}`);
      this.$emit('onChanged', this.date);
    },
  }
};
</script>
