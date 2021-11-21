import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'

import CommentDetail from './components/CommentDetail'
import ApprovalCard from './components/ApprovalCard'

const App = () => {
    return (
        <div className='ui container comments'>
            <ApprovalCard> 
              <div>
                <h4>Warning message!</h4>
                Are you sure you want to do this?
              </div>
            </ApprovalCard>

            <ApprovalCard>
              {/* Nesting Component */}
              <CommentDetail 
               author='Sam' 
               time='Yesterday at 6:30' 
               text='Nice!'
               avatar={faker.image.avatar()}
             />
           </ApprovalCard>
           <ApprovalCard>
              <CommentDetail 
                author='Bob' 
                time='Today at 7:44' 
                text='Perfect!'
                avatar={faker.image.avatar()}
             />
           </ApprovalCard>
           <ApprovalCard>
             <CommentDetail 
               author='Matt' 
               time='Today at 8:50' 
               text='Amaizing!'
               avatar={faker.image.avatar()}
            />
           </ApprovalCard>
        </div>
    )
}

ReactDOM.render (
    <App />,
    document.querySelector('#root')
)