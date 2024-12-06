$(document).ready(function(){
    var totalPrice = 0.0;
    var openBoards = false;

    window.addEventListener('message', function(event){
        var item = event.data;

        if (item.openBounty) {
            OpenBountyList(item.data, item.image);
        }

        if (item.openBoard) {
            OpenBountyboard(item.data, item.city);
        }

        if (item.closedBoard) {
            $(".container").css("display", "none");
            $(".container_paper").css("display", "none");
            $('.bountyboard').html('');
            $('.container_bounty_paper').html('');
        }
    });

    function OpenBountyList(bounty, imageBounty){
        var modifi = bounty["difficulty"];
        var difficulty;

        $(".container_paper").css("display", "block");

        if (modifi == 1) {
            difficulty = "<div class='star_paper'></div>"
        } else if (modifi == 2) {
            difficulty = "<div class='star_paper'></div><div class='star_paper'></div>"
        } else if (modifi == 3) {
            difficulty = "<div class='star_paper'></div><div class='star_paper'></div><div class='star_paper'></div>"
        } else if (modifi == 4) {
            difficulty = "<div class='star_paper'></div><div class='star_paper'></div><div class='star_paper'></div><div class='star_paper'></div>"
        } else if (modifi == 5) {
            difficulty = "<div class='star_paper'></div><div class='star_paper'></div><div class='star_paper'></div><div class='star_paper'></div><div class='star_paper'></div>"
        } else if (modifi == 6) {
            difficulty = "<div class='star_paper'></div><div class='star_paper'></div><div class='star_paper'></div><div class='star_paper'></div><div class='star_paper'></div><div class='star_paper'></div>"
        }

        var statusHtml = "<div class='status_paper'>" + bounty["name"] + "</div>";
        var portretHtml = "<div class='portret_paper'><img src='image/bounty/" + imageBounty + ".png' alt='IMG'></div>";
        var nameHtml = "<div class='name_paper'>" + bounty["name"] + "</div>";
        var rewardHtml = "<div class='reward_paper'>" + bounty["reward"] + "</div>";
        var difficultyHtml = "<div class='difficulty_paper'>" + difficulty + "</div>";
        
        $(".container_bounty_paper").append(statusHtml + portretHtml + nameHtml + rewardHtml + difficultyHtml);
        openBoards = true;   
    }

    function OpenBountyboard(bounty, city){
        var curr_city = city;
        for (var k in bounty) {
            var ids = bounty[k].id;
            var status = bounty[k].status;
            var bounty_id = bounty[k].bounty_id;
            var name = bounty[k].name;
            var reward = bounty[k].reward;
            var modifi = bounty[k].difficulty;
            var gander = bounty[k].gander;
            var portret = bounty[k].portret;
            var difficulty;

            $(".container").css("display", "block");

            if (modifi == 1) {
                difficulty = "<div class='star'></div>"
            } else if (modifi == 2) {
                difficulty = "<div class='star'></div><div class='star'></div>"
            } else if (modifi == 3) {
                difficulty = "<div class='star'></div><div class='star'></div><div class='star'></div>"
            } else if (modifi == 4) {
                difficulty = "<div class='star'></div><div class='star'></div><div class='star'></div><div class='star'></div>"
            } else if (modifi == 5) {
                difficulty = "<div class='star'></div><div class='star'></div><div class='star'></div><div class='star'></div><div class='star'></div>"
            } else if (modifi == 6) {
                difficulty = "<div class='star'></div><div class='star'></div><div class='star'></div><div class='star'></div><div class='star'></div><div class='star'></div>"
            }

            var statusHtml = "<div class='status'>" + status + "</div>";
            var portretHtml = "<div class='portret'><img src='image/bounty/" + portret + ".png' alt='IMG'></div>";
            var nameHtml = "<div class='name'>" + name + "</div>";
            var rewardHtml = "<div class='reward'>" + reward + "</div>";
            var difficultyHtml = "<div class='difficulty'>" + difficulty + "</div>";

            $(".bountyboard").append("<div class='bounty' onclick='CurrentBounty(`" + curr_city + "`, `" + ids + "`, `" + name + "`, `" + gander + "`, `" + bounty_id + "`, `" + modifi + "`, `" + status + "`, `" + reward + "`)'>" + statusHtml + portretHtml + nameHtml + rewardHtml + difficultyHtml  + "</div>");
            openBoards = true;    
       }
    }

    document.onkeyup = function (data) {
        if (openBoards) {
            if (data.which == 27 || data.which == 8) {
                openBoards = false;
                $.post('https://realplay_bounty/closed_board', JSON.stringify({}));
            }
        }
    };
});

function CurrentBounty(curr_city, curr_ids, curr_name, curr_gander, curr_bounty_id, diff_modifi, curr_bounty_status, curr_bounty_reward) {
    $.post("https://realplay_bounty/current_bounty",JSON.stringify({ city: curr_city, id: curr_ids, name: curr_name, gander: curr_gander, bounty_id: curr_bounty_id, difficulty: diff_modifi, bounty_status: curr_bounty_status, bounty_reward: curr_bounty_reward }));
}