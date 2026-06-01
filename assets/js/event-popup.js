(function(){
  // Session-scoped dismissal; reappears next browser session.
  var el=document.getElementById('event-popup');
  if(!el)return;
  if(sessionStorage.getItem('eventPopupDismissed')){el.remove();return;}
  document.getElementById('event-popup-close').addEventListener('click',function(){
    sessionStorage.setItem('eventPopupDismissed','1');
    el.remove();
  });
})();
