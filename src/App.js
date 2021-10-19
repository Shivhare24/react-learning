import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentComponent from './components/FragmentComponent';
import PureComp from './components/PureComp';
import MemoComponent from './components/MemoComponent';
import RefDemo from './components/RefDemo';
import PortalDemo from './components/PortalDemo';
import ErroDemo from './components/ErroDemo';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter  from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import Counter from './components/Counter';
import ComponentA from './components/ComponentA';
import { UserProvider } from './components/UserContext';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import { ShareButton } from './components/ShareButton';

function App() {
  return (
    <div className="App">
      {/* <Form /> */}
      {/* <LifeCycleA /> */}
      {/* <FragmentComponent /> */}
      {/* <PureComp />
      <MemoComponent />
      <RefDemo /> */}
      {/* <PortalDemo /> */}
      {/* <ErrorBoundary>
        <ErroDemo name='superman'/>
        <ErroDemo name='Joker' />
      </ErrorBoundary> */}
      {/* <ClickCounter />
      <HoverCounter /> */}
      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn)=>isLoggedIn?'shubham':'Guest'}/> */}
      {/* <Counter 
      render={(count, incrementCount)=> <ClickCounterTwo count={count} incrementCount={incrementCount}></ClickCounterTwo>} 
      />
      <Counter 
      render={(count, incrementCount)=> <HoverCounterTwo count={count} incrementCount={incrementCount}></HoverCounterTwo>} 
      /> */}
      {/* <Counter> 
      {(count, incrementCount)=> (<ClickCounterTwo count={count} incrementCount={incrementCount}></ClickCounterTwo>)} 
      </Counter> */}
      {/* <UserProvider value='Shubham'>
      <ComponentA />
      </UserProvider> */}
      {/* <PostList /> */}
      {/* <PostForm /> */}
      <ShareButton />
    </div>
  );
}

export default App;
