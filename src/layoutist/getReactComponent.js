import React from 'react'
import Navbar from '../layoutist/NavBar'
import {
 Link
} from "react-router-dom";

const HtmlToReact = require('html-to-react');
const HtmlToReactParser = require('html-to-react').Parser;

function getReactComponent(content, path){
    /* eslint-disable global-require */
    const htmlInput = require(`../layoutist/${path}.html`); // needs the html-loader
    const htmlToReactParser = new HtmlToReactParser();

    const isValidNode = () => {
      return true;
    };

    const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);

    // Order matters. Instructions are processed in
    // the order they're defined
    const processingInstructions = [
      {
        // This is REQUIRED, it tells the parser
        // that we want to insert our React
        // component as a child
        replaceChildren: true,
        shouldProcessNode: (node) => {
          //node.attribs['data-component']; -> how to set in grapejs?? 
          return node.tagName == "a" || (node.attribs && (node.attribs['id']));
        },
        processNode: (node, children, index) => {
          //console.log(node);
          if(node.attribs['id'] && node.attribs['id'] === 'navbar'){
            return <Navbar />;
          }

          if(node.tagName == "a"){
            console.log(node);
            return <Link to={`${node.attribs['href']}`}>{node.children[0].data}</Link>;
          }
          
          /*if(node.attribs['class'] === 'body'){
            return content;
          }*/
          
        }
      },
      {
        // Anything else
        shouldProcessNode: (node) => {
          return true;
        },
        processNode: processNodeDefinitions.processDefaultNode,
      },
    ];

    const reactComponent = htmlToReactParser.parseWithInstructions(
      htmlInput, isValidNode, processingInstructions);

    return reactComponent;
}

export default getReactComponent;