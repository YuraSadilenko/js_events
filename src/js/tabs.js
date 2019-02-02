var tab;
var tabContent;

window.onload = function() {
  tab = document.getElementsByClassName('tabs__btn');
  tabContent = document.getElementsByClassName('tabs__content');
  hideTabContent(1);
}

function hideTabContent(a) {
  for (var i = a; i < tabContent.length; i++) {
    tabContent[i].classList.remove('show');
    tabContent[i].classList.add('hide');
    tab[i].classList.remove('activeTab');
  }
}

document.getElementById('tabs').onclick = function(event) {
  var target = event.target;
  if (target.className == 'tabs__btn') {
    for (var j = 0; j < tab.length; j++) {
      if(target == tab[j]){
        showTabContent(j);
        break;
      }
    }
  }
}

function showTabContent(b) {
  if (tabContent[b].classList.contains('hide')) {
    hideTabContent(0);
    tab[b].classList.add('activeTab');
    tabContent[b].classList.remove('hide');
    tabContent[b].classList.add('show');
  }
}

