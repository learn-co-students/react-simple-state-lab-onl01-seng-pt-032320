export default class Cell extends React.Component {
 
    // we use the constructor to set the INITIAL STATE
    constructor() {
      super()
      this.state = {
        value: color 
      }
    }

    // handleKeyPress = (event) => {
        // console.log("I am here", event.key)
        // console.log(event)
        // if (event.key === "a") {
        // return resize("+") 
        //   }
    //   }

    

    render() {
        return (
            <div className= "cell"
            // onClick={this.handleKeyPress}
            // style={{backgroundcolor: '#333'}}
            >

            </div>
        )
    }
    
}
