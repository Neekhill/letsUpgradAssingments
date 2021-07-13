
import './App.css';
import Button from './Button';

function App() {
  return (
    <div style={{ backgroundColor: "#ccb7d8", height: 500, textAlign: "center", display: "flex", justifyContent: "center" }}>
      <div style={{ marginTop: 95 }}>
        <h1 style={{ fontSize: 70, lineHeight: 0, color: "#785290" }}>Hello! <span style={{ color: "#61019d" }}>Lets Upgrad</span></h1>
        <h3 style={{ fontSize: 30, color: "#785290" }}>Really excited to learn from you guys.</h3>
        <div style={{ marginTop: 80 }}>
          <Button buttonName="botton 1" />
          <Button buttonName="botton 2" />
          <Button buttonName="botton 3" />
        </div>
      </div>

    </div>
  );
}

export default App;
