import { mount } from '@vue/test-utils'
import EventCard from '@/components/EventCard'

describe('Event Card', () => {
  it('renders the necessary event data', () => {
    const event = {
      id: 1,
      title: 'Coaching Little League',
      date: 'September 22, 2022',
      time: '12:00PM'
    }

    const wrapper = mount(EventCard, {
      props: {
        event
      }
    })

    const wrapperHtml = wrapper.html()
    expect(wrapperHtml).toContain(event.title)
    expect(wrapperHtml).toContain(event.date)
    expect(wrapperHtml).toContain(event.time)
  })
})
