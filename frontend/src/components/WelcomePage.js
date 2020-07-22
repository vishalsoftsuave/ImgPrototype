import React, {Component, Fragment} from 'react';
import PinchZoomPan from "react-responsive-pinch-zoom-pan";

class WelcomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 561,
            height: 500,
            top:133,
            left:391,
            originalTop:133,
            originalLeft:391,
        }
        this.myRef = React.createRef();
        this.myRefZoom = React.createRef();


    }

    render() {
        return (
            <Fragment>
                <div>
                   {/* <div style={{
                        marginLeft: '400px',
                        marginTop: '130px',
                        width: '561px',
                        height: '500px',
                        overflow:'hidden'
                    }}>
                        <div onWheel={this.onMouseWheel}
                             draggable="true"
                             style={{
                            width: this.state.width+'px',
                            height: this.state.height+'px'
                        }}>
                           <img src={'https://live.staticflickr.com/4561/38054606355_26429c884f_b.jpg'} style={{width:'100%'}}/>
                        </div>
                    </div>*/}
                    <div style={{position:'absolute', fontSize: '25px', zIndex:'1', top:this.state.top+'px', left:this.state.left+'px', color:'red'}}>.</div>
                    <div onWheel={this.onMouseWheel} style={{ width: '500px', height: '500px' }}>
                        <PinchZoomPan ref={this.myRefZoom} initialScale={1}>
                            <img ref={this.myRef} alt='Test Image' src='https://live.staticflickr.com/4561/38054606355_26429c884f_b.jpg' />
                        </PinchZoomPan>
                    </div>
                </div>
            </Fragment>
        );
    }

    onMouseWheel = (event) => {
        setTimeout(()=>{
/*
            let width = this.myRef.current.width
            console.log(this.myRef.current.style.transform)
*/
            let left=(this.myRefZoom.current.state.left +this.state.originalLeft)*((this.myRefZoom.current.state.scale))
            let top=(this.myRefZoom.current.state.top +this.state.originalTop)*((this.myRefZoom.current.state.scale))
            this.setState({left:left,top:top})
            console.log(this.myRefZoom.current.state.left)
            console.log(this.myRefZoom.current.state.top)


        },500)

    }
}

export default WelcomePage;