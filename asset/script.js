/*use fetch with github api to fetch the
repos thus, automatically updating the repos within
the Portfolio*/
var list = $("#ul-Projects");
var projectRepo = $("#Project-repo");
var requestUrl = 'https://api.github.com/users/arthur-bridges/repos';

function getApi () {
    fetch(requestUrl).then(function (response){
        return response.json();
    }).then(function (data) {
        for (var i = 0; i < data.length; i++) {
            var listItem = $("<li>");
            listItem.text(data[i].html_url);
            list.append(listItem);
        }
    })
}
getApi();