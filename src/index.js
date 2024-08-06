/* eslint-disable no-undef */
// import './css/main.css'

const sups = "sup";

class Setter extends React.Component {
  render() {
    return (
      <span>biba</span>);
    }
  }
class Header extends React.Component {
  render() {
    return (
      <><Setter />
      <button>{sups}</button></>
    );
  }
}

const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(<Header />)
