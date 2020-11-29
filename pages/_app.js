import { createGlobalStyle } from "styled-components";

import React from "react";

const GlobalStyle = createGlobalStyle`
 @import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&family=Source+Serif+Pro:ital,wght@0,400;0,600;1,400&display=swap");

body {
	font-family: "Source Serif Pro", serif;
	margin: 0;
	font-weight: 300;
}

html {
	font-size: 16px;
}

`;

function MyApp({ Component, pageProps }) {
	return (
		<React.Fragment>
			<GlobalStyle />
			<Component {...pageProps} />
		</React.Fragment>
	);
}

export default MyApp;
