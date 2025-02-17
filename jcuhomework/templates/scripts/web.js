$(document).ready(function() {
    showCalendar(),
    topNav(),
    indexSwipeChange(),
    indexSwipeArrow(),
    navBarToggle(),
    searchBarToggle(),
    tabItemToggle(),
    hotList(),
    topicIconChange(),
    hotPointEffect(),
    weibo_wechat(),
    footerNav(),
    focusNewsChange(),
    subBannerChange(),
    $(window).scroll(function() {
        $(window).scrollTop() >= 30 ? $(".nav_wrap").css({
            top: 0
        }) : $(".nav_wrap").css({
            top: 30
        })
    }),
    $(window).width() > 1199 && ($("#showkeycode270998").on("keyup", function() {
        "" !== $(this).val() ? ($("#btnSearch").show(),
        $("#closeSearch").hide()) : ($("#btnSearch").hide(),
        $("#closeSearch").show())
    }),
    $("#closeSearch").on("click", function() {
        $(".search_wrap form").fadeOut("fast")
    }))
});
var navBarFlag = !0;
function navBarToggle() {
    var e = $(".top_nav");
    $(".nav_bar").on("click", function() {
        navBarFlag ? e.fadeIn("fast") : e.fadeOut("fast"),
        navBarFlag = !navBarFlag
    })
}
var searchBarFlag = !0;
function searchBarToggle() {
    var e = $(".search_wrap form");
    $(".search_bar").on("click", function() {
        searchBarFlag ? e.fadeIn("fast").css({
            display: "flex"
        }) : e.fadeOut("fast"),
        searchBarFlag = !searchBarFlag
    })
}
var indexSwipeIndex = 0
  , indexSwipeChangeHandler = null;
