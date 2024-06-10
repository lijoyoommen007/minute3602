(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        s = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (w) {
                            var x = w['get']('player');
                            return x && x['get']('viewerArea') == u;
                        })['map'](function (w) {
                            return w['get']('media')['get']('playList');
                        });
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('begin', n, this);
                e['call'](this);
            };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"gap":10,"children":["this.MainViewer"],"minHeight":0,"minWidth":0,"id":"rootPlayer","data":{"textToSpeechConfig":{"pitch":1,"stopBackgroundAudio":false,"rate":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"volume":1,"speechOnTooltip":false},"name":"Player4422","locales":{"en":"locale/en.txt"},"defaultLocale":"en","history":{}},"hash": "feb3b514c75637d3e41c3c2e237ce935d10c8e585ce32ead04a6b989ae18d91c", "definitions": [{"class":"PanoramaCamera","id":"panorama_0ED29169_0101_D247_4102_99BD1B6C13B0_camera","initialSequence":"this.sequence_0F5F7607_0101_F1CA_4168_D17D660A660D","enterPointingToHorizon":true,"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0}},{"class":"PanoramaCamera","id":"panorama_0E08C778_0101_BE46_4154_EEB587EB8790_camera","initialSequence":"this.sequence_0F637BBD_0100_563F_4155_A61D0A61E6E6","enterPointingToHorizon":true,"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0}},{"toolTipPaddingBottom":4,"width":"100%","toolTipPaddingTop":4,"subtitlesTop":0,"progressBarBackgroundColor":["#3399FF"],"subtitlesTextShadowColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","minHeight":50,"subtitlesBackgroundColor":"#000000","minWidth":100,"subtitlesBottom":50,"toolTipFontSize":"1.11vmin","data":{"name":"Main Viewer"},"subtitlesGap":0,"progressBackgroundColor":["#000000"],"playbackBarHeadShadowOpacity":0.7,"firstTransitionDuration":0,"playbackBarHeadShadowBlurRadius":3,"playbackBarProgressBackgroundColorRatios":[0],"propagateClick":false,"toolTipShadowColor":"#333138","playbackBarLeft":0,"progressBottom":10,"subtitlesFontSize":"3vmin","playbackBarHeadHeight":15,"playbackBarHeadShadowColor":"#000000","playbackBarBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarProgressBorderColor":"#000000","progressHeight":2,"progressBackgroundColorRatios":[0],"playbackBarHeadBorderSize":0,"progressRight":"33%","progressBorderSize":0,"subtitlesFontFamily":"Arial","playbackBarHeadShadow":true,"progressBarBorderRadius":2,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesBackgroundOpacity":0.2,"surfaceReticleColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"toolTipTextShadowColor":"#000000","toolTipFontColor":"#606060","toolTipPaddingLeft":6,"progressOpacity":0.7,"subtitlesTextShadowOpacity":1,"id":"MainViewer","playbackBarBottom":5,"toolTipBorderColor":"#767676","vrPointerColor":"#FFFFFF","playbackBarBorderSize":0,"progressBarBorderSize":0,"subtitlesBorderColor":"#FFFFFF","vrThumbstickRotationStep":20,"vrPointerSelectionColor":"#FF6600","progressBarBackgroundColorDirection":"horizontal","progressBarBorderColor":"#000000","toolTipBackgroundColor":"#F6F6F6","toolTipPaddingRight":6,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadBorderColor":"#000000","progressBarBackgroundColorRatios":[0],"subtitlesTextShadowVerticalLength":1,"playbackBarHeadWidth":6,"progressBorderRadius":2,"playbackBarHeight":10,"playbackBarProgressBorderSize":0,"toolTipFontFamily":"Arial","playbackBarProgressBorderRadius":0,"playbackBarRight":0,"height":"100%","subtitlesFontColor":"#FFFFFF","playbackBarBackgroundColorDirection":"vertical","progressLeft":"33%","subtitlesTextShadowHorizontalLength":1,"progressBorderColor":"#000000","class":"ViewerArea","playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarBackgroundOpacity":1,"vrPointerSelectionTime":2000},{"items":[{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","media":"this.panorama_0ED29169_0101_D247_4102_99BD1B6C13B0","camera":"this.panorama_0ED29169_0101_D247_4102_99BD1B6C13B0_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","media":"this.panorama_0E08C778_0101_BE46_4154_EEB587EB8790","end":"this.trigger('tourEnded')","camera":"this.panorama_0E08C778_0101_BE46_4154_EEB587EB8790_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)"}],"class":"PlayList","id":"mainPlayList"},{"overlays":["this.overlay_0E59346E_0100_525A_4150_4E7248AB79F8","this.overlay_0E65E692_010F_DECA_416B_A197FF1BD6DA"],"label":trans('panorama_0E08C778_0101_BE46_4154_EEB587EB8790.label'),"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_0E08C778_0101_BE46_4154_EEB587EB8790_t.jpg","cube":{"levels":[{"width":24576,"url":"media/panorama_0E08C778_0101_BE46_4154_EEB587EB8790_0/{face}/0/{row}_{column}.jpg","height":4096,"class":"TiledImageResourceLevel","rowCount":8,"tags":"ondemand","colCount":48},{"width":12288,"url":"media/panorama_0E08C778_0101_BE46_4154_EEB587EB8790_0/{face}/1/{row}_{column}.jpg","height":2048,"class":"TiledImageResourceLevel","rowCount":4,"tags":"ondemand","colCount":24},{"width":6144,"url":"media/panorama_0E08C778_0101_BE46_4154_EEB587EB8790_0/{face}/2/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","rowCount":2,"tags":"ondemand","colCount":12},{"width":3072,"url":"media/panorama_0E08C778_0101_BE46_4154_EEB587EB8790_0/{face}/3/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","rowCount":1,"tags":["ondemand","preload"],"colCount":6}],"class":"ImageResource"}}],"hfovMax":130,"id":"panorama_0E08C778_0101_BE46_4154_EEB587EB8790","thumbnailUrl":"media/panorama_0E08C778_0101_BE46_4154_EEB587EB8790_t.jpg","vfov":180,"data":{"label":"dining  360.RGB_color.0000"},"adjacentPanoramas":[{"data":{"overlayID":"overlay_0E59346E_0100_525A_4150_4E7248AB79F8"},"class":"AdjacentPanorama","select":"this.overlay_0E59346E_0100_525A_4150_4E7248AB79F8.get('areas').forEach(function(a){ a.trigger('click') })","yaw":0.47,"distance":27.44,"backwardYaw":-63.76,"panorama":"this.panorama_0ED29169_0101_D247_4102_99BD1B6C13B0"},{"data":{"overlayID":"overlay_0E65E692_010F_DECA_416B_A197FF1BD6DA"},"class":"AdjacentPanorama","select":"this.overlay_0E65E692_010F_DECA_416B_A197FF1BD6DA.get('areas').forEach(function(a){ a.trigger('click') })","yaw":90.44,"distance":7.61,"backwardYaw":-63.76,"panorama":"this.panorama_0ED29169_0101_D247_4102_99BD1B6C13B0"}],"class":"Panorama","hfov":360},{"adjacentPanoramaPositionsEnabled":true,"viewerArea":"this.MainViewer","arrowKeysAction":"translate","surfaceSelectionEnabled":true,"class":"PanoramaPlayer","aaEnabled":true,"mouseControlMode":"drag_rotation","displayPlaybackBar":true,"touchControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer"},{"overlays":["this.overlay_0E48E46A_0100_525A_4160_1D2877B51154","this.overlay_0E609693_010F_DECA_416C_DDDFA9E6928C"],"label":trans('panorama_0ED29169_0101_D247_4102_99BD1B6C13B0.label'),"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_0ED29169_0101_D247_4102_99BD1B6C13B0_t.jpg","cube":{"levels":[{"width":24576,"url":"media/panorama_0ED29169_0101_D247_4102_99BD1B6C13B0_0/{face}/0/{row}_{column}.jpg","height":4096,"class":"TiledImageResourceLevel","rowCount":8,"tags":"ondemand","colCount":48},{"width":12288,"url":"media/panorama_0ED29169_0101_D247_4102_99BD1B6C13B0_0/{face}/1/{row}_{column}.jpg","height":2048,"class":"TiledImageResourceLevel","rowCount":4,"tags":"ondemand","colCount":24},{"width":6144,"url":"media/panorama_0ED29169_0101_D247_4102_99BD1B6C13B0_0/{face}/2/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","rowCount":2,"tags":"ondemand","colCount":12},{"width":3072,"url":"media/panorama_0ED29169_0101_D247_4102_99BD1B6C13B0_0/{face}/3/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","rowCount":1,"tags":["ondemand","preload"],"colCount":6}],"class":"ImageResource"}}],"hfovMax":130,"id":"panorama_0ED29169_0101_D247_4102_99BD1B6C13B0","thumbnailUrl":"media/panorama_0ED29169_0101_D247_4102_99BD1B6C13B0_t.jpg","vfov":180,"data":{"label":"living 360.RGB_color.0000"},"adjacentPanoramas":[{"data":{"overlayID":"overlay_0E48E46A_0100_525A_4160_1D2877B51154"},"class":"AdjacentPanorama","select":"this.overlay_0E48E46A_0100_525A_4160_1D2877B51154.get('areas').forEach(function(a){ a.trigger('click') })","yaw":-63.76,"distance":7.46,"backwardYaw":0.47,"panorama":"this.panorama_0E08C778_0101_BE46_4154_EEB587EB8790"},{"data":{"overlayID":"overlay_0E609693_010F_DECA_416C_DDDFA9E6928C"},"class":"AdjacentPanorama","select":"this.overlay_0E609693_010F_DECA_416C_DDDFA9E6928C.get('areas').forEach(function(a){ a.trigger('click') })","yaw":0,"distance":100,"backwardYaw":0.47,"panorama":"this.panorama_0E08C778_0101_BE46_4154_EEB587EB8790"}],"class":"Panorama","hfov":360},{"movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_out"}],"class":"PanoramaCameraSequence","id":"sequence_0F5F7607_0101_F1CA_4168_D17D660A660D"},{"movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_out"}],"class":"PanoramaCameraSequence","id":"sequence_0F637BBD_0100_563F_4155_A61D0A61E6E6"},{"data":{"label":"GoToLiving360.rgb_color.0000","hasPanoramaAction":true},"enabledInSurfaceSelection":false,"areas":["this.HotspotPanoramaOverlayArea_11A1EB12_0100_F7CA_4144_A5E96ADDEC6E"],"items":[{"pitch":-3.54,"vfov":9.14,"yaw":0.47,"distance":50,"data":{"label":"GoToLiving360.rgb_color.0000"},"image":"this.res_110031AE_010F_B2DD_4166_5A4C1C9C0D76","scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","hfov":10.5}],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"useHandCursor":true,"maps":[],"id":"overlay_0E59346E_0100_525A_4150_4E7248AB79F8"},{"data":{"label":"GoToLiving360.rgb_color.0000","hasPanoramaAction":true},"enabledInSurfaceSelection":false,"areas":["this.HotspotPanoramaOverlayArea_0E6B7697_010F_DECA_4164_ABF5CA6BB9C1"],"items":[{"pitch":-12.58,"vfov":9.14,"yaw":90.44,"distance":50,"data":{"label":"GoToLiving360.rgb_color.0000"},"image":"this.res_110031AE_010F_B2DD_4166_5A4C1C9C0D76","scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","hfov":10.5}],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"useHandCursor":true,"maps":[],"id":"overlay_0E65E692_010F_DECA_416B_A197FF1BD6DA"},{"data":{"label":"GoToDining360.rgb_color.0000","hasPanoramaAction":true},"enabledInSurfaceSelection":false,"areas":["this.HotspotPanoramaOverlayArea_0EDE649B_0100_52FB_4163_11E5F349A4C3"],"items":[{"pitch":-12.83,"vfov":9.14,"yaw":-63.76,"distance":50,"data":{"label":"GoToDining360.rgb_color.0000"},"image":"this.res_110031AE_010F_B2DD_4166_5A4C1C9C0D76","scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","hfov":10.5}],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"useHandCursor":true,"maps":[],"id":"overlay_0E48E46A_0100_525A_4160_1D2877B51154"},{"data":{"label":"GoToDining360.rgb_color.0000","hasPanoramaAction":true},"enabledInSurfaceSelection":false,"areas":["this.HotspotPanoramaOverlayArea_11A1FB12_0100_F7CA_4167_D7959DBAC7B2"],"items":[{"vfov":9.14,"distance":50,"data":{"label":"GoToDining360.rgb_color.0000"},"image":"this.res_110031AE_010F_B2DD_4166_5A4C1C9C0D76","scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","hfov":10.5}],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"useHandCursor":true,"maps":[],"id":"overlay_0E609693_010F_DECA_416C_DDDFA9E6928C"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_11A1EB12_0100_F7CA_4144_A5E96ADDEC6E","mapColor":"any"},{"class":"ImageResource","levels":[{"width":131,"url":"media/res_110031AE_010F_B2DD_4166_5A4C1C9C0D76_0.png","height":114,"class":"ImageResourceLevel"}],"id":"res_110031AE_010F_B2DD_4166_5A4C1C9C0D76"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_0E6B7697_010F_DECA_4164_ABF5CA6BB9C1","mapColor":"any"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_0EDE649B_0100_52FB_4163_11E5F349A4C3","mapColor":"any"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_11A1FB12_0100_F7CA_4167_D7959DBAC7B2","mapColor":"any"}],"backgroundColor":["#FFFFFF"],"defaultMenu":["fullscreen","mute","rotation"],"scrollBarColor":"#000000","backgroundColorRatios":[0],"propagateClick":false,"scrollBarMargin":2,"start":"this.get('data').surfaceSelectionHotspotMode = 'circleEnabled'; this.init(); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList])","height":"100%","scripts":{"executeJS":TDV.Tour.Script.executeJS,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getComponentByName":TDV.Tour.Script.getComponentByName,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"mixObject":TDV.Tour.Script.mixObject,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"clone":TDV.Tour.Script.clone,"openLink":TDV.Tour.Script.openLink,"downloadFile":TDV.Tour.Script.downloadFile,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setMapLocation":TDV.Tour.Script.setMapLocation,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"cloneBindings":TDV.Tour.Script.cloneBindings,"getPixels":TDV.Tour.Script.getPixels,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"playAudioList":TDV.Tour.Script.playAudioList,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getMainViewer":TDV.Tour.Script.getMainViewer,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setValue":TDV.Tour.Script.setValue,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"init":TDV.Tour.Script.init,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getOverlays":TDV.Tour.Script.getOverlays,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"isPanorama":TDV.Tour.Script.isPanorama,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getMediaByName":TDV.Tour.Script.getMediaByName,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"startMeasurement":TDV.Tour.Script.startMeasurement,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getKey":TDV.Tour.Script.getKey,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"existsKey":TDV.Tour.Script.existsKey,"initQuiz":TDV.Tour.Script.initQuiz,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"quizShowScore":TDV.Tour.Script.quizShowScore,"initAnalytics":TDV.Tour.Script.initAnalytics,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"showWindow":TDV.Tour.Script.showWindow,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"quizStart":TDV.Tour.Script.quizStart,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"showPopupImage":TDV.Tour.Script.showPopupImage,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"registerKey":TDV.Tour.Script.registerKey,"resumePlayers":TDV.Tour.Script.resumePlayers,"historyGoForward":TDV.Tour.Script.historyGoForward,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"unregisterKey":TDV.Tour.Script.unregisterKey,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"quizFinish":TDV.Tour.Script.quizFinish,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"shareSocial":TDV.Tour.Script.shareSocial,"textToSpeech":TDV.Tour.Script.textToSpeech,"enableVR":TDV.Tour.Script.enableVR,"historyGoBack":TDV.Tour.Script.historyGoBack,"createTween":TDV.Tour.Script.createTween,"disableVR":TDV.Tour.Script.disableVR,"translate":TDV.Tour.Script.translate,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setLocale":TDV.Tour.Script.setLocale,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"toggleVR":TDV.Tour.Script.toggleVR,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getRootOverlay":TDV.Tour.Script.getRootOverlay},"class":"Player","width":"100%","layout":"absolute"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2024.0.4.js.map
})();
//Generated with v2024.0.4, Mon Jun 10 2024