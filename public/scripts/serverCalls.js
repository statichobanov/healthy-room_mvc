function get(url) {
    return $.ajax({
      url,
      method: 'GET',
      data: {},
    });
}

function postJson(url, data) {
    return $.ajax({
        url,
        method: 'POST',
        data: data,
    });
}

function postForm(url, formselector) {
    return $.ajax({
        url,
        method: 'POST',
        data: $(formselector).serialize()
    });
}

$('.about-us').on('click', (e) => {
    e.preventDefault();

    get('/aboutus')
    .done((response) => {
        $('.main-wrapper').html(response);
    })
    .fail((error) => {

    });
});

$('.partnership').on('click', (e) => {
    e.preventDefault();

    get('/partnership')
    .done((response) => {
        $('.main-wrapper').html(response);
    })
    .fail((error) => {
        console.log(error);
    });
});

$('#join-us-form').on('submit', (e) => {
  e.preventDefault()

  postForm('/joinus', '#join-us-form')
  .done((response) => {
    console.log(response);
  })
  .fail((error) => {
      console.log(error);
  })
});

$('.products').on('click', (e) => {
    e.preventDefault();

    get('/products')
    .done((response) => {
        $('.main-wrapper').html(response);
    })
    .fail((error) => {
        console.log(error);
    });
});
