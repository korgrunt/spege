/*bouton dans la pop up de l'extenssion "visiter notre site, "*/
$('#click').click(function(){
  chrome.tabs.create({url:'https://www.monsite.com'})
})
