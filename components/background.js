/* tout les 10 seconde, quelque soi la page visité, lance une pop up a cliquer contenant le msg*/
function features_01(){
  setInterval(function () {alert('Page d\'arrière plan en marche');},10000);
}

function faireJoujou(fenetre)
	{
    /*
	  setInterval(function () {alert(fenetre);},10000);
*/
  }
/*
  chrome.tabs.getSelected(null,function(tab) { // null defaults to current window
    var title = tab.title;
    faireJoujou(title);
  });
*/



  var myVar;

  function myFunction() {
      setInterval(alertFunc, 3000);
  }

  function alertFunc() {
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        console.log(tabs[0].url);
    });
  }

  myFunction();
