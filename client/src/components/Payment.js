import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {HTMLLinkElement} from 'react-html-attributes'

export default class Payment extends Component {
  componentDidMount() {
    const script = document.createElement("script");

        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;

        document.body.appendChild(script);

  }
  render() {
    return (
      <div>

        <div class="calendly-inline-widget" data-url="https://calendly.com/drmarable" style={{height: '100vh'}}></div>
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
      </div>
    )
  }
}

