javascript:(function(){
  const myUser = 'unnyu01';
  const myPass = 'tetsu330101';

  const u = document.querySelector('input[name="username"], #username');
  const p = document.querySelector('input[name="password"], #password');

  if(u) u.value = myUser;
  if(p) p.value = myPass;

  setTimeout(() => {
    const btn = document.querySelector('.btn.btn-primary, .btn.btn_primary, button[type="submit"]');
    if(btn) {
      btn.click();
    } else {
      console.log('ボタンが見つかりませんでした');
    }
  }, 200);
})();
