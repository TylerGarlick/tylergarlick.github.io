import styled from "@emotion/styled"

const AppContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const App = () => (
  <AppContainer>
    <h1>Hello, World</h1>
    <p>This is a test</p>
    <h2>Start editing to see some magic happen!</h2>
  </AppContainer>
)
