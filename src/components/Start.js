import React from 'react';
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import ButtonB from "react-bootstrap/Button";

const Start = () => {
  return (
    <div>
      <div className="panel">
        <div className="start_container0">
            <img class="float-right" src="/PandaLogicaLogo.png" width="300"></img>
            <h1>Welcome to PandaLogica</h1>
            <div className="start_container1">The medical material and staff matching platform in time of pandemic crisis.</div>
            <div className="start_container2" style={{clear:"both"}}>
               <CardDeck>
                  <a href="/healthprofessionalstart">
                    <Card className="startcard">
                        <Card.Img style={{backgroundImage:"url('/SearchingResources.svg')"}}></Card.Img>
                        <Card.Title >I search medical supply or staff</Card.Title>
                  </Card>
                  </a>
                  <a href="/supplierstart">
                  <Card className="startcard" >
                      <Card.Img style={{backgroundImage:"url('/ProvidingResources.svg')"}}></Card.Img>
                      <Card.Title>I can provide medical supply or staff</Card.Title>
                  </Card>
                  </a>
               </CardDeck>
            </div>
         </div>
      </div>
    </div>
)}

export default Start
