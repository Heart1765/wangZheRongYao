var list = document.querySelectorAll(".game_file>li")
$(function () {
    $.ajax({
        url: "./js/file.json",
        async: false,
        success: function (respones) {
            // console.log(respones);
            // console.log(respones.gameFile[0]);
            // console.log(respones.gameFile[0][0].content);
            // respones.gameFile.length
            for (let i = 0; i < list.length; i++) {
                var ol = document.createElement("ol")
                ol.setAttribute("class", "drop")
                for (let j = 0; j < respones.gameFile[i].length; j++) {
                    var li = document.createElement("li")
                    if (respones.gameFile[i][j].type == "n") {
                        li.setAttribute("class", "n")
                    } else if (respones.gameFile[i][j].type == "h") {
                        li.setAttribute("class", "h")
                    } else if (respones.gameFile[i][j].type == "o") {
                        li.setAttribute("class", "o")
                    }
                    li.innerHTML = respones.gameFile[i][j].content
                    ol.appendChild(li)
                }
                list[i].appendChild(ol)
            }
        },
        error: function (reject) {
            console.log(reject);
        }
    })
})
