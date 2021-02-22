<template>
  <h1 data-testid="event-list-title">Events for Good</h1>
  <div class="events">
    <router-link v-for="event in events"
      class="event-link"
      :to="{ name: 'EventDetails', params: { id: event.id } }"
      :key="event.id">
      <EventCard data-testid="event" :event="event" />
    </router-link>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard'

export default {
  name: 'EventList',
  components: {
    EventCard
  },
  created() {
    this.$store.dispatch('fetchEvents')
    .catch(error => {
      this.$router.push({
        name: 'ErrorDisplay',
        params: { error: error }
      })
    })
  },
  computed: {
    events() {
      return this.$store.state.events
    }
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
