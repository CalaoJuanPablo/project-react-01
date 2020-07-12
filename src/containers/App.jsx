import React, { useState, useEffect } from 'react';
import '../styles/components/App.scss';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData';

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const personData = await getData('http://localhost:3000/data');
        setData(personData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className='App'>
      <Header
        name={data.name}
        avatar={data.avatar}
      >
        <About
          profession={data.profession}
          address={data.address}
          email={data.email}
          website={data.website}
          phone={data.phone}
        />
      </Header>
      <Profile profile={data.Profile} />
      <Experience experienceItems={data.experience} />
      <Academic academic={data.Academic} />
      <Skills skills={data.skills} />
      <Interest interest={data.interest} />
      <Languages languages={data.languages} />
    </div>
  );
};

export default App;
