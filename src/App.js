
import './App.css';
import React, { useCallback, useState, useEffect } from 'react';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider, Page, DatePicker, Card, DisplayText, Button } from '@shopify/polaris';
import { HeartMajor } from '@shopify/polaris-icons';
import Container from './components/container';

function App() {
  // Page
  const [viewLiked, setViewLiked] = useState(false);
  const primaryAction = { content: 'Liked Photos', icon: HeartMajor, onclick: { setViewLiked } };

  // DatePicker
  const [{ month, year }, setDate] = useState({ month: 0, year: 2022 });
  const [selectedDates, setSelectedDates] = useState({ start: new Date('Thu Jan 1 2022 00:00:00 GMT-0500 (EST)'), end: new Date('Thu Jan 1 2022 00:00:00 GMT-0500 (EST)'), });
  const handleMonthChange = useCallback((month, year) => setDate({ month, year }), [],);

  return (
    <AppProvider i18n={enTranslations}>
      <Page title="Spacestagram" primaryAction={{ content: 'Liked Photos', icon: HeartMajor, onclick: () => { setViewLiked(!viewLiked) } }} >
        <Button onClick={() => { setViewLiked(!viewLiked); }} />

        <DisplayText size="small"> Pick a date </DisplayText>

        <Card sectioned>
          <DatePicker month={month} year={year} onChange={(date) => { setSelectedDates(date); }} onMonthChange={handleMonthChange} selected={selectedDates} />
        </Card>

        <DisplayText size="small"> Result </DisplayText>

        <Container dates={selectedDates} viewLiked={viewLiked} />
      </Page>
    </AppProvider >
  );
}

export default App;
