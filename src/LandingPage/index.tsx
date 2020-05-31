import * as React from 'react';
import useClient from 'cruceumClient';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import ROUTES from 'routes';

const TurneyEntry = Styled.div`
  border: solid black 1px;
  padding: 1em;
  margin: 2em 1em;
`;

interface ILanddingPage {
  data: any;
}

const TournamentList: React.FC<ILanddingPage> = ({ data }) => {
  if (typeof data !== 'object') {
    return <h2>Error</h2>
  }

  return (
    <div>
      {Object.entries(data).map(([key, tourney]: [string, any]) => (
        tourney.active ? (
          <Link to={`${ROUTES.tournament}/${key}`} key={tourney.name}>
            <TurneyEntry>
              <div>{tourney.name}</div>
              <div>Entries: {tourney.entrys.length}</div>
            </TurneyEntry>
          </Link>
        ) :
        (
          <TurneyEntry key={tourney.name}>
            <div>{tourney.name}</div>
            <div>Entries: {tourney.entrys.length}</div>
          </TurneyEntry>
        )
      ))}
    </div>
  )
};

const LandingPage: React.FC = () => {
  const [data, { isLoading }] = useClient.getTournamentList();

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  
  return (
    <div>
      <h1>Open Tournaments</h1>
      <TournamentList data={data || []} />
    </div>
  );
}

export default LandingPage;
