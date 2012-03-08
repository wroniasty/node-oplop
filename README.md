# Oplop
      
  Oplop is actually an acronym for "One Password [equals] Lots Of Passwords".
  Look at the project website: http://code.google.com/p/oplop/ to learn more.

  I needed an npm package, so I copy & pasted one of the available browser based implementations.

## Installation

    $ npm install oplop

## Usage

    '''javascript
    var uniquePassword = require('oplop') (nickname, masterPassword)
    '''

## Author
  
  The code was actually taken from a web implementation by Joshua Dick <http://joshdick.net>, which
  was taken from the official Oplop implementation at <http://oplop.appspot.com>.

  The only difference is that this module is using the native Node.JS md5 implementation. 