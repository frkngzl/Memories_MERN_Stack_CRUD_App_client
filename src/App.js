import React, { useEffect, useState } from 'react';

import { Container, AppBar, Typography, Grow, Grid} from '@mui/material';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import memories from './images/memories.png';
import "./styles.css";

const App = () => {
  const dispatch = useDispatch();
  const [currentId, setcurrentId] = useState(null);

  useEffect(() => {
      dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxwidth="lg">
      <AppBar className='core__appBar' position="static" color="inherit">
        <Typography className='logo__heading' variant="h2" align="center">Memories</Typography>
        <img className='logo__image' src={memories} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid className='mainContainer' container justifyContent="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                  <Posts setCurrentId={setcurrentId}/>
              </Grid>
              <Grid item xs={12} sm={4}>
                  <Form currentId={currentId} setCurrentId={setcurrentId}/>
              </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App;