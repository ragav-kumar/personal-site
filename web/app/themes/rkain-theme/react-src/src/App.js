import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';

import PageWrap from './PageWrap'

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
	}
	body {
		height: 100vh;
		width: 100vw;
		position: relative;
	}
`


const Sidebar = styled.div``
const Mugshot = styled.div``
const MenuArea = styled.div``
const ContentArea = styled.div``

function App() {
	return (
		<React.Fragment>
			<GlobalStyle />
			<PageWrap>
				<Sidebar>
					<Mugshot>TODO</Mugshot>
					<MenuArea>TODO</MenuArea>
				</Sidebar>
				<ContentArea>
					TODO
				</ContentArea>
			</PageWrap>
		</React.Fragment>
	);
}

export default App;
