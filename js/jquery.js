    var storeData = [];
    $('button').click(function (){
        var text = $('input[type=text]').val();
        if (text != ""){
            var newtext = {
                text : text,
                done : false,
            }
        
            storeData.push(newtext);
            localStorage.setItem("text", JSON.stringify(storeData));
        }
        show();
        $('input[type=text]').val('');

    });

    function show(list) {
    var result = JSON.parse(localStorage.getItem('text'));
        let html = '';
        result.forEach((item, index) => {

                if (item.done == false) {
                    complete = '<td><input type="checkbox" onclick="todoChecked('+ index +')"></td>';
                    textValue = '<td>' + item.text + '</td>';
                } else {
                    complete = '<td><input type="checkbox" onclick="todoChecked(' + index + ')" checked></td>';
                    textValue = '<td style="text-decoration: line-through">' + item.text + '</td>';
                }

                html += '<tr><th>' +'</th>' + complete + textValue + '<td><button type="button" onclick="deleteText(' + index + ')" class="btn btn-danger"><i class="fa fa-trash"></i>X</button></td></tr>';
            });

            $('#list').html(html)
    }

    function deleteText(index){
        storeData.splice(index, 1 );
        localStorage.setItem("text", JSON.stringify(storeData));
        show();
    }

    function todoChecked(index){
        var result = window.localStorage.getItem("text");
        storeData = JSON.parse(result);
        if(storeData[index].done == false){
            storeData[index].done = true;
        }else{
            storeData[index].done = false;
        }

        localStorage.setItem("text", JSON.stringify(storeData));
        show();
    }

    show();