const menubtn = document.getElementById('menu-button');
      const menu = document.getElementById('menu');
      menubtn.addEventListener('click', () => {
          menu.classList.toggle('hidden');
      })
