import React from 'react';
import  ReactDom from 'react-dom';


var App = React.createClass({
  getInitialState :function() {
    return {

      color:'blue',
      greeting:'helloworld'
    };
},

handleButtonClick:function() {
  this.setState(function(prevState) {
    return {

      color:(prevState.color === 'blue' ? 'green' :'blue')
    };
  });

},
render: function(){

  return (
     <div>
    <div style ={{color:this.state.color}}>
        <h1> {this.state.greeting}</h1>
    </div>
    <button onClick = {this.handleButtonClick}>click me</button>
    </div>
  );
}

}
);

ReactDom.render(
  <App />,

   document.getElementById('root')
);
