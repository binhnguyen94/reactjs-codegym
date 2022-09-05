import logo from './logo.svg';
import './App.css';
import ProfileCard from './component/profileCard';
import SignForm from './component/signForm';
import StudentList from './component/studentList';
import Welcome from './component/Welcome';
import AppComponent from './component/AppComponent';
import FunctionComponent from './component/FunctionComponent';
import Alert from './component/Alert';
import StudentInfoComponent from './component/StudentInfoComponent';

function App() {
  return (
    <div className="App">
      {/* <ProfileCard /> */}
      {/* <SignForm /> */}
      {/* <StudentList /> */}
      {/* <Welcome name="Admin"/> */}
      {/* <AppComponent num1={3} num2={5}/> */}
      {/* <FunctionComponent num1={10} num2={15} />  */}
      {/* <Alert text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." /> */}
      <StudentInfoComponent />
    </div>
  );
}

export default App;
