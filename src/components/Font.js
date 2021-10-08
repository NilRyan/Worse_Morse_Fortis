import { Global } from "@emotion/react"

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Heading Font Name';
        src: url('./Comic_Neue/ComicNeue-Regular.ttf') format('truetype');
      }
      `}
  />
)

export default Fonts