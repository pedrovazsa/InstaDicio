
chrome.browserAction.onClicked.addListener(function(tab) {

  chrome.tabs.query({active:true, windowId: chrome.windows.WINDOW_ID_CURRENT}, 
  function(tab) {
    chrome.tabs.sendMessage(tab[0].id, {method: "getSelection"}, 
    function(response){

      console.log(response);
      console.log(unescape(response.data));
      //response.data = unescape(decodeURIComponent(response.data));
      console.log(response);
      //normalized = removeDiacritics(response.data);
      //console.log(normalized);
      //response.data = normalized;
      var hasNumber = /\d/;
      if (hasNumber.test(response.data)){
        alert('Números não permitidos.');
        return
      }
      if (response.data.length == 0){
        //alert('Selecione uma palavra para usar o Dicio.com.br');
        
      }
      
      else{
        // response.data = response.data.replace(/\s+/g, ''); — This would remove spaces, but it doesn't seem to be needed when using a GET request.
        var newURL = "http://www.dicio.com.br/pesquisa.php?q=" + response.data;
        chrome.tabs.create({ url: newURL });
        }
      return;
    });
  });


  // var newURL = "http://www.dicio.com.br/" + word_lookup;
  // //var newWord = window.getSelection().toString();
  // //alert(newWord);
  // chrome.tabs.create({ url: newURL });
});

