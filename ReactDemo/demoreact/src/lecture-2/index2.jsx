class Counter extends Component{
    constructor(props) {
        super(props)

        this.state = {
            count : 0
        };

        this.updateCounter = this.updateCounter.bind(this);
        this.resetCounter = this.resetCounter.bind(this);
    }


    updateCounter()  {
        this.setState({
            count: this.state.count + 1
        }, () => {
            const updatedCount = this.state.count;
            window.localStorage.setItem('count', `${updatedCount}`);
        });      
    };

    resetCounter() {
        this.setState({
            count: 0
        })
    }

    render() {
        const {count} = this.state;
       

        return (
            <div> 
                <span>
                    {count}
                </span>
                <br/>
                <button onClick={this.updateCounter}>+</button>
                <button onClick={this.resetCounter}>Reset</button>
            </div>
        );
    }
}