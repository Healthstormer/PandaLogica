import React from 'react';
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { Form } from 'react-bootstrap';
import $ from "jquery";

const HealthProfessionalStart = () => {
  return (
    <div>
      <div className="panel">
        <div className="start_container0">
            <div className="start_container1">I need ...</div>
            <div className="start_container2">
               <CardDeck>
                <Card className="productcard" >
               <label title="check">
                  <Card.Img style={{backgroundImage:"url('/masks.png')"}}></Card.Img>
                  <Card.Title><input type="checkbox"/>Masks</Card.Title>
               </label>
               </Card>
                <Card className="productcard">
               <label title="check">
                  <Card.Img style={{backgroundImage:"url('/disinfectant.png')"}}></Card.Img>
                  <Card.Title><input type="checkbox"/>Disinfectant</Card.Title>
               </label>
               </Card>
                <Card className="productcard">
               <label title="check">
                  <Card.Img style={{backgroundImage:"url('/gloves.png')"}}></Card.Img>
                  <Card.Title><input type="checkbox"/>Gloves</Card.Title>
               </label>
               </Card>
                <Card className="productcard" >
               <label title="check">
                  <Card.Img style={{backgroundImage:"url('/nurse.png')"}}></Card.Img>
                  <Card.Title><input type="checkbox"/>Specialists</Card.Title>
               </label>
               </Card>
               </CardDeck>
            </div>
            <div class="input-group mb-3">
            <form class="form-inline">
                    <div class="form-group mb-2">
                      ... I am located in
                    </div>
                    <div class="form-group mx-sm-3 mb-2">
                      <input type="text" class="form-control" placeholder="Zip code / City"/>
                    </div>
                    <div class="form-group mx-sm-3 mb-2">
                      <Button className="float-right" href="/register">Search</Button>
                    </div>
                    </form>
             </div>
         </div>
      </div>
    </div>
)}

export default HealthProfessionalStart
