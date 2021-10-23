import React, { useState, useEffect} from 'react'
import fashion from '../images/fashion.jpg'
import '../css/Home.css';
import card1 from '../images/card1.jpg';
import card2 from '../images/card2.jpg';
import card3 from '../images/card3.jpg';
import fashion_shop from '../images/fashion_shop.jpg'
import { Carousel, Container } from 'react-bootstrap'; 
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import {Button,Row,Col,Card,CardTitle,CardText,Input} from 'reactstrap';
export default function Home(props) {
    let text='Web designers generally have nothing to do with creating content for their projects. Even so, the look of a site can be incomplete if no words are included. Web designers need to find ways to incorporate copyright-free content into their designs to provide clients with a look that is as finished as possible.';
    const [learnMore, setLearnMore] = useState('');
    const [clear, setClear] = useState()
    const toggleLearnMore=()=>{
        let val = clear;
        if (val == text){
            setClear('')
        }
        else{
            setClear(text)
        }
        // setLearnMore(val)

    }
    // const toggleClear=()=>{
    //     setLearnMore('kjJHKJkj')

    // }
    //On first render + whenever dependency changes! - ComponentDidUpdate Alternative 
    {/* 
        const [name,setName] = useState("");
     useEffect(() => {
         console.log('The name is changed : ${name}'); 
         return()=>{
             //cleanup....
            console.log("We unmounted!");

         }  
     }, [name]);
    */}
     return (
        <div>
           
            <Row>
                <Col sm="6">
                    <div className="main_block">
                        
                        <div>
                            <img src={card1} alt="" className="fashion_img"/>

                        </div>
                        
                    </div>
                </Col>
                <Col sm="6">
                    <div className="main_block" style={{width: '500px',height: '300px',backgroundColor: 'black',padding: '20px'}}>
                        
                        <div className="quotes" >
                            <h4 style={{color: 'white',marginTop: '20%',border: '5px solid white'}}>‘Whoever said that money can’t buy happiness, simply didn’t know where to go shopping.’ </h4>
                        </div>
                        
                    </div>
                </Col>
            </Row>
            <div className="card_block">
            <Row>
                <Col sm="6">
                    <div className="camera">
                        <CameraEnhanceIcon style={{width: '200px',color: 'brown'}}/>
                        <div className="box1">
                            <div className="box2">
                            <p style={{color: 'black',fontWeight: '700',padding: '10px',marginLeft: '20px'}}>Welcome</p>
                            </div>
                        </div>
                        <h4>Not sure which path to take</h4>
                        <h1>Find your fit</h1>
                        </div>
                </Col>
                <Col sm="6" >
                    <Card body style={{backgroundColor: '#EAB4C1 '}}>
                    <CardTitle tag="h5" style={{color: 'white'}}>Our Blog</CardTitle>
                    <CardText style={{fontWeight: '500'}}>Everyday we work hard to make life of our clients better abd happier</CardText>
                    <Button  variant="contained" style={{backgroundColor: '#F3637C',border: 'none'}}  onClick={toggleLearnMore}  >Learn More</Button>

                    <p style={{textAlign: 'justify',marginTop: '20px'}}>{clear}</p>
                   
                    </Card>
                </Col>
            </Row>
            
        </div>
        {/* <Row>
            <Input value={name} onChange={(e)=>setName(e.target.value)}
                     placeholder="Enter your name"/>
        </Row> */}
    </div>
    )
    }
