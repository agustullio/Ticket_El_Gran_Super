var myHeaders = new Headers();
var testImp = document.getElementById('test');
var agr = document.getElementById('btnIn');
var ip = document.getElementById('printIP').valueOf();
var clear = document.getElementById('clearbt');
var IPprinter = '';
var dEntry = [];
myHeaders.append("Content-Type", "text/plain",'Access-Control-Allow-Origin','*');

var params = [];
let raw = "^XA^PW400^LL200^FO20,20^A0N,30,30^FDThis is a TEST^FS^XZ";
var requestOptions = {
  method: 'POST',
  mode: 'no-cors',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

/*agr.onclick = function(){
  IPprinter = 'http://' + ip + '/pstprnt';
  let DataIn = document.getElementById('InField').value;
  dEntry = DataIn.split(';');
  
  return false;
}*/

agr.onclick = function(){
  let DataIn = document.getElementById('InField').value;
  dEntry = DataIn.split(';');
  let cant = dEntry.length;
  let tik = cant/6;
  let prob = tik/2;
  let des = Number.isInteger(prob);
  /*if(des){
    var j = 0;
  }
  else{
    var j = 6;
  }*/
  var j = 0;
  for(i = 0; i < cant; ++i){
    if(j < 12){
      params[j] = dEntry[i];
      ++j;
    }
    else{
      requestOptions.body = '^XA^FS~JS^LT0^MNW^MTT^PON^PMN^LH0,0^JMA^PR6,6^JUS^LRN^CI27^PA0,1,1,0^MMT^PW831^LL583^LS0^FO527,92^GFA,1813,9600,24,:Z64:eJztWUGO5CoMZVAtIlZzBMSqxSmy6IOhWaGcIsoKccpvm5CkqjGGr7/50nha1VXVnpeH/WxMotSnpR/fFFvbX+vM+DNmcmj/4fXf4KscmT+s7a89w4fF5wLEmJ/0zym0/7A2v3V5KkBbnvI33h/j3guAT6xWH0f2+4BjwdwQ3Azga0+vzll4tbL/gpIE6iicEXyViTsiWy35m5wD4Pu8JbUkE6r8X4zePfgDf+eAubZaeYkLRAUwc9QA/sD/XlfOf4egHzuCW71L8kd8CAoEJ21hWW7+jD/wV8YqiL3TCq4g8V9A74gPP4FWMJLgg/CBvoUVyP4GKEVF9L+GEuxAPUheqS/9NeCPCQhmjyEtgSvfN/wAC9BI38G1ZPPI3kQD9APb3574GB1MsJIFhLaVBP9JSxzC17YmQO9ul/0h+pgAtRglJ1h7S9onfPiREgAK3VKAQkxhCSig0IfPULoYnRIgK20wUMA5bNFETICKi+Y2sIu+g6Ri8ykVNlDBKcScduhzaX9UMGuoGOxt2OKgT4wk4DSzbdtUi65tdMJiCFP+f+2v/Y9Nl3YTw6C/O3Z8HS4q7D5qiWDwYdmogDsdgroPth/8VRqEc50OZKgdJDBcwZIyWQf/AP4F1l74HX8cf6DtxLIA2F7gPXsEAPPeleic/OmnM6N4aJ4LsFcFH2aJHHr47jhKS9OFvwV8gX8EykEN8sf4U+xxfrv4s+6U3wz0AT8Qf1BSDx8WUPaWUQXBAraNFNQBfbuAO/eWMXelQkHGF8iEoJ93O/VzjPrDKgT9N/G7S6H4V33Kw5s+TsxTP5K/gfDHeOtf8q/oWquhJNz0h/CR/uOTyN+8jQsyvpscF/x4Mgt+OXcNm8kj8+xtWlDLD/+3+Cul6m/ObvlY/OikgOWnfiABsAF05zdd5aPvT8IF0qV/FamA+1UAogFTyF+XzWb4FsFCF5mp3/t1xLDJBf4W0w/DSR16aaf/YPuMz/rdYhe/dhztSv3aupXx+Ok9/qkbH9h/H/3nPGd04m8+9AMf4JX3r/xdDf1AOUPXD1X3Ac8xghHmRJ8wJfTDdVxUWeIvzT9oyH8h/rHoXzrhPfo/bV/C/mUe+ikDXN9f3fGng153fkCLJKDyPqX+/HBdwNI73AHk/XdZTsng/hsnWvZQ/B/XGYr/bTS/lYmasXf94/7VD/+H/kUz+S7gIcZX+Y7dnUT8uoCRItBlfj7rS4ubGc3nV/3iJN2/gkaxX/hKGq4KPjad5TrAdO8/6Dr71ykUvvB2lD8OcAPnlyc+XrHf/4F/rPzFGyg3f13whe3XVLIFP+JtaJ4NmH2i6clxC/pPF/zTBoogPP4Bvoh4XBuYHWGA+ocC2Or+Vazj79/qq7SfzvmR8BOVMB7C5PNvvhZQ8Y/eExVz049VPtJEqm99KnwjtU+DAxvxJ4Li/b03fHl6gxNMPDdhesQjsHeYgWtwEMfpEnAM/17gQ597zjX+J/xx9P4P9WfMwLYpaj9Cfk329q5aTerp6weHZVxAKPRFfFt4sx4f/lOnl39hYc596Hnd03/y6aeec0cLcxc4Jh5oqqLPGfjs/MwBEme1VsG+1ra/BzITN/wp/q0nLuzjO8A2dhwfsZsH0rXtj89LZ/hjy5/xxgYx5c+V69p+fgr93+V9HB7j08wv44/x7807P/y5/K68/0wNc/pU321/PVkvbPw7D7Bn4Dnx8I+v29X7i/Vv3y55fbf5U3x2Bqxp7B2s9hIm9c+hv77Xpr/nyP/+PYUPF2jjzNbvPUF/WnMFbPwZ/pTfxgogv4z/3PbyD0NElro=:DED8^FT796,24^A0R,20,20^FH\^CI28^FDNro de^FS^CI27^FT771,24^A0R,20,20^FH\^CI28^FDPedido^FS^CI27^FT517,24^A0R,28,20^FB40,1,7,R^FH\^CI28^FDDNI:^FS^CI27^FT638,24^A0R,28,20^FB36,1,7,R^FH\^CI28^FDTEL:^FS^CI27^FT577,24^A0R,28,20^FB40,1,7,R^FH\^CI28^FDDIR:^FS^CI27^FT457,24^A0R,28,20^FB54,1,7,R^FH\^CI28^FDDPTO:^FS^CI27^FO93,92^GFA,1813,9600,24,:Z64:eJztWUGO5CoMZVAtIlZzBMSqxSmy6IOhWaGcIsoKccpvm5CkqjGGr7/50nha1VXVnpeH/WxMotSnpR/fFFvbX+vM+DNmcmj/4fXf4KscmT+s7a89w4fF5wLEmJ/0zym0/7A2v3V5KkBbnvI33h/j3guAT6xWH0f2+4BjwdwQ3Azga0+vzll4tbL/gpIE6iicEXyViTsiWy35m5wD4Pu8JbUkE6r8X4zePfgDf+eAubZaeYkLRAUwc9QA/sD/XlfOf4egHzuCW71L8kd8CAoEJ21hWW7+jD/wV8YqiL3TCq4g8V9A74gPP4FWMJLgg/CBvoUVyP4GKEVF9L+GEuxAPUheqS/9NeCPCQhmjyEtgSvfN/wAC9BI38G1ZPPI3kQD9APb3574GB1MsJIFhLaVBP9JSxzC17YmQO9ul/0h+pgAtRglJ1h7S9onfPiREgAK3VKAQkxhCSig0IfPULoYnRIgK20wUMA5bNFETICKi+Y2sIu+g6Ri8ykVNlDBKcScduhzaX9UMGuoGOxt2OKgT4wk4DSzbdtUi65tdMJiCFP+f+2v/Y9Nl3YTw6C/O3Z8HS4q7D5qiWDwYdmogDsdgroPth/8VRqEc50OZKgdJDBcwZIyWQf/AP4F1l74HX8cf6DtxLIA2F7gPXsEAPPeleic/OmnM6N4aJ4LsFcFH2aJHHr47jhKS9OFvwV8gX8EykEN8sf4U+xxfrv4s+6U3wz0AT8Qf1BSDx8WUPaWUQXBAraNFNQBfbuAO/eWMXelQkHGF8iEoJ93O/VzjPrDKgT9N/G7S6H4V33Kw5s+TsxTP5K/gfDHeOtf8q/oWquhJNz0h/CR/uOTyN+8jQsyvpscF/x4Mgt+OXcNm8kj8+xtWlDLD/+3+Cul6m/ObvlY/OikgOWnfiABsAF05zdd5aPvT8IF0qV/FamA+1UAogFTyF+XzWb4FsFCF5mp3/t1xLDJBf4W0w/DSR16aaf/YPuMz/rdYhe/dhztSv3aupXx+Ok9/qkbH9h/H/3nPGd04m8+9AMf4JX3r/xdDf1AOUPXD1X3Ac8xghHmRJ8wJfTDdVxUWeIvzT9oyH8h/rHoXzrhPfo/bV/C/mUe+ikDXN9f3fGng153fkCLJKDyPqX+/HBdwNI73AHk/XdZTsng/hsnWvZQ/B/XGYr/bTS/lYmasXf94/7VD/+H/kUz+S7gIcZX+Y7dnUT8uoCRItBlfj7rS4ubGc3nV/3iJN2/gkaxX/hKGq4KPjad5TrAdO8/6Dr71ykUvvB2lD8OcAPnlyc+XrHf/4F/rPzFGyg3f13whe3XVLIFP+JtaJ4NmH2i6clxC/pPF/zTBoogPP4Bvoh4XBuYHWGA+ocC2Or+Vazj79/qq7SfzvmR8BOVMB7C5PNvvhZQ8Y/eExVz049VPtJEqm99KnwjtU+DAxvxJ4Li/b03fHl6gxNMPDdhesQjsHeYgWtwEMfpEnAM/17gQ597zjX+J/xx9P4P9WfMwLYpaj9Cfk329q5aTerp6weHZVxAKPRFfFt4sx4f/lOnl39hYc596Hnd03/y6aeec0cLcxc4Jh5oqqLPGfjs/MwBEme1VsG+1ra/BzITN/wp/q0nLuzjO8A2dhwfsZsH0rXtj89LZ/hjy5/xxgYx5c+V69p+fgr93+V9HB7j08wv44/x7807P/y5/K68/0wNc/pU321/PVkvbPw7D7Bn4Dnx8I+v29X7i/Vv3y55fbf5U3x2Bqxp7B2s9hIm9c+hv77Xpr/nyP/+PYUPF2jjzNbvPUF/WnMFbPwZ/pTfxgogv4z/3PbyD0NElro=:DED8^FT362,24^A0R,20,20^FH\^CI28^FDNro de^FS^CI27^FT337,24^A0R,20,20^FH\^CI28^FDPedido^FS^CI27^FT83,24^A0R,28,20^FB40,1,7,R^FH\^CI28^FDDNI:^FS^CI27^FT204,24^A0R,28,20^FB36,1,7,R^FH\^CI28^FDTEL:^FS^CI27^FT144,24^A0R,28,20^FB40,1,7,R^FH\^CI28^FDDIR:^FS^CI27^FT23,24^A0R,28,20^FB54,1,7,R^FH\^CI28^FDDPTO:^FS^CI27^FT774,101^A0R,44,43^FH\^CI28^FN1"PedidoID1"^FD' + params[0] + '^FS^CI27^FT697,24^A0R,51,51^FH\^CI28^FN2"Nombre1"^FD' + params[1] + '^FS^CI27^FT517,83^A0R,28,28^FH\^CI28^FN3"DNI1"^FD' + params[4] + '^FS^CI27^FT636,83^A0R,34,33^FH\^CI28^FN4"Telefono1"^FD'+ params[2] + '^FS^CI27^FT455,83^A0R,34,33^FH\^CI28^FN5"Dpto1"^FD' + params[5] + '^FS^CI27^FT577,83^A0R,28,28^FH\^CI28^FN6"Direccion1"^FD' + params[3] + '^FS^CI27^FT341,101^A0R,44,43^FH\^CI28^FN7"PedidoID2"^FD' + params[6] + '^FS^CI27^FT263,24^A0R,51,51^FH\^CI28^FN8"Nombre2"^FD' + params[7] + '^FS^CI27^FT83,83^A0R,28,28^FH\^CI28^FN9"DNI2"^FD' + params[10] + '^FS^CI27^FT202,83^A0R,34,33^FH\^CI28^FN10"Telefono2"^FD' + params[8] + '^FS^CI27^FT21,83^A0R,34,33^FH\^CI28^FN11"Dpto2"^FD' + params [11] + '^FS^CI27^FT144,83^A0R,28,28^FH\^CI28^FN12"Direccion2"^FD' + params[9] + '^FS^CI27^XZ';
      imprimir('http://192.168.3.190/pstprnt',requestOptions);
      j = 0;
      params[j] = dEntry[i];
      ++j;
    }    
  }
  return false;
}

function imprimir(IPp, RO){
  fetch(IPp, RO)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  return false;     
}

testImp.onclick = function(){
  let basura = 'Prueba';
  requestOptions.body = "^XA^PW400^LL200^FO20,20^A0N,30,30^FDThis is a TEST "+basura+"^FS^XZ"
  fetch('http://192.168.3.190/pstprnt', requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      
  return false; 
}
clear.onclick = function(){
  document.getElementById('InField').value = '';
  return false;
}
