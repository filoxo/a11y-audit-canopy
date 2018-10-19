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
  },
  'blockquote': {
    fontStyle: 'italic'
  },
  css: {
    'pre code': {
      whiteSpace: 'pre-wrap !important',
    }, 
    'li ul, li ol': {
      fontSize: '1em',
    },
    'li > p': {
      fontSize: '1em',
      margin: 0
    }
  }
})

export default customTheme
