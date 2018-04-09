import React from 'react';



import ReactDOM from 'react-dom';

let visibility =false;

const onClickShow = () => {
  visibility = !visibility;
  renderText() ;

}

const renderText = () => {
  const tamplateTwo = (
    <div>
  
    <h1>Visibility Toggle</h1>
    <button onClick={onClickShow}>
    {visibility ? 'hide details' :'Show details'}</button>
    {visibility && ( <div> <p>hey,heres some details</p></div>

    ) }
    
    </div>
  
  )
  ReactDOM.render(tamplateTwo ,pos);


}


  



const onFormSubmit = (e) => {

e.preventDefault();

const option =e.target.elements.option.value;
if (option) {
    app.options.push(option);
    e.target.elements.option.value='';
    optionRender();
}

}
const onRemoveAll = () => {
  app.options = [];
  optionRender();
};

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
  };
  const pos =document.getElementById('root');

  const optionRender = () =>{
    const template = (
        <div>
          <h1>{app.title}</h1>
          {app.subtitle && <p>{app.subtitle}</p>}
          <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
          <p>{app.options.length}</p>
          <button onClick={onRemoveAll}>Remove all</button>
          {<ol>
            {
              app.options.map((option) => <li key={option}>{option}</li>)
            }
          </ol>
        
        }

          <ol>
            <li>Item one</li>
            <li>Item two</li>
          </ol>
    
        <form onSubmit ={onFormSubmit}>
        <input type ='text' name ="option"/>
        <button>Add option</button>
        
        </form>
        </div>
      );
     
    
  };
  
  optionRender();
  renderText();
