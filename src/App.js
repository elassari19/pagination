import { Link, HashRouter as Router , Switch, Route} from 'react-router-dom';
import Post from './pages/Post';
import Home from './pages/Home';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Link to='/'>Home</Link>
          <Link to='/post'>Posts</Link>
        </Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path={['/:id']} component={Post} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  background: #3f3f3f;
  font-size: 1.2rem;
  padding: .5rem;
  a{
  color: white;
  text-decoration: none;
  }
`