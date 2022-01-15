
import './App.css';
import React, { useCallback, useState } from 'react';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider, Page, DatePicker, Card } from '@shopify/polaris';
import { HeartMajor, ArrowLeftMinor } from '@shopify/polaris-icons';
import Container from './components/container';

function App() {
  const [viewLiked, setViewLiked] = useState(false);
  const [{ month, year }, setDate] = useState({ month: 0, year: 2022 });
  const [selectedDates, setSelectedDates] = useState({ start: new Date('Thu Jan 1 2022 00:00:00 GMT-0500 (EST)'), end: new Date('Thu Jan 1 2022 00:00:00 GMT-0500 (EST)'), });
  const handleMonthChange = useCallback((month, year) => setDate({ month, year }), [],);

  return (
    <AppProvider i18n={enTranslations}>
      <Page title="Spacestagram" primaryAction={{
        content: viewLiked ? 'Back to home' : 'View liked photos',
        icon: viewLiked ? ArrowLeftMinor : HeartMajor,
        primary: !viewLiked,
        onAction: () => { setViewLiked(!viewLiked) }
      }} >
        {
          viewLiked ?
            <div /> :
            <Card sectioned>
              <DatePicker month={month} year={year} onChange={(date) => { setSelectedDates(date); }} onMonthChange={handleMonthChange} selected={selectedDates} />
            </Card>
        }

        <Container dates={selectedDates} viewLiked={viewLiked} />
      </Page>
    </AppProvider >
  );
}

export default App;
