$(document).ready(() => {
  let query = '';
  let stateCode = '';

  $(document).on('click', '#searchBtn, .dropdown-item', (e) => {
    e.preventDefault();
    console.log('clicked');
    query = $('#search').val();
    if ($(this).hasClass('dropdown-item')) {
      console.log('has class');
      stateCode = $(this).text();
    }
    console.log('stateCode ', stateCode);
    console.log('query', query);
    if (query !== '' && stateCode !== '') {
      $.get('/search', { query, stateCode }, (res) => {
        console.log(res);
      });
    }
  });
});
