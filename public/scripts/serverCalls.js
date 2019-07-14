$(document).on('click', '.about-us, .partnership, .products', (e) => {
    e.preventDefault();
    const url =  $(e.target).attr('href');

    get(url)
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

/**
 * 
 * @param {String} url server url
 */
function get(url) {
    return $.ajax({
      url,
      method: 'GET',
      data: {},
    });
}

/**
 * 
 * @param {String} url server url
 * @param {Object} data data to be send to server
 */
function postJson(url, data) {
    return $.ajax({
        url,
        method: 'POST',
        data: data,
    });
}

/**
 * 
 * @param {String} url server url
 * @param {String} formselector 
 */
function postForm(url, formselector) {
    return $.ajax({
        url,
        method: 'POST',
        data: $(formselector).serialize()
    });
}