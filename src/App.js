import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, { useCallback, useState } from 'react';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider, Page, DatePicker, Card } from '@shopify/polaris';
import { HeartMajor, SearchMinor } from '@shopify/polaris-icons';
import { apiKey } from "./api/config";
import Container from './components/container';

function like() {

}

function unlike() {

}

function showResults(photos) {
  let images = photos;

  if (photos.length > 0) {
    images = photos.map(photo => {
      // console.log(photo);
      let id = photo.id;
      let rover = photo.rover.name;
      let camera = photo.camera.full_name;
      let url = photo.img_src;
      let a = document.createElement("Image");
      a.setAttribute("src", url);
      a.setAttribute("key", id);
      a.setAttribute("height", 100);
      a.setAttribute("width", 100);
      console.log(a);
      document.getElementById("show_result").appendChild(a);
    });
  }
}

function App() {
  // Page
  const secondaryActions = [{ content: 'Liked Photos', icon: HeartMajor }];

  // Search Textfield
  const [value, setValue] = useState('');
  const handleChange = useCallback(newValue => setValue(newValue), []);

  // DatePicker
  const [{ month, year }, setDate] = useState({ month: 0, year: 2022 });
  const [selectedDates, setSelectedDates] = useState({ start: new Date('Thu Jan 13 2022 00:00:00 GMT-0500 (EST)'), end: new Date('Thu Jan 13 2022 00:00:00 GMT-0500 (EST)'), });
  const handleMonthChange = useCallback((month, year) => setDate({ month, year }), [],);

  return (
    <AppProvider i18n={enTranslations}>
      <Page title="Spacestagram" secondaryActions={secondaryActions}>
        {/* Search for photos */}
        {/* <TextField value={value} onChange={handleChange} autoComplete="off" inputMode="search" type='search' prefix={<Icon source={SearchMinor} color="base" placeholder="Search" />} /> */}

        Select date
        <Card sectioned>
          <DatePicker month={month} year={year} onChange={setSelectedDates} onMonthChange={handleMonthChange} selected={selectedDates} />
        </Card>

        Results
        <Container />

      </Page>
    </AppProvider>
  );
}

export default App;
