import React from 'react';

class Home extends React.Component {
  render() {
    return <div>
      <div className='home-ad'>
        <img 
          src="https://tpc.googlesyndication.com/simgad/6733309159117902287" 
          border="0" 
          width="1200" 
          height="125" 
          alt="" 
        />
      </div>

      <div className='main-content'>
        <div className='home-top'>
          <h1>June Store Update - Treebeard is Back!</h1>
        </div>

        <div className='home-hot'>
          <h1>THE HOTNESS</h1>
        </div>

        <div className='home-ad'>
          <img 
            src="https://tpc.googlesyndication.com/simgad/3509397579391731738" 
            border="0" 
            width="1200" 
            height="125" 
          />
        </div>

        <div className='home-crowdfund'>
          <h1>CROWDFUNDING COUNTDOWN</h1>
        </div>
      </div>
    </div>
  }
}

export default Home;