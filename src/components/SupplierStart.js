import React from 'react';
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Jumbotron from "react-bootstrap/Jumbotron";
import Tabs from "react-bootstrap/Tabs";


const SupplierStart = () => {
  return (
    <div>
      <div className="panel">
        <div className="start_container0">
            <h3>Dear donor</h3>
            <p>
              We are in an exceptional situation and grateful that you are willing to donate medical supply.
              We accept donations from health organizations or registered companies providing medical supplies, including emergency manufactured supplies.
              </p>
              <p>
              Mind our <a href="#validation">information</a> regarding emergency manufactured supplies.<br/>
            </p>
            <div className="start_container1">
              <h3>I can donate...</h3>
              </div>
            <div className="start_container2">
               <CardDeck>
                <Card className="productcard" >
                  <Card.Img style={{backgroundImage:"url('/masks.png')"}}></Card.Img>
                  <Card.Title>Masks</Card.Title>
               </Card>
                <Card className="productcard">
                  <Card.Img style={{backgroundImage:"url('/disinfectant.png')"}}></Card.Img>
                  <Card.Title>Disinfectant</Card.Title>
               </Card>
                <Card className="productcard">
                  <Card.Img style={{backgroundImage:"url('/gloves.png')"}}></Card.Img>
                  <Card.Title>Gloves</Card.Title>
               </Card>
                <Card className="productcard">
                  <Card.Img style={{backgroundImage:"url('/suits.png')"}}></Card.Img>
                  <Card.Title>Specialists</Card.Title>
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
                      <Button className="float-right" href="/supplierregistration">Donate</Button>
                    </div>
                    </form>
             </div>
           <Jumbotron>
            <h3 ><a name="validation"></a>Important information about validation and certification of supplies</h3>
            <p>
              For some medical (emergency) supplies there are emergency validation information and recommendations by WHO and the federal government on their production.
              Dont hesitate to contact us, if you have questions regarding the certification process: <a href="mailto:info@pandalogica.ch(FAKE)">info@pandalogica</a>.
              Find more information below:
            </p>
              <ul>
                  <li><a href="https://www.swissmedic.ch/swissmedic/de/home/news/coronavirus-covid-19.html">Swissmedic: general information on COVID-19</a></li>
                  <li><a href="https://www.swissmedic.ch/swissmedic/en/home/medical-devices/market-surveillance-of-medical-devices/announcements-on-market-control-issues/inverkehrbringung_lebenswichtiger_beatmungsgeraete.html">Swissmedic: Respirators</a></li>
              </ul>
          </Jumbotron>
         </div>
      </div>
    </div>
)}

export default SupplierStart
