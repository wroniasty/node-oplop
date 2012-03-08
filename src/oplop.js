/**
 * Copy&Pasted from code created by Joshua Dick <http://joshdick.net>. 
 * Based on code from the official Oplop implementation at <http://oplop.appspot.com>
 */
var oplop = {};

function urlsafeB64(b64data) {
	  return b64data.replace(/\+/g, '-').replace(/\//g, '_');
}

/**                                                                                                    
Create an account password.                                                                          
                                                                                                     
  @param {!string} nickname Nickname.                                                                
  @param {!string} master Master password.                                                           
  @return {!string} Account password.                                                                
*/
oplop.create = function create(nickname, master) {
  var length = 8;

  if (nickname.length === 0 || master.length === 0) 
	  return '';
  
  var md5 = require('crypto').createHash ('md5');
  md5.update (master + nickname, "utf8");
  
  //var created_password = md5.urlsafe_base64(utf8_master + utf8_nickname);
  var created_password = urlsafeB64(md5.digest("base64")); //utf8_master + utf8_nickname);

  var digit_regex = /\d+/;
  var digit_pos = created_password.search(digit_regex);

  if (digit_pos < 0) {  // No digit found.                                                           
      created_password = '1' + created_password;
     }
  
  else if (digit_pos >= length) {  // Digit outside of final password.                               
      var digit = created_password.match(digit_regex);
      created_password = digit + created_password;
  }

  return created_password.substring(0, length);
};


module.exports = oplop.create;
