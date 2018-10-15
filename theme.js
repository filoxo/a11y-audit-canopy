import theme from 'mdx-deck/themes'
import syntaxHighlighting from 'react-syntax-highlighter/styles/prism/ghcolors'
import merge from 'lodash.merge'

const customTheme = merge({...theme}, {
  font: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  // custom colors
  colors: {
    text: '#333',
  }, 
  prism: {
    style: syntaxHighlighting,
  }
})

export default customTheme