function indexSwipeArrow() {
    var e = $(".swipe img.pos_a")
      , n = $(".swipe_nav_item");
    $(".arrow_nav_left").on("click", function() {
        clearTimeout(indexSwipeChangeHandler),
        --indexSwipeIndex < 0 && (indexSwipeIndex = e.length - 1),
        e.fadeOut(1500).eq(indexSwipeIndex).fadeIn(1500),
        n.removeClass("swipe_nav_item_current").eq(indexSwipeIndex).addClass("swipe_nav_item_current"),
        indexSwipeChangeHandler = setTimeout(function() {
            indexSwipeChange()
        }, 5e3)
    }),
    $(".arrow_nav_right").on("click", function() {
        clearTimeout(indexSwipeChangeHandler),
        ++indexSwipeIndex > e.length - 1 && (indexSwipeIndex = 0),
        e.fadeOut(1500).eq(indexSwipeIndex).fadeIn(1500),
        n.removeClass("swipe_nav_item_current").eq(indexSwipeIndex).addClass("swipe_nav_item_current"),
        indexSwipeChangeHandler = setTimeout(function() {
            indexSwipeChange()
        }, 5e3)
    }),
    $(".swipe_nav_item").each(function(i, a) {
        $(this).on("click", function() {
            clearTimeout(indexSwipeChangeHandler),
            e.fadeOut(1500).eq(i).fadeIn(1500),
            n.removeClass("swipe_nav_item_current").eq(i).addClass("swipe_nav_item_current"),
            indexSwipeIndex = i,
            indexSwipeChangeHandler = setTimeout(function() {
                indexSwipeChange()
            }, 5e3)
        })
    })
}
function indexSwipeChange() {
    var e = $(".swipe a img.pos_a")
      , n = $(".swipe_nav_item")
      , i = e.eq(0).height();
    $(".swipe").height(i),
    $(".arrow_nav").css({
        top: i / 2 + 50
    }),
    e.length > 0 && (indexSwipeIndex > e.length - 1 && (indexSwipeIndex = 0),
    console.log(indexSwipeIndex),
    e.fadeOut(1500).eq(indexSwipeIndex).fadeIn(1500),
    n.removeClass("swipe_nav_item_current").eq(indexSwipeIndex).addClass("swipe_nav_item_current"),
    indexSwipeChangeHandler = setTimeout(function() {
        indexSwipeChange()
    }, 7e3),
    indexSwipeIndex++)
}
var subBannerIndex = 0;
function subBannerChange() {
    var e = $("#sub_banner img");
    $("#sub_banner").height(e.eq(0).height()),
    e.length > 0 && (subBannerIndex > e.length - 1 && (subBannerIndex = 0),
    e.fadeOut(1500).eq(subBannerIndex).fadeIn(1500),
    setTimeout(function() {
        subBannerChange()
    }, 7e3),
    subBannerIndex++)
}
function weibo_wechat() {
    var e = $(".qr_code");
    $("#weibo").hover(function() {
        e.addClass("qr_code_weibo").fadeIn().find("img").attr("src", "/templates/images/qr_code_weibo.jpg")
    }, function() {
        e.hide().removeClass("qr_code_weibo")
    }),
    $("#wechat").hover(function() {
        e.addClass("qr_code_wechat").fadeIn().find("img").attr("src", "/templates/images/qr_code_wechat.jpg")
    }, function() {
        e.hide().removeClass("qr_code_wechat")
    })
}
function hotPointEffect() {
    $(window).width() > 1199 && $(".focus_item2").each(function(e, n) {
        $(this).hover(function() {
            $(this).find(".focus_item_mask").hide(),
            $(this).find(".title").animate({
                bottom: 40
            }, 300)
        }, function() {
            $(this).find(".focus_item_mask").fadeIn(),
            $(this).find(".title").animate({
                bottom: 20
            }, 300)
        })
    })
}
function topicIconChange() {
    $(".topic_link_item").each(function(e, n) {
        $(this).hover(function() {
            $(this).find(".topic_link_icon ").removeClass("topic_link_icon" + e).addClass("topic_link_icon" + e + "_hover")
        }, function() {
            $(this).find(".topic_link_icon ").removeClass("topic_link_icon" + e + "_hover").addClass("topic_link_icon" + e)
        })
    })
}
var currList = !0;
function hotList() {
    var e = $(".hot_col_list");
    function n() {
        e.animate({
            left: currList ? "-1200px" : "0"
        }, 600),
        currList = !currList
    }
    $("#hot_left").on("click", function() {
        n()
    }),
    $("#hot_right").on("click", function() {
        n()
    })
}
function tabItemToggle() {
    $("#tabItem span").each(function(e, n) {
        $(this).on("click", function() {
            return $("#tabItem span").removeClass("cur_item"),
            $(this).addClass("cur_item"),
            $("#tabItemList .list_ul").hide().eq(e).fadeIn(),
            !1
        })
    })
}
var currFocus = !0;
function focusList() {
    var e = $(".focus_news_list_wrap");
    currFocus ? (e.animate({
        left: -1200 + "px"
    }, 600),
    $(".focus_item").eq(3).addClass("cur_focus"),
    $(".focus_item").eq(4).css({
        left: "1870px"
    }),
    $(".focus_item").eq(5).css({
        left: "2140px"
    })) : (e.animate({
        left: 0
    }, 600),
    $(".focus_item").eq(0).addClass("cur_focus"),
    $(".focus_item").eq(1).css({
        left: "670px"
    }),
    $(".focus_item").eq(2).css({
        left: "940px"
    })),
    currFocus = !currFocus
}
function focusArrow() {
    $("#focus_arrow_right").on("click", function() {
        focusList()
    }),
    $("#focus_arrow_left").on("click", function() {
        focusList()
    })
}
function focusNewsChange() {
    if ($(window).width() > 1199) {
        focusArrow();
        var e = 400;
        $(".focus_item .thumb").each(function(n, i) {
            $(this).on("click", function() {
                return $(".focus_item.cur_focus").removeClass("cur_focus"),
                $(this).parent().addClass("cur_focus"),
                0 == n && ($(".focus_item").eq(1).animate({
                    left: "670px"
                }, e),
                $(".focus_item").eq(2).animate({
                    left: "940px"
                }, e)),
                1 == n && ($(".focus_item").eq(0).animate({
                    left: "0"
                }, e),
                $(".focus_item").eq(1).animate({
                    left: "270px"
                }, e),
                $(".focus_item").eq(2).animate({
                    left: "940px"
                }, e)),
                2 == n && ($(".focus_item").eq(0).animate({
                    left: "0"
                }, e),
                $(".focus_item").eq(1).animate({
                    left: "270px"
                }, e),
                $(".focus_item").eq(2).animate({
                    left: "540px"
                }, e)),
                3 == n && ($(".focus_item").eq(4).animate({
                    left: "1870px"
                }, e),
                $(".focus_item").eq(5).animate({
                    left: "2140px"
                }, e)),
                4 == n && ($(".focus_item").eq(3).animate({
                    left: "1200px"
                }, e),
                $(".focus_item").eq(4).animate({
                    left: "1470px"
                }, e),
                $(".focus_item").eq(5).animate({
                    left: "2140px"
                }, e)),
                5 == n && ($(".focus_item").eq(3).animate({
                    left: "1200px"
                }, e),
                $(".focus_item").eq(4).animate({
                    left: "1470px"
                }, e),
                $(".focus_item").eq(5).animate({
                    left: "1740px"
                }, e)),
                !1
            })
        })
    }
}
function showCalendar() {
    var e = calendar.solar2lunar()
      , n = e.cYear + "年" + e.cMonth + "月" + e.cDay + "日　" + e.ncWeek;
    n += "　" + e.gzYear + "年" + e.IMonthCn + e.IDayCn,
    $("#current_date").text(n)
}
function footerNav() {
    $(window).width() > 1199 ? ($(".links_item:eq(0)").css({
        display: "flex"
    }),
    $(".links_categort_item").each(function(e, n) {
        $(this).on("mouseover", function(n) {
            $(".links_categort_item").removeClass("cur_category").eq(e).addClass("cur_category"),
            $(".links_item").hide().eq(e).css({
                display: "flex"
            })
        })
    })) : ($(".links_item_wrap_close").on("click", function() {
        $(".links_item_wrap").css({
            display: "none"
        }),
        $(".links_categort_item").removeClass("cur_category")
    }),
    $(".links_categort_item").removeClass("cur_category"),
    $(".links_categort_item").each(function(e, n) {
        $(this).on("mouseover", function(n) {
            $(".links_categort_item").removeClass("cur_category").eq(e).addClass("cur_category"),
            $(".links_item_wrap").css({
                display: "block"
            }),
            $(".links_item").hide().eq(e).css({
                display: "flex"
            })
        })
    }))
}
function topNav() {
    $(window).width() > 1199 && ($(".top_nav_li a").each(function(e, n) {
        $(this).on("mouseover", function(n) {
            $(".sub_nav_ul_wrap").fadeIn("fast"),
            $(".sub_nav_ul").hide().eq(e).css({
                display: "flex"
            }),
            $(".sub_t_nav_ul_wrap").css({
                display: "none"
            }).find("div").hide()
        })
    }),
    $(".sub_nav_ul").each(function(e, n) {
        $(this).find(".sub_nav_li").each(function(e, n) {
            t_nav(e, n, $(this))
        })
    }),
    $(".nav_wrap").hover(function() {}, function() {
        $(".sub_nav_ul_wrap").hide()
    }))
}
var tNavArr = ["deptNav", "eduNav", "scienceNav", "admissionsNav", "sub_1419", "sub_1165", "sub_1167", "sub_1227"]
  , curTNav = "";
function t_nav(e, n, i) {
    i.find("a").hover(function() {
        var n = i.parent().attr("id");
        curTNav = n,
        $("#" + curTNav + "_menu").length > 0 && ($(".sub_t_nav_ul_wrap").css({
            display: "flex"
        }),
        $(".sub_t_nav_ul").hide(),
        $("#" + curTNav + "_menu").css({
            display: "flex"
        }).find(".sub_t_nav_ul:eq(" + e + ")").css({
            display: "flex"
        }))
    }, function() {
        -1 === tNavArr.indexOf(curTNav) && $(".sub_t_nav_ul_wrap").css({
            display: "none"
        })
    })
}
