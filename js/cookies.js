window.addEventListener('DOMContentLoaded', () => {

  const cookieStorage = {
      getItem: (key) => {
          cookies = document.cookie
                          .split(';')
                          .map(cookie => cookie.split('='))
                          .reduce((acc, [key, value]) => ({...acc,
                                                          [key.trim()] : value}), {});
          return cookies[key];
      },
      setItem: (key, value) => {
          document.cookie = `${key}=${value};expires=Sun, 16 Jul 3567 06:23:41 GMT`;
      }
  };
 
  const storageType = cookieStorage;
  const consentPropertyType = 'site_consent';

  const shouldShowPopup = () => !storageType.getItem(consentPropertyType);
  const saveToStorage = () => storageType.setItem(consentPropertyType, true);

  const popup = document.querySelector(".cookies"),
        btn = document.querySelector(".cookies_accept");

  if (shouldShowPopup()) {
      popup.classList.add("opened");
  }

  btn.addEventListener('click', () => {
      saveToStorage();
      popup.classList.remove("opened");
  });

  function myScripts() {
      console.log('Loading...');
  }
});