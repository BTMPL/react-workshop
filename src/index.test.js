import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

jest.mock('./api/tweeter');
const mockApi = require('./api/tweeter').default;

/**
 * Z uwagi na sposób w jaki powstaje nasza aplikacja - linijka render() jest wywoływana
 * także w testach i aplikacja próbuje się wyrenderować. W normalnych aplikacjach, 
 * podzielonych na pliki taka sytuacja nie miała by miejsca, ale na potrzeby testu
 * musimy niestety utworzyć ten element DOM
 */
const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

const App = require("./index.js").default;
const Tweet = require("./components/Tweet").Tweet;
const UserDetails = require("./components/Tweet").UserDetails;
const TweetForm = require("./components/TweetForm").default;
const Next = require('./components/Next').default;

const tweetsReducer = require('./reducers/tweetsReducer').default;
const actions = require('./constants/tweetConstants');

const date = new Date().toString()
const tweet = {
  user: {
    userName: 'test.userName',
    userAvatar: 'test.userAvatar',
  },
  date: date,
  text: 'test.text'
};

const emptyFunction = () => {};

describe("<App />", () => {
  it("jest klasą", () => {
    expect(App.toString().indexOf('class App extends') > -1).toEqual(true);
  });


  it("po zamontowaniu próbuje pobrać dane", () => {
    const wrapper = mount(<App dispatch={emptyFunction} />);    
    expect(mockApi.get).toBeCalled();
  });   

  it("po wywołaniu handleSubmit próbuje przesłać Tweet do serwera", (done) => {
    const markAsDone = () => {
      done();
    }
    const wrapper = mount(<App dispatch={markAsDone} />);
    wrapper.instance().handleSubmit("test");  
    
  });  
  
  it("renderuje komponent <Next />", (done) => {
    const wrapper = mount(<App count={999} dispatch={emptyFunction} />);    
    setTimeout(() => {
      wrapper.update();
      if(wrapper.find(Next).length > 0) done();
      else done.fail();
    });
  })
})

describe("<UserDetails />", () => {
  it("renderuje <img /> oraz <b> ", () => {
    const wrapper = mount(<UserDetails />);
    expect(wrapper.find('img').length).toEqual(1)
    expect(wrapper.find('b').length).toEqual(1)
  }); 
  
  it("akceptuje userName i userAvatar", () => {
    const userName = "test.username";
    const userAvatar = "test.useravatar";

    const wrapper = mount(<UserDetails userName={userName} userAvatar={userAvatar} />);
    expect(wrapper.html().indexOf(userName) > -1).toEqual(true);
    expect(wrapper.html().indexOf(userAvatar) > -1).toEqual(true);
  }); 

  it("definiuje propTypes i defaultProps", () => {
    expect(UserDetails.propTypes.userName).toBeDefined();
    expect(UserDetails.propTypes.userAvatar).toBeDefined();

    expect(UserDetails.defaultProps.userName).toBeDefined();
  });  
})

describe("<Tweet />", () => {

  it("renderuje <UserDetails> oraz <time>", () => {
    const wrapper = mount(<Tweet tweet={tweet} />);
    expect(wrapper.find(UserDetails).length).toEqual(1)
    expect(wrapper.find('time').length).toEqual(1)
  });


  it("akceptuje prop 'tweet'", () => {
    const wrapper = mount(<Tweet tweet={tweet} />);
    expect(wrapper.html().indexOf(tweet.user.userName) > -1).toEqual(true);
    expect(wrapper.html().indexOf(tweet.user.userAvatar) > -1).toEqual(true);
    expect(wrapper.html().indexOf(tweet.text) > -1).toEqual(true);
  });
  
  it("definiuje propTypes dla propy 'tweet'", () => {
    expect(Tweet.propTypes.tweet).toBeDefined();
  });

})

describe("<TweetForm />", () => {
  it("zawiera pole tekstowe i guzik", () => {
    const wrapper = mount(<TweetForm />);
    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
  });

  it("obsługuje klikanie w guzik", () => {
    const wrapper = mount(<TweetForm />);
    expect(wrapper.find('button').props().onClick).toBeDefined();
  });

  it("obsługuje zmianę tekstu w polu", () => {
    const wrapper = mount(<TweetForm />);
    wrapper.find('textarea').simulate('change', {
      target: {
        value: 'test'
      }
    });
    expect(wrapper.state().text).toEqual('test');
  });

  it("czyści pole po kliknięciu guzika", () => {
    const wrapper = mount(<TweetForm />);
    wrapper.find('textarea').simulate('change', {
      target: {
        value: 'test'
      }
    });
    expect(wrapper.state().text).toEqual('test');
    wrapper.find('button').simulate('click');
    expect(wrapper.state().text).not.toEqual('test');
  });

  it("akceptuje props onSubmit i wywołuje go z treścią formularza", (done) => {
    const checkDone = (value) => {
      expect(value).toEqual('test');
      done();
    }
    const wrapper = mount(<TweetForm onSubmit={checkDone} />);
    wrapper.find('textarea').simulate('change', {
      target: {
        value: 'test'
      }
    });
    expect(wrapper.state().text).toEqual('test');
    wrapper.find('button').simulate('click');
  });  
})

describe("<Next />", () => {
  it("wywołuje `onNext` po kliknięciu w button", (done) => {
    const checkDone = () => done();
    const wrapper = mount(<Next onNext={checkDone} />)
    wrapper.find('button').simulate('click');
  });
})

describe("tweetsReducer", () => {
  it("zwraca domyślny stan", () => {
    const state = {test: 42};
    expect(tweetsReducer(state, {})).toEqual(state);
  });

  it("obsługuje akcję TWEETS_ADED", () => {
    const state = {
      items: [],
      count: 0
    };
    const payload = {
      items: [1,2,3,4,5],
      count: 5
    }
    const result = tweetsReducer(state, {
      type: actions.TWEETS_ADDED,
      payload
    });

    expect(result.count).toEqual(payload.count);
  });


})