const tiles = document.querySelectorAll('.tile');

tiles.forEach(tile => {
  tile.addEventListener('click', (e)=> {
    e.stopPropagation();
    if( tile.classList.contains('tile--disabled')) {
        return false;
    }
    const thisInput = tile.querySelector('.custom-check');

    if( thisInput.type === 'radio') {
      if ( !thisInput.checked) {
        thisInput.checked = true
        for (let i = 0; i < tiles.length; i++) {
          tiles[i].classList.remove('tile--selected');
        }
        tile.classList.add('tile--selected');
      }
    } else {
      thisInput.checked = !thisInput.checked;
      tile.classList.toggle('tile--selected');
    }
  });
});