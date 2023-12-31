/*
Colors used:

Text color (Darkest Blue): #00171F
Primary color (Navy Blue): #003459
Secondary color (Teal): #007EA7
Active link color (Bright Blue): #00A8E8
Background color (White): #ffffff
*/

:root {
    --fontblack: rgba(0, 0, 0, 0.3);
    --fontwhite: rgb(255, 255, 255);
    --backgroundwhite: rgb(255, 255, 255);
    --lightgrey:   rgb(211, 211, 211); 
    --primarynavy:  rgb(0, 52, 89);
    --secondaryteal: rgb(0, 126, 167); 
    --accentblue: rgb(0, 168, 232); 
  
    --boldfont: 700; 
    --mediumboldfont: 600; 
    --regularfont: 400; 
    --lightfont: 300;
    --headerlarge: 30px; 
    --headermedium: 24px; 
    --bodyfontregular: 18px; 
    --bodyfontsmall: 16px; 
  
    --paddingdefault: 20px; 
  }
  
  
  
  /*body styling*/
  body {
      background-color: var(--backgroundwhite);
      font-family: 'Lato', sans-serif;
      font-weight: var(--regularfont);
  }
  
  h1 {
      font-size: var(--headerlarge);
      font-weight: var(--boldfont);
  }
  
  h2 {
      font-size: var(--headermedium);
      font-weight: var(--mediumboldfont);
  }
  
  h3 {
      font-size: var(--bodyfontregular);
      font-weight: var(--regularfont);
  }
  
  
  /*Grid*/
  .grid {
      display: grid;
    }
  .grid__item {
      background-color: var(--lightgrey);
    }
  .grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: var(--paddingdefault);
    }
  
  
  /*link button styling*/
  a {
      color:var(--primarynavy)
  }
  
  a:visited {
      color:var(--primarynavy)
  }
  a:hover, a:focus {
      text-decoration: none;
  }
  
  a:active {
      color:var(--primarynavy)
  }
  
  button {
      border: none;
      font-family: inherit;
      background-color: var(--primarynavy);
      color: var(--fontwhite);
      text-decoration: none;
      padding: 10px;
      border-radius: 3px;
      border-bottom: 2px solid var(--fontblack);
  }
  
  button:hover, button:focus {
      cursor: pointer;
      opacity: 0.8;
  }
  
  .button__secondary {
      background-color: var(--accentblue);
      color: var(--fontwhite);
  }
  
  .button__secondary:hover, .button__secondary:focus {
      cursor: pointer;
      opacity: 0.8;
  }
  
  .navigation-list__item--active {
    text-decoration: none;
  }
  
  .button, button {
    /* overwrites browser defaults */
    /* resets the border */
    border: none;
    display: inline-block;
    /* takes the font from the outer container */
    font-family: inherit;
    /* style button */
    background-color: var(--primarynavy);
    color: var(--fontwhite);
    text-decoration: none;
    padding: 10px;
    border-radius: 3px;
    /* width of the border, type, color */
    border-bottom: 2px solid var(--fontblack);
    transition: opacity 0.2s;
  }
  
  button:hover,
  button:focus,
  .button:hover,
  .button:focus {
    /* lets the mouse appear as a hand when hovering over the button */
    cursor: pointer;
    /* reduces the opacity of the button to 80% */
    opacity: 0.8;
  }
  
  
  /*profile styling*/
  .profile__portrait {
      float: left;
      width: 250px;
      margin-right: 40px;
      border-radius: 50%;
    }
  
  .profile {
      max-width: 700px;
      margin: 0 auto;
    }
  
    .page-header {
      display: flex;
      width: 100%;
      padding: 20px;
    }
  
    .page-header__item {
      flex: 0 1 200px;
    }
  
    .page-header__item:last-child {
      flex-grow: 1;
      text-align: right;
    }
  
    .page-main {
      clear: both;
      display: flex; 
      flex-direction: column;
      text-align: center;
    }
  
  .page-footer {
      clear: both;
      display: flex; 
      flex-direction: column;
      text-align: center;
    }
  
    .navigation-list {
      list-style-type: none;
    }
    .navigation-list li {
      display: inline-block;
      margin-left: 15px;
    }
  
  * {
      box-sizing: border-box; 
  }
  
  ul {
    list-style-type: none;
  }
  
  /*responsive grid*/
  @media all and (max-width: 500px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
  @media all and (min-width: 500px) and (max-width: 750px){
    .grid {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media all and (max-width: 750px) {
    .grid {
      grid-gap: 10px;
    }
    .grid__item:last-child {
      grid-column: auto / auto;
      grid-row: auto / auto;
    }
    h1 {
      font-size: var(head);
    }
  }
  
  /*Animation*/
  .sun {
      animation: 4s color-change infinite alternate linear;
    }
    @keyframes color-change {
      0% {
        fill: #edc655;
      }
      50% {
        fill: #fcffad;
      }
      100% {
        fill: #f76414;
      }
    }
  
  .cloud-front {
      animation: 30s cloud-move infinite alternate linear;
    }
    @keyframes cloud-move {
      from {
        transform: translate(0, 50px);
      }
      to {
        transform: translate(200px, 50px);
      }
    }
  
  .cloud-back {
      animation: 34s cloud-move-reverse infinite alternate linear;
    }
    @keyframes cloud-move-reverse {
      from {
        transform: translate(446px, 48px);
      }
      to {
        transform: translate(100px, 48px);
      }
    }
  