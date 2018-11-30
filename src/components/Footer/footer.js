import React from 'react';

class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div>
            <div class='ui inverted vertical footer segment'>
                <div class='ui center aligned container'>
                    <div class='ui stackable inverted divided grid'>
                        <div class='ten wide column'>
                            <h4 class='ui inverted header'></h4>
                            <p>You can get in touch with D Sen if you have any interesting ideas on how to make the world a better place! </p>
                        </div>
                        <div class='six wide column'>
                            <h4 class='ui inverted header'>Contact</h4>
                            <div class='ui inverted link list'>
                                <a href='www.linkedin.com/in/dsenwan' class="item">Linkedin</a>
                                <a href='www.google.com' class="item">Email</a>
                                <a href='#' class="item">Press and Media</a>
                            </div>
                        </div>

                    </div>
                    <div class='ui inverted section divider'></div>
                    <div class='ui horizontal inverted small divided link list'>
                        <a href='#' class="item">Site Map</a>
                        <a href='#' class="item">Contact Us</a>
                        <a href='#' class="item">Terms and Condition</a>
                        <a href='#' class="item">Privacy Policy</a>
                    </div>

                </div>
            </div>
        </div>
    );
  }
}

export default Footer;