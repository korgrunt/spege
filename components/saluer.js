
  function saluer()//gestion de la boite de dialogue
    {
    if (!localStorage['compte'])//le compte n'existe pas (première utilisation ou réinstallation)
      {
      localStorage['compte']=1;
      alert('Zozor te salue pour la première fois !');
      }
    else //le compte existe
      {
      localStorage['compte']=parseInt(localStorage['compte'])+1;//on transforme la chaine de caractère en int, on incrémente, puis on stocke le nouveau nombre
      alert('Zozor te salue une '+localStorage['compte']+'eme fois !');
      }
    }
    saluer();
