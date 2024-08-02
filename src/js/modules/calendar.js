export default function () {
  const table = document.querySelector('.calendar__table-days');

  if (!table) return;

  const tdElements = table.querySelectorAll('td');

  tdElements.forEach(item => {
    item.addEventListener("click", function () {

      const currentTdElemens = table.querySelectorAll('td');
      currentTdElemens.forEach(elem => {
        elem.classList.remove('active');
      })

      this.classList.add('active');
    })
  })

}
