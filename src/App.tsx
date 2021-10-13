import styled from "@emotion/styled"

const AppContainer = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  flex: 1;
`

export const App = () => (
  <AppContainer>
    <h1>Hello CodeSandbox</h1>
    <h2>Start editing to see some magic happen!</h2>
  </AppContainer>
)
