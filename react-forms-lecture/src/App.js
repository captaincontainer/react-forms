import './App.css';
import Form from './components/Form'
import ManagedForm from './components/ManagedForm'
import MultiForm from './components/MultiForm'

function App() {
  return (
    <div className="App">
      <h1>Umanaged Form</h1>
      <Form />
      <h1>Managed Form</h1>
      <ManagedForm />
      <h1>Multi Form</h1>
      <MultiForm />
    </div>
  );
}

export default App;
