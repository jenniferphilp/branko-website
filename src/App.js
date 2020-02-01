import React from 'react'
import { Flex, Box, Text } from 'rebass'
import styled, { ThemeProvider } from 'styled-components'
import { customTheme } from './theme'

const StyledHeaderButton = styled.button`
  color: #ffffff;
  background-color: #156BDF;
  border: none;
  margin: 0.25em;
  border-radius: 1px;
  height: 20px;
`;

const StyledButton = styled.button`
  background-color: ${customTheme.colors.blue};
  border: 1px solid black;
  border-radius: 40px;
  margin: 12px;
  padding: 12px;
` 
const WildButton = styled.div`
  background-image: url('star.png');
  background-size: 110px;
  height: 110px;
  width: 110px;
  background-repeat: no-repeat;
`

const StyledButtonText = styled.p`
  position: relative;
  top: -80px; 
  right: -15px;
  font-size: 12px;
  font-weight: bold; 
`

const App = () => {

 return(

<ThemeProvider theme={customTheme} >
  <Flex flexDirection={[ 'column', 'row']} justifyContent={'space-between'}>
    <Flex flexDirection={ "column" } width={[ 1, 0.5 ]}>
      <p>Welcome to ... </p>
      <Box fontSize={[ 0, 1, 2 ]}>
        <h1 style={{ fontFamily: 'Bubble', color: '#0B961E'}}>Brankozakic.com!</h1>
      </Box>
    </Flex>
    <Flex flexDirection={[ 'row', 'column' ]} mt={ 2 }>
      <Flex justifyContent={ 'center' }>
        <StyledHeaderButton>IMAGES</StyledHeaderButton>
        <StyledHeaderButton>PICTURES</StyledHeaderButton>
      </Flex>
      <Flex>
        <StyledHeaderButton><Text>COMICS</Text></StyledHeaderButton>
        <StyledHeaderButton>BOOKS</StyledHeaderButton>
        <StyledHeaderButton>STORIES</StyledHeaderButton>
      </Flex>
    </Flex>
  </Flex>
  <Flex flexDirection={ 'column'}>
    <input type='text' placeholder='search' style={{ width: '75px' }}/>
    <Box alignSelf='center'>
      <h2 style={{ textDecoration: 'underline'}}>What do you want to order?</h2>
    </Box>
    <Flex alignSelf='center' justifyContent='space-around' width={[ 1, 0.5 ]} style={{ border: '1px solid black', backgroundColor: `${customTheme.colors.blue}`, textAlign: 'center', borderRadius: '20px'}}>
      <StyledButton>ABOUT</StyledButton>
      <StyledButton>COOL THINGS</StyledButton>
    </Flex>
    <Flex flexDirection={'column'}>
      <h2 style={{ textDecoration: 'underline'}}>Can't find anything?</h2>
      <WildButton />
      <StyledButtonText style={{ }}>Talk to Branko!</StyledButtonText>
    </Flex>
  </Flex>
</ThemeProvider>
 )}


//#156BDF - button colour
// uppercase button labels
// buttons in row on mobile (get breakpoints)


export default App;