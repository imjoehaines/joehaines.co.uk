export default `
  :root {
    font-family: "-apple-system", BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 18px;
    text-decoration-skip: ink;
  }

  html {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 100vh;
  }

  body {
    margin: 0 auto;
    max-width: 35vw;
  }

  @media (max-width: 1000px) {
    body {
      max-width: 40vw;
    }
  }

  @media (max-width: 800px) {
    body {
      max-width: 45vw;
    }
  }

  @media (max-width: 700px) {
    body {
      max-width: 50vw;
    }
  }

  @media (max-width: 650px) {
    body {
      max-width: 60vw;
    }
  }

  @media (max-width: 500px) {
    body {
      max-width: 80vw;
    }
  }

  @media (max-width: 400px) {
    body {
      max-width: 90vw;
    }
  }
`
