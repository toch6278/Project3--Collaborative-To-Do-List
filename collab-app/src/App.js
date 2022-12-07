import logo from './logo.svg';
import './App.css';
import TasksList from './TasksList.js'
import Checkbox from './Checkbox';
import InputTask from './InputTask';

// Sources: 
// create task logo: https://www.bing.com/images/search?view=detailV2&ccid=ZECsoNpg&id=31BEA60C34FAB8772253EB6E3CD615420CFA877D&thid=OIP.ZECsoNpgZsuUXwXPchgurwHaHa&mediaurl=https%3a%2f%2fcdn1.iconfinder.com%2fdata%2ficons%2fweb-ui-2%2f16%2fUI_Icons_Outline-05-512.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.6440aca0da6066cb945f05cf72182eaf%3frik%3dfYf6DEIV1jxu6w%26pid%3dImgRaw%26r%3d0&exph=512&expw=512&q=create+icon&simid=607987174299625030&FORM=IRPRST&ck=D711A8BD03EDDB02CFF45301F2E430B9&selectedIndex=0&ajaxhist=0&ajaxserp=0
// add logo: https://www.google.com/search?q=addition+png&rlz=1C1UEAD_enUS990US990&oq=addition+png&aqs=chrome..69i57j0i22i30l9.2712j0j7&sourceid=chrome&ie=UTF-8#imgrc=kjJJbhTuGzzVjM

function App() {
  return (
    <div className="App">
      <header className="App-module">
        <div className = "tasks">
          <button className = "row1">
            <div className = "empty"/>
            <div className = "addTask">
              <img className = "create-flex1" src = "../addLogo.png"/>
              <p className = "create-flex2">New Task</p>
              {/* <InputTask/> */}
            </div>
          </button>
          <div className ="input-field">
            <input className = "input" onfocus = "this.value=''" value = "+ New Task"/>
            <button className = "create"> Submit </button>
          </div>
          <h2> Tasks </h2>
          <TasksList/>
          <h3> Due Date </h3>
          <Checkbox/>
        </div>
      </header>
    </div>
  );
}

export default App;
