let popoverShow = false;

const popover = () => {
  const popoverBlock = document.getElementById('popover_block');

  if (popoverShow) {
    popoverBlock.style.display = 'none';
    popoverBlock.classList.add('close');
    if (popoverBlock.classList.contains('open')) {
      popoverBlock.classList.remove('open');
    }
    popoverShow = false;
  } else {
    popoverBlock.style.display = 'block';
    popoverBlock.classList.add('open');
    if (popoverBlock.classList.contains('close')) {
      popoverBlock.classList.remove('close');
    }
    popoverShow = true;
  }
};

document.getElementById('btn').onclick = popover;
