import React, { useState } from 'react'
import { useTheme } from '@emotion/react'
import { Calendar, CalendarProvider } from 'zaman'
import { MockDatePicker, PatternBack, PatternBack2, Wrapper } from './CalendarSection.styled'
import pattern from './pattern.png'
import { useTranslation } from 'react-i18next'

export const CalendarSection = () => {
  const { i18n } = useTranslation(['header'])
  const [calendarValue, setCalendarValue] = useState(new Date())
  const theme = useTheme()
  const locale = i18n.language === 'fa' ? 'fa' : 'en'
  return (
    <Wrapper>
      <PatternBack
        style={{ backgroundImage: `url(${pattern})` }}
      />
      <PatternBack2 style={{ backgroundImage: `url(${pattern})` }} />
      <MockDatePicker />
      <div style={{ position: 'absolute', top: 0, zIndex: 100 }}>
        <CalendarProvider
          locale={locale}
          direction={i18n.dir()}
          accentColor={theme.accentColor}
        >
          <Calendar
            defaultValue={calendarValue}
            onChange={(d) => setCalendarValue(new Date(d))}
            weekends={[6]}
          />
        </CalendarProvider>
      </div>
    </Wrapper>
  )
}

export default CalendarSection
