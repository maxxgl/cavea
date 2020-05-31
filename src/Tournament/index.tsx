import * as React from 'react';
import useClient from 'cruceumClient';
import Styled from 'styled-components';
import { useParams } from 'react-router-dom';

const Grid = Styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;

  &> div:nth-child(even) {
    justify-self: end;
  }
`;

const Entry = Styled.div`
  border: solid black 1px;
  padding: 1em;
  display: flex;
  flex-direction: column;
  width: min-content;

  & > span {
    font-size: 1.25em;
  }

  & > img {
    height: 3em;
  }
`;

const LandingPage: React.FC = () => {
  let { id } = useParams();
  const [data, { isLoading }] = useClient.getTournament(id);

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (!data || typeof data !== 'object') {
    return <h2>Error</h2>
  }
  
  return (
    <div>
      <h1>Tournament: {data.name}</h1>
      <h2>Entries</h2>
      <Grid>
        {data.entrys.map((e: any) => (
          <Entry key={e.title}>
            <img src={e.content} alt={`${e.title} thumbnail`}/>
            <span>{e.title}</span>
          </Entry>
        ))}
      </Grid>
    </div>
  );
}

export default LandingPage;
