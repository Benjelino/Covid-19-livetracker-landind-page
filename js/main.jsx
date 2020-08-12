const data = [  {id: 1, text: "emma"},
{id: 2, text: "Ben"},
{id: 3, text: "yaw"}
];


function App(props){

    return(
        <div className="container">
            <ul>
                <li>{props.text} <button onClick={onDelete}>delete</button></li>
            </ul>
        </div>
    );
    
}

function onDelete(e){
    e.currentTarget.parentNode.remove();
}

let applist = data.map(i=> <App key={i.id}  text={i.text}/>);

function addItem(){
    let mInput = document.getElementById("mInput").value;
    console.log(mInput);
    let id = data.length + 1;
    data.push({id: id, text: mInput});
    let applist = data.map(i=> <App key={i.id}  text={i.text}/>);
    ReactDOM.render(
    <React.StrictMode>
    {applist}
    </React.StrictMode>, document.getElementById("root"));
};

ReactDOM.render(
<React.StrictMode>
{applist}
</React.StrictMode>, document.getElementById("root"));
