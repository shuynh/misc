// ==UserScript==
// @name        blah.js
// @namespace   prettyshit
// @include     https://www.flowdock.com/app/groupcommerce/main
// @include     https://www.flowdock.com
// @version     1
// ==/UserScript==
//

$(document).ready(function(){

    // Makes sure it's not the account or help page
    var pName = window.location.pathname;
    if (pName.indexOf('/account') === -1 && pName.indexOf('/help') === -1) {

        var css = 'body{background:white} header{background-image:-webkit-linear-gradient(top,#e8e8e8,#c0c0c0);} nav#tab-bar{background:#06822B;} #tab-list > li .activity-indicator {background-image:url(http://i.imgur.com/iyDmE.gif);background-repeat:no-repeat; box-sizing:none; border-radius:0%; border:none; top:6px; right:232px;} .current .activity-indicator {background-color:#06822B;border-color:none;} .activity-indicator {border:none; height:45px; min-width:44px;} #user-menu{display:none;} #tab-list > li#flow-dropdown-item {display:none;} .dropdown-toggle {display:none; color:green;} #tab-list > li > a.tab .name::after {background-image:none;} body.single-pane #pane-switcher{display:none;} body.single-pane.inbox-only .inbox-panel{padding-right:0px;} #app_menu{background:#e0e5eb;border-top:1px solid #f9f9f9;box-sizing:border-box;box-shadow:none;float:left;min-height:100%;padding:10px;position:static;text-align:left;width:15%;z-index:1}#app_menu div.app_icon.current{background:none!important}#main_splitter{border-left:1px solid #b4b4b4;border-top:1px solid #f9f9f9;box-sizing:border-box;float:right;margin:0;min-width:auto;width:85%}#app{background:#efefef;box-sizing:border-box;float:right;position:static!important;width:30%!important;z-index:1} #chat{display:none;} .search-toolbar {display:none;} .message-list, #inbox > .message-list {top:2px;} .user{float:left;margin:10px 0 0 10px}header .user .user_name{display:inline-block;position:relative;top:-9px}.common-flow-items{display:inline-block;float:right;margin-right:10px}.common-flow-items li{display:inline;float:left;margin:0 1px}.common-flow-items a,.common-flow-items input{background-image:-webkit-linear-gradient(top,#f3f3f3,#dfdfdf);border:1px solid #ccc;border-radius:5px;color:#444;cursor:pointer;font-size:14px;opacity:.6;padding:3px 7px 4px;position:relative;text-decoration:none;top:5px;-webkit-transition:opacity .2s linear;transition:opacity .2s linear}.common-flow-items a:hover,.common-flow-items input:hover{opacity:1}.common-flow-items li input{top:0}.common-flow-items li:last-child{margin-left:0;margin-right:0}#app_menu h4{color:#727577;line-height:1;margin:20px 0 10px;text-transform:uppercase}#app_menu ol{list-style:none;margin:0;padding:0}#app_menu li{line-height:20px;margin:0;padding:1px 0 0 0}#app_menu a{color:#1a1a1a;cursor:pointer;text-decoration:none}.active_item a,.active_item a.ui-state-hover{background-image:-webkit-linear-gradient(top,#b9c4d8,#9aa9c8)!important;border:0!important;border-bottom:1px solid #919fbc!important;color:#fff!important;display:inline-block!important;margin:0 -10px!important;padding:2px 10px 0 11px!important;width:100%!important}#app_menu #flow_views{margin-top:-15px}#app_menu div.app_icon{padding:1px 0 0 21px}#app_menu .app_icon .app_icon_tooltip{position:static;background:0;color:inherit;font-weight:normal;text-shadow:none;padding:0;line-height:inherit;height:auto;border-radius:0;display:inline-block}#influx_icon,#app_menu div#influx_icon.app_icon.current{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAAACXBIWXMAAAsTAAALEwEAmpwYAAABL0lEQVQoFaWSvy4EURSHr42VWCR6irGPQCJZ8RYahUS8gd5DaLagkmyil9Bq9BK2VSAKHQkiUXB93+y5Mg2R7Em+Of9+58y9s5tyzqmQUhrAA5zAHNwGxtbsDYpe3xyuaL4A1XQJDt0HxtbsqanKkhZJsQ0ChZuwDV9QzNiaPTVqR1YfI6U22TUMy2Zil98FrUZ9SO0K2vVsLOhR8Hh7YHwcvOGl5PbUqO01F/SjuILvwGnkCgtn0VuOWj9enuYpPIJXqI+Kn4ELKMPGszHg1dQ642zaAYWHUMESLAQ3eDFfBHsVqHVmC9J5JO/41+AJvwrdYB3/DKWv1gVHkzwmQJseuZ/nPtEB2N+F+rj4pmUX/GZrNORP84OMZeMumPIK/k0//3GMDzT+dOWb+fL8DVE4i6oeywk6AAAAAElFTkSuQmCC) 0 50% no-repeat!important}#flowser_icon,#app_menu div#flowser_icon.app_icon.current{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAABW0lEQVQ4EZWSPS8EURSG7yyxBIkoNBq1QmIrH4lCQaneDZVoFSgUeoVqo/QDRCLxG4hKJVGIRKiIgoLCV8J6zuS8k0MmxE2evOeej3fuzJ2s1WolrSzL2oknYQIG4ASO6LlBy5cZuEmNjkMwx8gd+1WoqDeqhkdpsEYNvhE/hb3lN+OgYvKpA47Bmj6gCSMwBHW4AtWmNSillqa8wZqaKkjJ2as9es+u8lLyad2Lr+iwClHJH3jPOVqNtQqJfrD1DvbeZevBk1XUbqpYZnDqux50vKh4wNV2Eo759hZ98biQQaJ7sG9wCTUdkbgbtsFqxrJqUl3jWmiyD7YPO3AW8nZDixqUyqCN4hZ8hgE9Neoz9YaGTXMDJSjOwh5cwDXY/7ECS2C3ZGb2DQqTbwbBqIumXu3zJ6U0Ty6a1PN8bPorxuCnyUzpCX4zwmQhnGTj3wb5sVOaw8Sut+8L7m2AIiemBQIAAAAASUVORK5CYII=) 0 50% no-repeat!important}#settings_icon,#app_menu div#settings_icon.app_icon.current{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAABQ0lEQVQ4EY2TsUoDQRCGd23tJSGll/gYio1lnkDOQskzWUgKG0FJL5jkFcTWJho7O1HBQs/vX3aW4Tg0C1/mv5l/ZjfJXmyaJnStGOOQ/CTXzvE9dvmCBhgYKujloXO0pot5zvXQlflTzh4onMEbrOAYXsAGrHNuRZTntPSlKSGMSH6BNfwX5R2qdwuh9QGvSW32Ie9nspajhHBCwu98zfM4M2vVatcXdinewZMzXaGjM+mkN64ur3rUGx7A7yx9aM0WyR11+O41OUJ7fbcTPHfl0m+oC7OAZ7CTTG1ni9QuXV1e9VT+EtXO8IO+gH04gCnYcMW6DJZgDWAN3vSXlneg3vQdeNiGHdh0yasetszvAlIvzjvoL6rBX2Vp5VSTZ1L6TCiy9IP2s16ilRSLnOuj0xW2vnICS1jEuAe3mZHl2/EXjkIb+FXLWogAAAAASUVORK5CYII=) 0 50% no-repeat!important}#flow_list .flow_name{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHCAYAAAABIM1CAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAyklEQVQYGXXQzwoBURTH8XMlbFh6ASuNhIWUbJS8hCzY8BxWNvIGLLyJHY2NPITSlIXyJ43vme4VGrc+nXvO/c2dQcIwlDgiUsEKS3hxGZ29HyaUQwHZ6EBkxp5EZGJnXxmdJQi4NWSjb9T6b4040EzfBT4v8Bg2ULKHW+odV/h2VqZqpmh7SerGGJOhnHCET9+l1uFWk9mFZoMOAvo0P+FmaNoYoIUFaqgijxR06Zfo5Tvs0cMac8gBevsDY5zh/rzfGtjMk6rPTF+kjWH086j5DwAAAABJRU5ErkJggg==) 0 50% no-repeat;padding-left:21px}#flow_list .flow_unread{float:right;height:auto;min-width:auto!important;position:static}#people{background:#e6e6e6;border-bottom:1px solid #b4b4b4;box-sizing:border-box;padding:10px}#people .user{cursor:default;display:inline-block}#people .user .user_name{background-image:-webkit-linear-gradient(top,#dae6f9,#c1d4f5)!important;border:1px solid #9cbdee;border-radius:20px;box-shadow:0 0 1px rgba(255,255,255,.5) inset;display:inline-block;font-size:11px;line-height:20px;margin:3px;padding:0 10px}#people .user.idle .user_name{background-image:-webkit-linear-gradient(top,#efd57e,#ffc100)!important;border:1px solid #daa400}#people .user.offline{opacity:.25}#people .people-manager{display:inline-block;margin-left:5px}#flowdock-influx .influx_item_wrapper,#flowdock-flowser .influx_item_wrapper,#flowdock-chat .influx_item_wrapper{padding-left:0!important}#flowdock-influx .influx_item .content .title,#flowdock-influx .item .content .title,#flowdock-influx .results-line .content .title,#flowdock-flowser .influx_item .content .title,#flowdock-flowser .item .content .title,#flowdock-flowser .results-line .content .title,#flowdock-chat .influx_item .content .title,#flowdock-chat .item .content .title,#flowdock-chat .results-line .content .title{font-size:100%}#flowdock-chat #chat_app{background:#efefef}#flowdock-chat #chat_app_input_area{bottom:-1px;left:0;position:absolute;width:70%}#flowdock-chat #chat_app_lines .chat_app_history_info,#flowdock-chat #chat_app_lines .chat_line{border:0;box-sizing:border-box;float:none;padding:7px 10px 7px 60px}#flowdock-chat .chat_line .user_avatar{left:12px;margin:0;position:absolute;top:7px}#flowdock-chat .chat_line .chat_line_content{background:#fff;border-radius:3px;box-shadow:0 1px 1px rgba(0,0,0,.1);padding:11px 15px;position:relative}#flowdock-chat .chat_line .chat_line_header{margin:0 0 10px;border-bottom:1px dotted #ccc;border-top:0;overflow:hidden;padding:0 0 10px;font-weight:normal}#flowdock-chat .chat_line .nick{color:#ccc;float:left;font-weight:normal;padding:0;position:static;text-align:left;width:auto}#flowdock-chat .chat_line .timestamp{border-radius:0;float:right;font-size:inherit;line-height:inherit;margin:0;padding:0;position:static;color:#ccc}#flowdock-chat .chat_line .timestamp span.date,#flowdock-chat .chat_line .timestamp span.tags,#flowdock-chat .chat_line .timestamp span.tags.tagField-wrapper span,#flowdock-chat .chat_line .timestamp span.time,#flowdock-chat .chat_line.hide_header .chat_line_header .nick{display:inherit}#flowdock-chat .chat_line .chat_line_content:before{border-right:5px solid #fff;border-top:5px solid transparent;border-bottom:5px solid transparent;display:inline-block;height:0;left:-5px;position:absolute;top:14px;width:0;content:""}#flowdock-chat .chat_line.highlight,#flowdock-chat .chat_line.highlight .chat_line_header .timestamp,#flowdock-chat .chat_line.highlight-everyone,#flowdock-chat .chat_line.highlight-everyone .chat_line_header .timestamp,#flowdock-chat .chat_line.highlight-user,#flowdock-chat .chat_line.highlight-user .chat_line_header .timestamp{background:0;border-radius:0;box-shadow:none}#flowdock-chat .chat_line.highlight .chat_line_content,#flowdock-chat .chat_line.highlight-everyone .chat_line_content,#flowdock-chat .chat_line.highlight-user .chat_line_content{border:1px solid rgba(82,168,236,.7);box-shadow:0 1px 1px rgba(0,0,0,.1),0 0 8px rgba(82,168,236,0.7)}.app-toolbar{display:none;padding:0 15px}#people-manager{margin:0}#user-list-wrapper{border:0;position:static;width:auto}#flowdock-flowser #flowser-left-column,#flowdock-flowser #flowser-right-column{float:none;margin:20px;width:auto}.user_avatar{border:1px solid #fff;border-radius:100%;box-shadow:0 1px 1px rgba(0,0,0,.35),0 1px 3px rgba(0,0,0,.75) inset;display:inline-block;height:30px;margin-right:5px;width:30px}.ui-state-hover,.ui-widget-content .ui-state-hover,.ui-state-focus,.ui-widget-content .ui-state-focus{background:inherit!important;border:inherit!important;border-radius:none}#flowdock-chat .chat_line.chat_topline,#flowdock-chat .chat_line.separator,#flowdock-chat .app-toolbar,#flowdock-influx .app-toolbar,.app-toolbar-buttons h2,#people .user .last_activity,#flow_list .organization,#app_menu div.app_icon img,#app_menu div.app_unread,.common-flow-items li:first-child,.vsplitbar,.feedback{display:none!important}';
        var interval, heightInterval, avatarsInterval,
            userAvatars = {},
            viewsList   = $('#app_menu');

        $('head').append('<style>' + css + '</style>');

        // DOM Refactor i guess
        $('body').prepend('<header></header>');
        viewsList.append('<section id="flow_views"><h4>Views</h4><ol></ol></section><section id="my_flows"><h4>Flows</h4></section><section id="flow_filter"><h4>Filters</h4><ol></ol></section>');

        var moveTheDOM = function() {

            var navClick      = $("#navigation"),
                filtersList   = $('.influx-types a'),
                usersClick    = $('#userlist_button'),
                flowList,
                usersList,

                flowListMoved  = false,
                filtersMoved   = false,
                viewsMoved     = false,
                usersListMoved = false;

            // Move the flow list
            if (!flowListMoved) {
                navClick.click();
                flowList = $("#flow_list");
                if (flowList.length === 1) {
                    flowList.appendTo($('#my_flows'));
                    $('.common-flow-items').appendTo('header');
                    navClick.click();
                    flowListMoved = true;
                }
            }


            if (filtersMoved && flowListMoved && viewsMoved && usersListMoved) {

                var chatLines = $('#chat_app_lines')[0];

                clearInterval(interval);

                // Show selected menu items
                $('#app_menu ol').children().click(function() {
                    var t = $(this);
                    t.closest('ol').children().removeClass('active_item');
                    t.closest('li').addClass('active_item');
                });


            }

            return false;
        }

        interval = window.setInterval(moveTheDOM, 1500);

        //  some height stuff 
        $(window).resize(function() {
            var top      = $('#people').outerHeight() + $('header').height(),
                contents = $('.app-contents');
            contents.height(contents.height() - top);
            return false;
        });

    }

});

